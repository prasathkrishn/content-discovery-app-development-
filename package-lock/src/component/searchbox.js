import React, { useState, useEffect } from 'react';
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
import { Link } from 'react-router-dom';
import './c5.css';

const movies = [
  { title: 'The Great Dictator (1940)', description: 'Directed by Charlie Chaplin, this satirical comedy features Chaplin in a dual role as a ruthless dictator and a humble barber.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc4Zx93c5nzLLVCnyBZtz8thZ-J1-6QJLG9w&s' },
  { title: 'His Girl Friday (1940)', description: 'Directed by Howard Hawks, a fast-paced screwball comedy starring Cary Grant and Rosalind Russell.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/His_Girl_Friday_%281940_poster%29.jpg/1200px-His_Girl_Friday_%281940_poster%29.jpg' },
];

const App = () => {
  const [query, setQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value) {
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(value.toLowerCase()) ||
        movie.description.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies([]);
    }
  };

  // Handle movie click
  const handleMovieClick = (movie) => {
    setQuery(movie.title);
    setFilteredMovies([]);
  };

  // Voice Search Functionality
  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setQuery(transcript);
        const filtered = movies.filter((movie) =>
          movie.title.toLowerCase().includes(transcript.toLowerCase()) ||
          movie.description.toLowerCase().includes(transcript.toLowerCase())
        );
        setFilteredMovies(filtered);
      };

      const micButton = document.getElementById('mic-button');
      micButton.addEventListener('click', () => {
        recognition.start();
      });

      return () => {
        recognition.stop();
      };
    }
  }, []);

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for movies..."
        />
        <IconButton aria-label="speak" id="mic-button">
          <MicIcon />
        </IconButton>
        {filteredMovies.length > 0 && (
          <ul className="suggestions-list">
            {filteredMovies.map((movie, index) => (
              <li
                key={index}
                onClick={() => handleMovieClick(movie)}
                className="suggestion-item"
              >
                <strong>{movie.title}</strong>
                <p>{movie.description}</p>
              </li>
            ))}
          </ul>
        )}
        <style jsx>{`
          input {
            width: 90%;
            padding: 8px;
            box-sizing: border-box;
          }
          .search-container {
            display: flex;
            align-items: center;
          }
          .suggestions-list {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            border: 1px solid #ccc;
            background: #fff;
            margin: 0;
            padding: 0;
            list-style: none;
            max-height: 200px;
            overflow-y: auto;
          }
          .suggestion-item {
            padding: 8px;
            cursor: pointer;
          }
          .suggestion-item:hover {
            background: #f0f0f0;
          }
          .suggestion-item p {
            margin: 0;
            font-size: 0.9em;
            color: #555;
          }
        `}</style>
      </div>

      <div>
        <Paper elevation={12} style={{ margin: "50px", background: "black" }}>
          <Stack direction="row" spacing={4}>
            {movies.map((movie, index) => (
              <Card key={index} sx={{ width: "1500px" }}>
                <CardMedia
                  component="img"
                  height="300px"
                  image={movie.image}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {movie.title} <br />
                    {movie.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton aria-label="speak">
                    <MicIcon />
                  </IconButton>
                </CardActions>
              </Card>
            ))}
          </Stack>

          <br />
          <br />

          <center>
            <Link to="/">
              <Button variant="contained" style={{ backgroundColor: "black" }}>Home</Button>
            </Link>
          </center>
        </Paper>
      </div>
    </div>
  );
};

export default App;
