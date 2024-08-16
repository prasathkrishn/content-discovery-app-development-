import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MicIcon from '@mui/icons-material/Mic';

const MovieCardspeech = () => {
  const text = `Casablanca (1942)
    PG | 107 min | Animation, Action, Adventure
    10.0 Rate 100 Metascore
    Directed by Michael Curtiz, set during World War II, it's a romantic drama known for its memorable quotes and performances.`;

  const speak = () => {
    if('speechSynthesis' in window)
    {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = 'en-IN';
      window.speechSynthesis.speak(speech);
    } 
    else{
      alert('Sorry, your browser does not support speech synthesis.');
    }
  };

  return (
    <Card sx={{ width: "1400px" }}>
      <CardMedia
        component="img"
        height="300px"
        image="https://media.gettyimages.com/id/543140409/photo/from-left-to-right-actors-paul-henreid-ingrid-bergman-and-humphrey-bogart-form-a-classic-love.jpg?s=612x612&w=gi&k=20&c=u9sOuXnJQuicm5KzwXcj5pQLO7_NV98HrbjUkfYFp-A="
        alt="Casablanca"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Casablanca (1942) <br />
          PG | 107 min | Animation, Action, Adventure <br />
          10.0 Rate 100 Metascore <br />
          Directed by Michael Curtiz, set during World War II, it's a romantic drama known for its memorable quotes and performances.
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="voice command" onClick={speak}>
          <MicIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MovieCardspeech;

