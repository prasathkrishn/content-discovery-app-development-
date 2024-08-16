import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Box, Typography, CardMedia, Grid } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const MovieDetails = () => {
  const { id } = useParams();
  // Mock movie data. Replace this with actual data fetching logic.
  const movie = {
    title: 'The Grapes of Wrath (1940)',
    image: 'https://c8.alamy.com/comp/M9TXEP/the-grapes-of-wrath-1940-twentieth-century-fox-film-with-henry-fonda-M9TXEP.jpg',
    details: 'R | 175 min | Crime, Drama\n9.2 Rating | 100 Metascore\nDirected by John Ford, based on John Steinbeck\'s novel, it depicts the struggles of the Joad family during the Great Depression.',
  };

  return (
    <Container>
      <Grid container spacing={2} sx={{ mt: 4 }}>
        <Grid item xs={12} sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            image={movie.image}
            alt={movie.title}
            sx={{ width: '100%', height: 'auto' }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '50%',
              p: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <PlayArrowIcon sx={{ fontSize: 60, color: 'white' }} />
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Typography variant="h3" gutterBottom>
            {movie.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {movie.details}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MovieDetails;
