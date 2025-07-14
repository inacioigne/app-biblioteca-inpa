import { Box, Button, Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import { Item } from "@/lib/types/elastic";
import BookIcon from '@mui/icons-material/Book';

export default function CardResponse({ item }: { item: Item }) {
    // console.log('Rendering CardResponse for item:', item);
    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <CardMedia
                component="img"
                height="200"
                image={item.image || '/placeholder/book-cover.jpg'}
                alt={item.title}
                sx={{
                    objectFit: 'contain',
                    maxHeight: '200px',
                    maxWidth: '100%',
                    width: '100%',
                    height: 'auto',
                    backgroundColor: 'rgba(11, 54, 128, 0.1)',
                }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Chip
                    icon={<BookIcon />}
                    label="Livro"
                    variant="outlined"
                    size='small'
                    color='primary'
                />
                <Box sx={{
                    height: '100%',
                    pb: 2,
                    display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
                }}>
                    <Box>
                        <Typography
                            gutterBottom
                            variant="subtitle2"
                            component="div"
                            sx={{
                                fontWeight: 'bold',
                                color: 'text.primary',
                            }}>
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            {item.responsibility}
                        </Typography>
                    </Box>
                    <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                        href={`/items/${item.biblionumber}`}
                        component="a"
                        // target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver detalhes de ${item.title}`}
                        
                    >
                        Ver detalhes
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}