import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Typography, Box, Button, Paper, IconButton, CardActions } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MicIcon from '@mui/icons-material/Mic';

const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  };

  
export default function Details() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/api/movies/get')
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => console.error('Error fetching movie details:', error));
    }, []);

    if (movies.length === 0) {
        return <Typography color="white">Loading...</Typography>;
    }

    return (
        <Paper sx={{ padding: "20px", backgroundColor: "#0b0019" }}>
            {movies.map((movie, index) => (
                <Box key={index} sx={{ display: 'flex', marginBottom: '20px' }}>
                    <Card sx={{ width: "250px", margin: "20px", flexShrink: 0 }}>
                        <CardMedia
                            component="img"
                            height="300px"
                            image={movie.posterUrl}
                        />
                        <CardActions sx={{ padding: 0, backgroundColor: "#0b0019"  }}>
                            <Box sx={{ display: 'flex', width: '100%' }}>
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
                        <CardActions sx={{ padding: 0 , backgroundColor: "#0b0019" }}>
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
                                {movie.year} · {movie.duration} · Hollywood
                            </Typography>
                            <Typography variant="body2" color="white" sx={{ marginTop: "4px" }}>
                                {movie.rating} | {movie.duration} | {movie.genre}
                            </Typography>
                            <Typography variant="body2" color="white" sx={{ marginTop: "4px", fontWeight: 'bold' }}>
                                {movie.userRating} Rate · {movie.metascore} Metascore
                            </Typography>
                            <Typography variant="body2" color="white" sx={{ marginTop: "16px", width: '60%' }}>
                                {movie.description}
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: "40px" }}>
                                <Typography variant="body2" color="white">
                                    Audio Languages: {movie.languages}
                                </Typography>
                                <Typography variant="body2" color="white" sx={{ marginTop: "4px" }}>
                                    Subtitles: {movie.subtitles}
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
                                <IconButton aria-label="share" sx={{ color: 'white' }}>
                                    <MicIcon/>
                                </IconButton>
                            </CardActions>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Paper>
    );
}