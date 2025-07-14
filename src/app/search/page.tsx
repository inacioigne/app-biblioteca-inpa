'use client'
import { Container, Grid, Typography, Box, Chip, useTheme, Divider, Pagination } from '@mui/material';
import { useSearchParams } from 'next/navigation'
import { ChangeEvent, useEffect } from 'react';
import SearchBar from '@/components/searchBar';
import CardResponse from '@/components/cardResponse';
import { useElasticsearch } from '@/lib/hooks/useElasticsearch';
import Loading from './loading';
import Facet from '@/components/facets/facet';
import { useRouter } from 'next/navigation';

interface TSearchWithParams {
    (params: URLSearchParams): Promise<void>;
}

export default function Search() {
    const router = useRouter();
    const { data, aggs, setAggs, filters, setFilters, loading, error, total, search, reset } = useElasticsearch();
    const searchParams = useSearchParams()
    const currentPage = Number(searchParams.get('page') || 1);

    const searchWithParams: TSearchWithParams = async (params) => {
        try {
            await search(params.toString());
        } catch (error) {
            console.error('Erro ao buscar:', error);
        }
    };

    const handlePagination = (event: ChangeEvent<unknown>, value: number) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const newParams = new URLSearchParams(searchParams);
        newParams.set('page', value.toString());
        console.log('Página selecionada:', newParams.toString());
        router.push(`?${newParams.toString()}`);
    };

    useEffect(() => {
        searchWithParams(searchParams)
    }, [searchParams]);


    return (
        <Container
            maxWidth="xl"
            sx={{
                pt: { xs: 14, sm: 10 },
                pb: { xs: 8, sm: 12 },
                backgroundRepeat: 'no-repeat',
                backgroundImage: 'radial-gradient(ellipse 80% 40% at 50% -20%, hsl(210, 100%, 90%), transparent)',
                colorScheme: 'light',
                '@media (prefers-color-scheme: dark)': {
                    backgroundImage: 'radial-gradient(ellipse 80% 40% at 50% -20%, hsl(210, 100%, 16%), transparent)',
                }
            }}
        >
            <Box sx={{
                mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center'
            }}>
                <SearchBar />
            </Box>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: '20% 80%',
                    gap: 2,
                    alignItems: 'center',
                    mt: 2,

                }}>
                {/* Facetas */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        height: '100%',
                        flexDirection: 'column',
                    }}>
                    <Facet
                        aggs={aggs}
                        setAggs={setAggs}
                        setFilters={setFilters}
                        filters={filters}
                        search={search}
                    />
                </Box>
                {/* Resultados */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                    <Typography
                        variant="h6"
                        component="p"
                        gutterBottom
                        sx={{
                            fontWeight: 'bold',
                            color: 'text.primary',
                            fontSize: '1rem',
                        }}
                    >
                        Sua pesquisa retornou {total} resultados
                    </Typography>
                    {loading ? <Loading /> :
                        <div>
                            <Grid container spacing={4}>
                                {data?.map((item, index) => (
                                    <Grid size={{ xs: 6, md: 3 }} key={index}>
                                        <CardResponse item={item} />
                                    </Grid>
                                ))}

                            </Grid>
                            <Pagination
                                count={Math.ceil(total / 20)}
                                page={currentPage}
                                color="primary"
                                onChange={handlePagination}
                                sx={{ mt: 2}}
                            />
                        </div>
                    }
                </Box>
            </Box>
        </Container>
    );
}