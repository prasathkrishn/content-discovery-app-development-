import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Paper, Typography, Button, Box, IconButton, CircularProgress } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import StarIcon from '@mui/icons-material/Star';
import { Link, useParams } from 'react-router-dom'; // Import useParams
import Foot from './footer';
import Navbar from './navbar';

const VideoPage = () => {
    const { id } = useParams(); // Get the movie ID from the URL
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8081/api/movies/get/${id}`) // Use the ID in the API call
            .then(response => {
                setMovie(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError('Error fetching movie details');
                setLoading(false);
            });
    }, [id]); // Add ID to the dependency array

    if (loading) return <CircularProgress color="inherit" />;
    if (error) return <Typography color="error">Error: {error}</Typography>;
    if (!movie) return <Typography>No movie found</Typography>;

    // Format genres, languages, and runtime
    const genreList = movie.genre.split(',').map(g => g.trim()).join(' • ');
    const languageList = movie.languages.join(' • ');

    return (
        <div >
            <Navbar/>
            <Paper elevation={12} style={{ padding: '20px', background: '#222222', color: '#fff' }}>
                {/* Video Player */}
                <Box mb={3}>
                    <video
                        controls
                        width="100%"
                        height="600"
                        style={{ borderRadius: '8px' }}
                    >
                        <source src='https://imdb-video.media-imdb.com/vi1686962457/1434659607842-pgv4ql-1563749020667.mp4?Expires=1723623297&amp;Signature=lEQxGY3zzT1J-BC8tx025s~6ylFtLdFOu~IqLL4lAFyK9o5MwAkyDwjJyD1joyQo25joTTjG0l7-1MZbp-JjZfM8MGzrfj5gSt7~O3EC6wSpsJvYeZiyCxInk~E~FqvoFnsXBNaBInr~qNMbgpWj2BU2HoVyOcvYO-j1iuU7AFeOiwSAHNqCY2P4dh69rLvI5E16r5mQm66zsaxCy8nUlbVn6e6wfvEbSKWNUMcfxeCrN-9KdtjXz2YPKT-6CRCkgQD-QmH6ROA3eDBZIN~le2RXQJE9cx1BC95ymL88zIeT3RZBcGKQVq8oM8P3P--yH8wmRPuJ8LBYayXuQbbEqQ__&amp;Key-Pair-Id=APKAIFLZBVQZ24NQH3KA' type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Box>

                {/* Title and Rating */}
                <Box mb={2} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        {movie.title}
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ marginLeft: '30px', color: '#FFD700', marginBottom: '16px' }}>
                        <span style={{ color: '#FFD700' }}>
                            {[...Array(5)].map((_, index) => (
                                <StarIcon key={index} style={{ verticalAlign: 'middle', color: movie.userRating > index ? '#FFD700' : '#444' }} />
                            ))}
                        </span>
                        {movie.userRating.toFixed(1)}
                    </Typography>
                </Box>

                {/* Genres */}
                <Typography variant="subtitle1" color="textSecondary" sx={{
                    fontSize: '1.25em',
                    fontWeight: 'bold',
                    marginBottom: '16px',
                    color: '#fff' // Contrasting color for text
                }}>
                    {genreList}
                </Typography>

                {/* Runtime and Languages */}
                <Typography variant="subtitle1" color="textSecondary" sx={{
                    fontSize: '1.125em',
                    fontWeight: 'bold',
                    marginBottom: '16px',
                    color: '#fff' // Contrasting color for text
                }}>
                    <strong>Runtime:</strong> {movie.duration} <span style={{ margin: '0 8px', fontSize: '1.5em', verticalAlign: 'sub' }}>•</span> {languageList}
                </Typography>

                {/* Description */}
                <Typography variant="body1" paragraph>
                    {movie.description}
                </Typography>

                {/* Action Buttons */}
                <Box mt={3} display="flex" alignItems="center">
                    <Link to="/Subscription">
                        <Button variant="contained" color="primary" style={{ marginRight: '16px' }}>
                            Subscribe to Watch
                        </Button>
                    </Link>
                    <IconButton aria-label="play video">
                        <PlayCircleIcon style={{ color: '#fff' }} />
                    </IconButton>
                </Box>
            </Paper>
            <Foot/>
        </div>
    );
};

export default VideoPage;
