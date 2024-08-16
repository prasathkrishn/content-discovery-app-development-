import * as React from 'react';
import { Card, CardMedia, CardContent, CardActions, IconButton, Typography, Paper, Box, Grid, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MicIcon from '@mui/icons-material/Mic';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Teamspot1() {
  const [open, setOpen] = React.useState(false);
  const [videoUrl, setVideoUrl] = React.useState('');
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/api/movies/get')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => console.error('Error fetching movie details:', error));
    
    axios.get('http://localhost:8081/api/favorites/get')
      .then(response => {
        setFavorites(response.data);
      })
      .catch(error => console.error('Error fetching favorites:', error));
  }, []);

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert('Sorry, your browser does not support text-to-speech.');
    }
  };

  const handleOpen = (url) => {
    setVideoUrl(url);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setVideoUrl('');
  };

  const addToFavorites = (movie) => {
    axios.post('http://localhost:8081/api/favorites/post', movie)
      .then(response => {
        console.log('Movie added to favorites:', response.data);
        setFavorites([...favorites, movie]); // Update local favorites list
      })
      .catch(error => console.error('Error adding movie to favorites:', error));
  };

  const isFavorite = (movieId) => {
    return favorites.some(fav => fav.id === movieId);
  };

  return (
    <div>
      <Paper elevation={12} style={{ margin: "20px", background: "#222222" }}>
        <Grid container spacing={4}>
          {movies.map((movie, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card sx={{ height: "500px", display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box>
                  <CardMedia
                    component="img"
                    height="250px"
                    image={movie.posterUrl}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {movie.title}<br />
                      {movie.rating} | {movie.duration} | {movie.genre}<br />
                      9.2 Rate | 100 Metascore<br />
                      {movie.description}
                    </Typography>
                  </CardContent>
                </Box>
                <CardActions sx={{ display: 'flex', justifyContent: 'flex-start', padding: '8px' }}>
                  <IconButton
                    aria-label="add to favorites"
                    onClick={() => addToFavorites(movie)}
                    style={{ color: isFavorite(movie.id) ? 'red' : '' }}
                  >
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton aria-label="voice command" onClick={() => speak(`${movie.description} ...`)}>
                    <MicIcon />
                  </IconButton>
                  <Link 
                    to={`/videopage/${movie.id}`}  // Passing the movie ID as a URL parameter
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <IconButton aria-label="play video">
                      <PlayCircleIcon />
                    </IconButton>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Dialog for video player */}
      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogTitle>Watch Video</DialogTitle>
        <DialogContent>
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded Video"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Link to="/Subscription">
            <Button>Subscribe to Watch</Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
