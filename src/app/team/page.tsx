import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, IconButton, Divider } from '@mui/material';
import { Phone, Email, LinkedIn, GitHub } from '@mui/icons-material';

interface TeamMember {
    name: string;
    role: string;
    image: string;
    phone?: string;
    email: string;
    linkedin?: string;
    github?: string;
}

const teamMembers: TeamMember[] = [
    {
        name: "Inácio Oliveira",
        role: "Bibliotecário",
        image: "/images/team/inacio.png",
        phone: "(92) 3643-3220",
        email: "inacio.oliveira@inpa.gov.br",
        linkedin: "https://linkedin.com/in/maria-silva",
        github: "https://github.com/maria-silva"
    },
    {
        name: "Solenir Farias",
        role: "Assistente em C&T",
        image: "/images/team/solenir.png",
        phone: "(92) 98888-8888",
        email: "solenir.farias@inpa.gov.br",
        linkedin: "https://linkedin.com/in/joao-oliveira",
        github: "https://github.com/joao-oliveira"
    },
    {
        name: "Jorge Cativo",
        role: "Bibliotecário",
        image: "/images/team/jorge.png",
        email: "jorge.cativo@inpa.gov.br",
        linkedin: "https://linkedin.com/in/ana-santos",
        github: "https://github.com/ana-santos"
    },
    {
        name: "Silvia Daves",
        role: "Assistente em C&T",
        image: "/images/team/silvia.png",
        email: "silvia.daves@inpa.gov.br",
        linkedin: "https://linkedin.com/in/ana-santos",
        github: "https://github.com/ana-santos"
    }
];

export default function About() {
    return (
        <Container
            sx={{
                pt: { xs: 14, sm: 10 },
                pb: { xs: 8, sm: 12 }
            }}
        >
            <Box sx={{ pt: 2 }}>
                <Typography
                    component="h2"
                    variant="h4"
                    gutterBottom
                    sx={{ color: 'text.primary' }}
                >
                    Equipe
                </Typography>
            </Box>
            <Grid container spacing={4} sx={{ mt: 4 }}>
                {teamMembers.map((member) => (
                    <Grid size={{ xs: 12, md: 3 }} key={member.name}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={member.image}
                                alt={member.name}
                                sx={{
                                    objectFit: 'cover',
                                    height: { xs: '300px', md: '250px' },

                                }}
                            />
                            <CardContent sx={{
                                flexGrow: 1,
                                display: 'flex',
                                flexDirection: 'column', justifyContent: 'space-between'
                            }}>
                                <div>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {member.name}
                                    </Typography>
                                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                        {member.role}
                                    </Typography>
                                    <Divider sx={{ my: 1 }} />
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                        {member.phone && (
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <IconButton
                                                    href={`tel:${member.phone}`}
                                                    color="primary"
                                                    size="small">
                                                    <Phone />
                                                </IconButton>
                                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                                    {member.phone}
                                                </Typography>
                                            </Box>
                                        )}
                                        {member.email && (
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <IconButton
                                                    href={`mailto:${member.email}`}
                                                    color="primary"
                                                    size="small">
                                                    <Email />
                                                </IconButton>
                                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                                    {member.email}
                                                </Typography>
                                            </Box>)}

                                    </Box>
                                </div>
                                <div>
                                    <Box sx={{ mt: 2, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                                        {member.linkedin && (
                                            <IconButton href={member.linkedin} color="primary" target="_blank">
                                                <LinkedIn />
                                            </IconButton>
                                        )}
                                        {member.github && (
                                            <IconButton href={member.github} color="primary" target="_blank">
                                                <GitHub />
                                            </IconButton>
                                        )}
                                    </Box>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}