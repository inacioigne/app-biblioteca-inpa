import { Box, Container, InputLabel, Stack, TextField, Button, Typography, Link } from "@mui/material";
import Brand from "./brand";
import Image from "next/image";
export default function Footer() {
    return (
        <Box
            sx={{
                width: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% 120%, hsl(210, 100%, 90%), transparent)',
                colorScheme: 'light',
                '@media (prefers-color-scheme: dark)': {
                    backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% 120%, hsl(210, 100%, 16%), transparent)',
                }
            }}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 4, sm: 8 },
                    py: { xs: 8, sm: 10 },
                    textAlign: { sm: 'center', md: 'left' }
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        width: '100%',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 4,
                            minWidth: { xs: '100%', sm: '60%' },
                        }}
                    >
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            width: { xs: '100%', sm: '60%' }
                        }}>
                            <Box sx={{ ml: 1 }}>
                                <Brand />
                            </Box>
                            <Image
                                src="/logo/INPA-MCTI-GF.png"
                                alt=""
                                width={300}
                                height={100} />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
                            flexDirection: 'column',
                            gap: 1,
                        }}
                    >
                        <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                            Serviços
                        </Typography>
                        <Link color="text.secondary" variant="body2" href="#">
                            Repositório Institucional
                        </Link>
                        <Link color="text.secondary" variant="body2" href="#">
                            Nada Consta
                        </Link>
                        <Link color="text.secondary" variant="body2" href="#">
                            Cursos
                        </Link>
                        <Link color="text.secondary" variant="body2" href="#">
                            Eventos
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
                            flexDirection: 'column',
                            gap: 1,
                        }}
                    >
                        <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                            Sobre
                        </Typography>
                        <Link color="text.secondary" variant="body2" href="/team">
                            Equipe
                        </Link>
                        <Link color="text.secondary" variant="body2" href="/about">
                            Como chegar
                        </Link>
                        <Link color="text.secondary" variant="body2" href="/about">
                            Contato
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>

    );
}