import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MicIcon from '@mui/icons-material/Mic';
import { Button, Paper, Stack } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Link } from 'react-router-dom';
import './c5.css';

const speak = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  speechSynthesis.speak(utterance);
};

const MovieCard = ({ image, description }) => {
  const handleSpeak = () => {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    } else {
      speak(description);
    }
  };
  const [open, setOpen] = React.useState(false);
  const [videoUrl, setVideoUrl] = React.useState('');

  const handleOpen = (url) => {
    setVideoUrl(url);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setVideoUrl('');
  };
  return (
    <>
    <Card sx={{ width: '1400px' }}>
      <CardMedia component="img" height="300px" image={image} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions style={{display:'flex', marginBottom:'2rem'}}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="voice command" onClick={handleSpeak}>
          <MicIcon />
        </IconButton>
        <IconButton aria-label="play video" onClick={() => handleOpen('https://www.youtube.com/embed/EXAMPLE_VIDEO_ID')}>
          <PlayCircleIcon />
        </IconButton>
      </CardActions>
    </Card>
    <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogTitle>Movie Trailer</DialogTitle>
        <DialogContent>
          <iframe
            width="100%"
            height="500"
            src='https://imdb-video.media-imdb.com/vi1686962457/1434659607842-pgv4ql-1563749020667.mp4?Expires=1723623297&amp;Signature=lEQxGY3zzT1J-BC8tx025s~6ylFtLdFOu~IqLL4lAFyK9o5MwAkyDwjJyD1joyQo25joTTjG0l7-1MZbp-JjZfM8MGzrfj5gSt7~O3EC6wSpsJvYeZiyCxInk~E~FqvoFnsXBNaBInr~qNMbgpWj2BU2HoVyOcvYO-j1iuU7AFeOiwSAHNqCY2P4dh69rLvI5E16r5mQm66zsaxCy8nUlbVn6e6wfvEbSKWNUMcfxeCrN-9KdtjXz2YPKT-6CRCkgQD-QmH6ROA3eDBZIN~le2RXQJE9cx1BC95ymL88zIeT3RZBcGKQVq8oM8P3P--yH8wmRPuJ8LBYayXuQbbEqQ__&amp;Key-Pair-Id=APKAIFLZBVQZ24NQH3KA'
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </DialogContent>
        <div style={{display:'flex'}}>

<DialogActions>
  <Button onClick={handleClose}>Close</Button>
</DialogActions>
<DialogActions>
  <Link to="/Supscription">
  <Button >Subscribe to Watch</Button>
  </Link>
</DialogActions>
</div>
      </Dialog>    
</>
  );
};

export default function Teamspot2() {
  
  
  return (
    <div>
      <div>
        <Paper elevation={12} style={{ margin: '50px', background: '#222222' }}>
          <Stack direction="row" spacing={4}>
            <MovieCard
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc4Zx93c5nzLLVCnyBZtz8thZ-J1-6QJLG9w&s"
              description="The Great Dictator (1940) R | 175 min | Crime, Drama 9.2 Rate 100 Metascore Directed by Charlie Chaplin, this satirical comedy features Chaplin in a dual role as a ruthless dictator and a humble barber."
            />
            <MovieCard
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/His_Girl_Friday_%281940_poster%29.jpg/1200px-His_Girl_Friday_%281940_poster%29.jpg"
              description="His Girl Friday (1940) R | 175 min | Crime, Drama 9.2 Rate 100 Metascore Directed by Howard Hawks, a fast-paced screwball comedy starring Cary Grant and Rosalind Russell."
            />
            <MovieCard
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQRcgy0VbM5RfylT8DhKVNZUTO9vOELMs4hw&s"
              description="The Philadelphia Story (1940) 9.2 Rate 100 Metascore Directed by George Cukor, a romantic comedy with Katharine Hepburn, Cary Grant, and James Stewart."
            />
            <MovieCard
              image="https://c8.alamy.com/comp/BKA59T/arsenic-and-old-lace-1944-poster-aol-001-BKA59T.jpg"
              description="Arsenic and Old Lace (1944) PG | 107 min | Animation, Action, Adventure 9.2 Rate 100 Metascore Directed by Frank Capra, this dark comedy stars Cary Grant as a man discovering his aunts' peculiar hobby."
            />
          </Stack>
          <br />
          <br />
          <Stack direction="row" spacing={4}>
            <MovieCard
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh6AUozBYtEqrwWFZnP3F-D2rQKBl0LIP7yw&s"
              description="To Be or Not to Be (1942) R | 175 min | Crime, Drama 9.2 Rate 100 Metascore An ancient struggle between two Cybertronian races, the heroic Autobots and the evil Decepticons, comes to Earth, with a clue to the ultimate power held by a teenager."
            />
            <MovieCard
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUnZs2CqmuHZ3-n4BtFXS69N29MrSkmqJ9VA&s"
              description="The Lady Eve (1941) PG | 96 min | Animation, Adventure, Comedy 9.2 Rate 100 Metascore Directed by Preston Sturges, a romantic comedy starring Barbara Stanwyck and Henry Fonda."
            />
            <MovieCard
              image="https://upload.wikimedia.org/wikipedia/commons/1/14/Sunset_Boulevard_%281950_poster%29.jpg"
              description="Sunset Boulevard (1950) PG-13 | 144 min | Action, Adventure, Thriller 9.2 Rate 100 Metascore Directed by Billy Wilder, while often categorized as a drama, it contains darkly comedic elements about the film industry."
            />
            <MovieCard
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaIBf8UfL2A1IO2ns84lqF5Gn7TrzYfgIxGg&s"
              description="Harvey (1950) R | 175 min | Crime, Drama 9.2 Rate 100 Metascore Directed by Henry Koster, a comedy-drama featuring James Stewart as a man whose best friend is an invisible giant rabbit."
            />
          </Stack>
          <br />
          <br />
          <Stack direction="row" spacing={4}>
            <MovieCard
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEP6jRsAqhswB8DI5T8thlfR6sl3Jus69BJQ&s"
              description="Pan's Labyrinth (2006) R | 175 min | Crime, Drama 9.2 Rate 100 Metascore In the Falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world."
            />
            <MovieCard
              image="https://m.media-amazon.com/images/M/MV5BMTAyN2JmZmEtNjAyMy00NzYwLThmY2MtYWQ3OGNhNjExMmM4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX140_CR0,0,140,209_AL_.jpg"
              description="Lock, Stock and Two Smoking Barrels (1998) R | 175 min | Crime, Drama 9.2 Rate 100 Metascore Eddy persuades his three pals to pool money for a vital poker game against a powerful local mobster, Hatchet Harry. Eddy loses, after which Harry gives him a week to pay back 500,000 pounds."
            />
            <MovieCard
              image="https://i1.wp.com/www.itsagoal.net/wp-content/uploads/2017/02/12x6-goalpost-pvc-itsagoal..jpg?resize=768%2C511&ssl=1"
              description="Monkey Business (1952) R | 175 min | Crime, Drama 9.2 Rate 100 Metascore Directed by Howard Hawks, starring Cary Grant, Ginger Rogers, and Marilyn Monroe in a zany comedy about a youth serum."
            />
            <MovieCard
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHrFRY9tWHJi9zT5DCxbkCC1zZTRJeeeXtYQ&s"
              description="Gentlemen Prefer Blondes (1953) R | 175 min | Crime, Drama 9.2 Rate 100 Metascore Directed by Howard Hawks, featuring Marilyn Monroe and Jane Russell as showgirls on a cruise to Paris."
            />
          </Stack>
        </Paper>
      </div>
      <center>
        <Link to="/">
          <Button variant="contained" style={{ backgroundColor: 'black' }}>
            Home
          </Button>
        </Link>
      </center>
  
    </div>
  );
}
