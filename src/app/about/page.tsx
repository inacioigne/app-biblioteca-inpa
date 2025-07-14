import { Email, Phone } from "@mui/icons-material";
import { Container, Box, Typography, IconButton } from "@mui/material";
import Image from "next/image";

export default function About() {
    return (
        <Container
            sx={{
                pt: { xs: 14, sm: 10 },
                pb: { xs: 8, sm: 12 }
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 2,
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                }}>
                <Image
                    src="/images/library.jpg"
                    alt="About"
                    width={500}
                    height={500}
                    style={{
                        width: '100%',
                        height: '300px',
                        objectFit: 'cover',
                    }}
                />
            </Box>
            <Box
                sx={{
                    mt: 2,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: 2
                }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1
                    }}>
                    <Typography variant="h6" gutterBottom>
                        Contato
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <IconButton
                            color="primary"
                            size="small">
                            <Phone />
                        </IconButton>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                            (92) 3643-3220
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <IconButton
                            color="primary"
                            size="small">
                            <Email />
                        </IconButton>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                            biblioteca@inpa.gov.br
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1
                    }}>
                    <Typography variant="h6" gutterBottom>
                        Horário de funcionamento
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        Segunda a Sexta: 8:00 - 18:00
                    </Typography>
                </Box>


            </Box>

            <Box
                sx={{
                    mt: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1
                }}>
                <Typography variant="h6" gutterBottom>
                    Como chegar
                </Typography>
                <Box
                    sx={{
                        // mt: 2,
                        width: '100%',
                        height: '350px',
                        aspectRatio: '16/9',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                    }}
                    dangerouslySetInnerHTML={{
                        __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0025980324904!2d-59.99185782550352!3d-3.093966940272908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1ad07d1944fb%3A0x12dd4a8299d99034!2sBiblioteca%20do%20INPA!5e0!3m2!1spt-BR!2sbr!4v1746367716495!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
                    }}
                />
            </Box>
        </Container>
    );
}