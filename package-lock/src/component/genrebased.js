import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Typography, Box, Button, Paper, IconButton, CardActions } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { CarouselSpacing } from './Carousel';

const TMDB_API_KEY = '9a8713b9a26543f81c60b79b595716e1';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export default function Genres() {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [error, setError] = useState(null);
    const [selectedGenre, setSelectedGenre] = useState(27);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await axios.get(`${TMDB_BASE_URL}/genre/movie/list`, {
                    params: {
                        api_key: TMDB_API_KEY,
                    }
                });
                setGenres(response.data.genres);
            } catch (error) {
                console.error('Error fetching genres:', error);
                setError('Error fetching genres.');
            }
        };

        fetchGenres();
    }, []);

    useEffect(() => {
        const fetchMoviesByGenre = async () => {
            if (selectedGenre) {
                try {
                    const response = await axios.get(`${TMDB_BASE_URL}/discover/movie`, {
                        params: {
                            api_key: TMDB_API_KEY,
                            with_genres: selectedGenre
                        }
                    });

                    console.log('API Response:', response.data.results); // Debugging: log the fetched movies

                    // Filter movies released before 1950
                    const filteredMovies = response.data.results.filter(movie => {
                        const releaseYear = movie.release_date ? parseInt(movie.release_date.split('-')[0], 10) : null;
                        return releaseYear && releaseYear < 1950;
                    });

                    console.log('Filtered Movies:', filteredMovies); // Debugging: log the filtered movies

                    setMovies(filteredMovies);
                } catch (error) {
                    console.error('Error fetching movies:', error);
                    setError('Error fetching movies.');
                }
            }
        };

        fetchMoviesByGenre();
    }, [selectedGenre]);

    if (error) {
        return <Typography color="white">{error}</Typography>;
    }

    if (movies.length === 0) {
        return <Typography color="white">Loading...</Typography>;
    }

    return (<>
    
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
                                {movie.release_date ? movie.release_date.split('-')[0] : 'Unknown Year'} · {movie.runtime || 'N/A'} min · {movie.genre_ids && movie.genre_ids.length > 0 ? movie.genre_ids.map(id => {
                                    const genre = genres.find(genre => genre.id === id);
                                    return genre ? genre.name : '';
                                }).join(', ') : 'Unknown Genre'}
                            </Typography>
                            <Typography variant="body2" color="white" sx={{ marginTop: "4px" }}>
                                Rated | IMDb Rating: {movie.vote_average || 'N/A'} | {movie.genre_ids && movie.genre_ids.length > 0 ? movie.genre_ids.map(id => {
                                    const genre = genres.find(genre => genre.id === id);
                                    return genre ? genre.name : '';
                                }).join(', ') : 'Unknown Genre'}
                            </Typography>
                            <Typography variant="body2" color="white" sx={{ marginTop: "4px", fontWeight: 'bold' }}>
                                Metascore · N/A
                            </Typography>
                            <Typography variant="body2" color="white" sx={{ marginTop: "16px", width: '60%' }}>
                                {movie.overview || 'No overview available.'}
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: "40px" }}>
                                <Typography variant="body2" color="white">
                                    Languages: {movie.spoken_languages && movie.spoken_languages.length > 0 ? movie.spoken_languages.map(lang => lang.english_name).join(', ') : 'Unknown'}
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <CardActions>
                                <IconButton aria-label="add to favorites" sx={{ color: 'white' }}>
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share" sx={{ color: 'white' }}>
                                    <ShareIcon />
                                </IconButton>
                            </CardActions>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Paper>
        <CarouselSpacing/>
        </>
    );
}
