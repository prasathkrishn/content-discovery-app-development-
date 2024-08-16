import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, CardActions, IconButton, Typography, Paper, Stack, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './FavoritesPage.css'; 

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Fetch favorites from backend
    axios.get('http://localhost:8081/api/favorites/get')
      .then(response => {
        setFavorites(response.data);
      })
      .catch(error => console.error('Error fetching favorite movies:', error));
  }, []);

  const removeFavorite = (id) => {
    axios.delete(`http://localhost:8081/api/favorites/${id}`)
      .then(() => {
        setFavorites(favorites.filter(movie => movie.id !== id));
      })
      .catch(error => console.error('Error removing favorite movie:', error));
  };

  return (
    <div className="favorites-page">
      <Paper elevation={12} className="favorites-paper" sx={{backgroundColor:'#222222'}}>
        <Typography variant="h4" className="favorites-title">
          My Favorite Movies
        </Typography>
        <Stack direction="row" spacing={4} className="favorites-stack">
          {favorites.length > 0 ? (
            favorites.map((movie) => (
              <Card key={movie.id} className="favorites-card">
                <CardMedia
                  component="img"
                  height="300px"
                  image={movie.posterUrl}
                  alt={movie.title}
                />
                <CardContent>
                  <Typography variant="h6" className="favorites-title">
                    {movie.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {movie.rating} Rate | {movie.metascore} Metascore<br />
                    {movie.description}
                  </Typography>
                </CardContent>
                <CardActions className="favorites-actions">
                  <IconButton aria-label="remove from favorites" onClick={() => removeFavorite(movie.id)}>
                    <FavoriteIcon color="error" />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton aria-label="play video" onClick={() => window.open(movie.videoUrl, '_blank')}>
                    <PlayCircleIcon />
                  </IconButton>
                </CardActions>
              </Card>
            ))
          ) : (
            <Typography variant="body1" className="no-favorites">
              You have no favorite movies.
            </Typography>
          )}
        </Stack>
        {/* <Link to="/Subscription">
          <Button variant="contained" color="primary" className="subscribe-button">
            Subscribe to Watch
          </Button>
        </Link> */}
      </Paper>
    </div>
  );
};

export default FavoritesPage;
