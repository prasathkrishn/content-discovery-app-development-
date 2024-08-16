import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Button, Paper, Stack } from '@mui/material';
// import { Link } from 'react-router-dom';
import './c5.css'; // Import CSS file

export default function Teamspot3() {
  return (
    <div>
      <div>
        <Paper elevation={12} style={{ margin: "50px", background: "black" }}>
          <Stack direction="row" spacing={4}>

            <Card sx={{ width: "1500px" }} className='card'>
              <CardMedia
                component="img"
                height="300px"
                image="https://i.pinimg.com/originals/46/3d/9b/463d9b9ab4a363f3c07f94af66f62163.jpg"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" className='card-content'>
                  <div className='brief-content'>
                    Deliver Us Devil (2002)<br />
                    R | 175 min | Horror, Drama<br />
                    9.2 Rate 100 Metascore<br />
                    A bite from a spider somehow granted teenager Peter Parker its arachnid abilities...
                  </div>
                  <div className='full-content'>
                    Deliver Us Devil (2002)<br />
                    
                  </div>
                </Typography>
              </CardContent>
              <CardActions >
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>

            {/* Repeat similar Card components for other cards */}

          </Stack>
        </Paper>
      </div>
    </div>
  );
}
