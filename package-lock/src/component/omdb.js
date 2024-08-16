import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Typography, Box, Button, Paper, IconButton, CardActions } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import MicIcon from '@mui/icons-material/Mic';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { useLocation } from 'react-router-dom';
import { CarouselSpacing } from './Carousel';
import Foot from './footer';

const TMDB_API_KEY = '9a8713b9a26543f81c60b79b595716e1';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export default function TMDb() {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const { search } = useLocation();
    const movieTitles = [new URLSearchParams(search).get('query')];

    const speak = (text) => {
        if ('speechSynthesis' in window) {
            if (isSpeaking) {
                window.speechSynthesis.cancel(); // Stop speaking if already speaking
                setIsSpeaking(false);
            } else {
                const speech = new SpeechSynthesisUtterance(text);
                speech.onend = () => setIsSpeaking(false);
                window.speechSynthesis.speak(speech);
                setIsSpeaking(true);
            }
        } else {
            alert('Sorry, your browser does not support text-to-speech.');
        }
    };

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const movieDetails = await Promise.all(movieTitles.map(async (title) => {
                    const searchResponse = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
                        params: {
                            api_key: TMDB_API_KEY,
                            query: title
                        }
                    });

                    const searchData = searchResponse.data.results[0];

                    if (!searchData) {
                        return null;
                    }

                    const movieResponse = await axios.get(`${TMDB_BASE_URL}/movie/${searchData.id}`, {
                        params: {
                            api_key: TMDB_API_KEY
                        }
                    });

                    return movieResponse.data;
                }));

                const validMovies = movieDetails.filter(movie => movie !== null);

                if (validMovies.length === 0) {
                    setError('No movies found or API error.');
                } else {
                    setMovies(validMovies);
                }

            } catch (error) {
                console.error('Error fetching movie details:', error);
                setError('Error fetching movie details.');
            }
        };

        fetchMovies();
    }, [search]);

    if (error) {
        return <Typography color="white">{error}</Typography>;
    }

    if (movies.length === 0) {
        return <Typography color="white">Loading...</Typography>;
    }

    return (
        <>
            <Paper sx={{ padding: "20px", backgroundColor: "#0b0019" }}>
                {movies.map((movie, index) => (
                    <Box key={index} sx={{ display: 'flex', marginBottom: '20px' }}>
                        <Card sx={{ width: "250px", margin: "20px", flexShrink: 0 }}>
                            <CardMedia
                                component="img"
                                height="300px"
                                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <CardActions sx={{ padding: 0 }}>
                                <Box sx={{ display: 'flex', width: '100%', backgroundColor: "#0b0019" }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{ flex: 1, marginRight: 0.5, marginTop: 2, height: '45px' }}
                                    >
                                        <ThumbUpIcon />
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        sx={{ flex: 1, marginLeft: 0.5, marginTop: 2 }}
                                    >
                                        <ThumbDownIcon />
                                    </Button>
                                </Box>
                            </CardActions>
                            <CardActions sx={{ padding: 0, backgroundColor: "#0b0019" }}>
                                <Button
                                    variant="contained"
                                    color="success"
                                    sx={{ width: '100%', marginTop: 2, height: '45px' }}
                                >
                                    Add to Favorite
                                </Button>
                            </CardActions>
                        </Card>

                        <Box sx={{ padding: "16px", flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Box>
                                <Typography variant="h3" component="h1" fontWeight="bold" color="white">
                                    {movie.title}
                                </Typography>
                                <Typography variant="h6" color="white" sx={{ marginTop: "8px" }}>
                                    {movie.release_date.split('-')[0]} · {movie.runtime} min · {movie.genres.map(genre => genre.name).join(', ')}
                                </Typography>
                                <Typography variant="body2" color="white" sx={{ marginTop: "4px" }}>
                                    Rated | IMDb Rating: {movie.vote_average} | {movie.genres.map(genre => genre.name).join(', ')}
                                </Typography>
                                <Typography variant="body2" color="white" sx={{ marginTop: "4px", fontWeight: 'bold' }}>
                                    Metascore · N/A
                                </Typography>
                                <Typography variant="body2" color="white" sx={{ marginTop: "16px", width: '60%' }}>
                                    {movie.overview}
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: "40px" }}>
                                    <Typography variant="body2" color="white">
                                        Languages: {movie.spoken_languages.map(lang => lang.english_name).join(', ')}
                                    </Typography>
                                </Box>
                                <Box>
                                    <CardActions>
                                        <IconButton aria-label="add to favorites" sx={{ color: 'white' }}>
                                            <FavoriteIcon />
                                        </IconButton>
                                        <IconButton aria-label="share" sx={{ color: 'white' }}>
                                            <ShareIcon />
                                        </IconButton>
                                        <IconButton
                                            aria-label="speak overview"
                                            sx={{ color: 'white' }}
                                            onClick={() => speak(movie.overview)}
                                        >
                                            <MicIcon />
                                        </IconButton>
                                    </CardActions>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Paper>
            <Typography variant="h3" component="h1" fontWeight="bold" color="white" bgcolor="#0b0019">
                Explore More
            </Typography>
            <CarouselSpacing />
            <hr />
            <Foot />
        </>
    );
}
