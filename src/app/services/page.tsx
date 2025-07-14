'use client'
import { Box, Typography, Grid, useTheme, styled, Card, CardContent, Paper } from '@mui/material';
import Image from "next/image";

const services = [
    {
        title: 'Empréstimo',
        icon: '/images/loan.png',
    },
    {
        title: 'Ficha catalográfica',
        icon: '/images/ficha.png',
    },
    {
        title: 'Nada Consta',
        icon: '/images/nada_consta.png',
    },
    {
        title: 'Autodepósito',
        icon: '/images/autodeposito.png',
    },
    {
        title: 'Repositório Institucional',
        icon: '/images/ri.png',
    },
    {
        title: 'Eventos',
        icon: '/images/events.png',
    },
    {
        title: 'Cursos & Treinamentos',
        icon: '/images/course.png',
    },
    {
        title: 'Serviço de Informação ao Cidadão',
        icon: '/images/sic.png',
    },
    {
        title: 'Dados Abertos',
        icon: '/images/open_data.png',
    }
];

const ServiceCard = styled(Box)(({ theme }) => ({
    background: `rgba(${theme.palette.background.default}, 0.8)`,
    backdropFilter: 'blur(8px)',
    borderRadius: '12px',
    padding: theme.spacing(2),
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: theme.shadows[4],
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(1),
}));

export default function Services() {
    const theme = useTheme();

    return (
        <Box sx={{ pt: 3 }}>
            <Typography
                component="h2"
                variant="h4"
                gutterBottom
                sx={{ color: 'text.primary' }}
            >
                Nossos Serviços
            </Typography>
            <Box sx={{ display: { xs: 'block', md: 'flex' }, gap: 2 }}>
                <Box sx={{ 
                    width: '50%',
                    display: { xs: 'none', md: 'block' }
                    }}>
                <Image
                    src="/images/service.png"
                    alt="Nossos Serviços"
                    width={500}
                    height={500}
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                        backgroundColor: 'rgba(228, 238, 255, 0.1)',
                    }}
                />
                </Box>
                <Grid container spacing={2}>
                    {services.map((service, index) => (
                        <Grid size={{ xs: 6, md: 4 }} key={index}>
                             <Card sx={{ 
                                minHeight: 150,
                                maxHeight: 150,
                                cursor: 'pointer',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    transition: 'transform 0.3s ease-in-out'
                                },
                                }}>
                             <CardContent sx={{ 
                                display: 'flex', 
                                flexDirection: 'column',
                                alignItems: 'center', gap: 2 }}>
                                <Image
                                    src={service.icon}
                                    alt={service.title}
                                    width={50}
                                    height={50}
                                    priority
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        objectFit: 'contain',
                                    }}
                                />
                                <Typography variant="subtitle2" component="div">
                                    {service.title}
                                </Typography>
                             </CardContent>
                             </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}