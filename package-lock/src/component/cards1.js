import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './cards.css';

export default function Teamspot() {
  return (
    <div className='body'>
      <Grid container spacing={4} style={{ padding: '20px' }}>
      <Grid item xs={12} sm={6} md={3} className='shad'>
          <Card
            sx={{ height: '100%', borderRadius: '16px' }} // Added borderRadius
            component={Link}
            to={'/card1'}
            className='cards2'
          >
            <CardMedia
              component="img"
              height="200"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY3gHBE5PQfte2XjeLo1HvGon9Nh81QVKgqA&s"
            />
            <CardContent style={{ color: "white" }}>
              <Typography variant="h6">
               Dramas:
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className='shad'>
          <Card
            sx={{ height: '100%', borderRadius: '16px' }} // Added borderRadius
            component={Link}
            to={'/card2'}
            className='cards2'
          >
            <CardMedia
              component="img"
              height="200"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH7JPUzm08HEXhECJPXucinnZWiezsXwjPxg&s"
            />
            <CardContent style={{ color: "white" }}>
              <Typography variant="h6">
               Comedies:
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className='shad'>
          <Card
            sx={{ height: '100%', borderRadius: '16px' }} // Added borderRadius
            component={Link}
            to={'/card3'}
            className='cards2'
          >
            <CardMedia
              component="img"
              height="200"
              image="https://upload.wikimedia.org/wikipedia/en/e/ef/The_Phantom_of_the_Opera_%281986_musical%29.jpg"
            />
            <CardContent style={{ color: "white" }}>
              <Typography variant="h6">
               Horror:
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className='shad'>
          <Card
            sx={{ height: '100%', borderRadius: '16px' }} // Added borderRadius
            component={Link}
            to={'/card5'}
            className='cards2'
          >
            <CardMedia
              component="img"
              height="200"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6tLQnevqxbznpQHZxpb_n9SzduA-u8umqpg&s"
            />
            <CardContent style={{ color: "white" }}>
              <Typography variant="h6">
               Sci-Fi:
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className='shad'>
          <Card
            sx={{ height: '100%', borderRadius: '16px' }} // Added borderRadius
            component={Link}
            to={'/card5'}
            className='cards2'
          >
            <CardMedia
              component="img"
              height="200"
              image="https://m.media-amazon.com/images/M/MV5BNTliMzlmYmUtYWRmYi00YzJjLWEwZDctZjgxMjFmMmE4ZjRiXkEyXkFqcGdeQXVyMDMxMjQwMw@@._V1_.jpg"
            />
            <CardContent style={{ color: "white" }}>
              <Typography variant="h6">
               Adventure:
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className='shad'>
          <Card
            sx={{ height: '100%', borderRadius: '16px' }} // Added borderRadius
            component={Link}
            to={'/card6'}
            className='cards2'
          >
            <CardMedia
              component="img"
              height="200"
              image="https://m.media-amazon.com/images/M/MV5BMTg5MjQ2OTI2OF5BMl5BanBnXkFtZTcwNjYzMDMzNA@@._V1_.jpg"
            />
            <CardContent style={{ color: "white" }}>
              <Typography variant="h6">
               Romance:
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className='shad'>
          <Card
            sx={{ height: '100%', borderRadius: '16px' }} // Added borderRadius
            component={Link}
            to={'/card2'}
            className='cards2'
          >
            <CardMedia
              component="img"
              height="200"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w91nCZ4ro_bLD70bqafOEdn6EWLqPbHxpA&s"
            />
            <CardContent style={{ color: "white" }}>
              <Typography variant="h6">
               Westerns:
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className='shad'>
          <Card
            sx={{ height: '100%', borderRadius: '16px' }} // Added borderRadius
            component={Link}
            to={'/card2'}
            className='cards2'
          >
            <CardMedia
              component="img"
              height="200"
              image="https://c8.alamy.com/comp/ENMN5M/intolerance-usa-1916-aka-loves-struggle-throughout-the-ages-regie-ENMN5M.jpg"
            />
            <CardContent style={{ color: "white" }}>
              <Typography variant="h6">
               Historical Films:
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    
    </div>
  );
}
