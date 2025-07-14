'use client'
import { Box, Typography, Button, IconButton } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { useState } from "react";

interface Book {
    id: number;
    title: string;
    author: string;
    cover: string;
    rating: number;
}

const books: Book[] = [
    {
        id: 1,
        title: "A neotropical companion",
        author: "Kricher, John C",
        cover: "https://catalogo.inpa.gov.br/img/e69/p03/11.jpg",
        rating: 4.5
    },
    {
        id: 2,
        title: "Climate change and adaptative land management in southern Africa",
        author: "Biodiversity & Ecology",
        cover: "https://catalogo.inpa.gov.br/img/e69/p03/21.jpg",
        rating: 4.5
    },
    {
        id: 3,
        title: "Conhecendo os recifes brasileiros",
        author: " Zilberberg, Carla",
        cover: "https://catalogo.inpa.gov.br/img/e69/p03/4.jpg",
        rating: 4.5
    },
    {
        id: 4,
        title: "Basic population gentics",
        author: "Bruce Wallace",
        cover: "https://catalogo.inpa.gov.br/img/e67/p03/21.jpg",
        rating: 4.5
    },
    {
        id: 5,
        title: "O código genético",
        author: "Woese, Carl R",
        cover: "https://catalogo.inpa.gov.br/img/e67/p03/15.jpg",
        rating: 4.5
    },
    {
        id: 6,
        title: "Genetics of populations",
        author: "Philip W. Hedrick",
        cover: "https://catalogo.inpa.gov.br/img/e67/p04/7.jpg",
        rating: 4.5
    }
];

export default function Highlights() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHidden, setIsHidden] = useState(false);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === books.length - 1 ? prev : prev + 1));
    };

    return (
        <div>
            <Typography variant="h4" sx={{ mb: 2 }}>
                Obras em Destaques
            </Typography>
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    overflow: 'hidden',
                    p: {
                        xs: 1,
                        sm: 2
                    },
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    boxShadow: 1,
                    mb: 4,
                    height: {
                        xs: 'auto',
                        // sm: '300px'
                    }
                }}
                onMouseEnter={() => setIsHidden(true)}
                onMouseLeave={() => setIsHidden(false)}
            >
                <Box
                    sx={{
                        display: 'flex',
                        gap: {
                            xs: 1,
                            sm: 2
                        },
                        transition: 'transform 0.3s ease-in-out',
                        transform: `translateX(-${currentIndex * 100}%)`,
                        minWidth: '100%'
                    }}
                >
                    {books.map((book, index) => (
                        <Box
                            key={book.id}
                            sx={{
                                flex: {
                                    xs: '0 0 50%',
                                    sm: '0 0 48%',
                                    md: '0 0 30%',
                                    lg: '0 0 15%'
                                },
                                minWidth: {
                                    xs: '50%',
                                    sm: '48%',
                                    md: '30%',
                                    lg: '15%'
                                },
                                maxWidth: {
                                    xs: '50%',
                                    sm: '48%',
                                    md: '30%',
                                    lg: '15%'
                                },
                                position: 'relative',
                                cursor: 'pointer',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    transition: 'transform 0.3s ease-in-out'
                                }
                            }}
                        >
                            <Box
                                component="img"
                                src={book.cover}
                                alt={book.title}
                                sx={{
                                    width: '100%',
                                    height: {
                                        xs: '250px',
                                        sm: '350px',
                                        md: '200px'
                                    },
                                    objectFit: 'cover',
                                    borderRadius: 1,
                                    transition: 'opacity 0.3s ease-in-out'
                                }}
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    p: 1,
                                    bgcolor: 'rgba(0, 0, 0, 0.7)',
                                    color: 'white',
                                    borderRadius: '0 0 4px 4px'
                                }}
                            >
                                <Typography variant="subtitle2" noWrap>
                                    {book.title}
                                </Typography>
                                <Typography variant="caption" noWrap>
                                    {book.author}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: 0,
                        transform: 'translateY(-50%)',
                        zIndex: 1,
                        display: isHidden ? 'block' : 'none'
                    }}
                >
                    <IconButton
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                        sx={{
                            color: 'white',
                            '&:hover': {
                                bgcolor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }}
                    >
                        <ArrowBackIosNew />
                    </IconButton>
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        right: 0,
                        transform: 'translateY(-50%)',
                        zIndex: 1,
                        display: isHidden ? 'block' : 'none'
                    }}
                >
                    <IconButton
                        onClick={handleNext}
                        disabled={currentIndex === books.length - 1}
                        sx={{
                            color: 'white',
                            '&:hover': {
                                bgcolor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }}
                    >
                        <ArrowForwardIos />
                    </IconButton>
                </Box>
            </Box>
        </div>
    );
}