import { ElasticsearchQuery, useElasticsearch } from '@/lib/hooks/useElasticsearch';
import { Aggregation } from '@/lib/types/elastic';
import { Box, Button, Divider } from '@mui/material';
// import { routeModule } from 'next/dist/build/templates/pages';
import { useSearchParams } from 'next/navigation'
import { useRouter } from "next/navigation";
import { useEffect, useState, Dispatch, SetStateAction } from 'react';

interface FilterProps {
    setAggs: (aggs: Aggregation) => void;
    aggs: Aggregation;
    setFilters?: (filters: Aggregation | null) => void;
    filters?: Aggregation | null;
    // search: (params: ElasticsearchQuery) => Promise<void>;
    search: (params: string) => Promise<void>;
    filterEnable: boolean,
    setFilterEnable: Dispatch<SetStateAction<boolean>>;
    facets: any;
    setFacets: (facets: any) => void;
    checked: string[];
    setChecked: Dispatch<SetStateAction<string[]>>;
}

export default function Filter(
    {
        setAggs,
        aggs,
        setFilters,
        filters,
        search,
        filterEnable,
        setFilterEnable,
        facets,
        setFacets,
        // checked, 
        setChecked
    }: FilterProps) {
    const [filterClearEnable, setFilterClearEnable] = useState(true)
    const router = useRouter();
    const searchParams = useSearchParams()
    const q = searchParams.get('q')
    const fromYear = searchParams.get('fromYear')
    const toYear = searchParams.get('toYear')

    const handleFilter = async (facets: any) => {
        const query: Record<string, string> = { ...facets };
        if (q) query.q = q;
        const params = new URLSearchParams(query);
        router.push(`search?${params.toString()}`)
        setFilterClearEnable(false);
    }

    const handleClearFilter = async (facets: any) => {
        Object.keys(facets).forEach(key => delete facets[key]);
        
        setFilterClearEnable(true)
        const query: Record<string, string> = {};
        if (q) query.q = q;
        // console.log('Limpar Filtros:', facets)

        const params = new URLSearchParams(query);
        router.push(`search?${params.toString()}`)
        setChecked([]);
    }

    const isEqual = (a: any, b: any) => JSON.stringify(a) === JSON.stringify(b);
    useEffect(() => {
        const changed = isEqual(filters, aggs);
        setFilterEnable(changed)
        if (fromYear || toYear) {
            setFilterClearEnable(false)
        }

    }, [filters])

    return (
        <div>
            <Divider sx={{ mb: 1 }} />
            <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                    variant="outlined"
                    color="primary"
                    size='small'
                    onClick={() => handleClearFilter(facets)}
                    disabled={filterClearEnable}
                >
                    Limpar Filtros
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    size='small'
                    onClick={() => handleFilter(facets)}
                    disabled={filterEnable}
                >
                    Filtrar
                </Button>
            </Box>
        </div>

    );
}
