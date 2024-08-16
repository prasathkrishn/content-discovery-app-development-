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
// import { Link } from 'react-router-dom';

export default function Teamspot3() {
  return (
    <div>
      <div>
        <Paper elevation={12} style={{ margin: "50px", background: "black" }}>
          <Stack direction="row" spacing={4}>
            <Card sx={{ width: "1500px" }}>
              <CardMedia
                component="img"
                height="300px"
                image="https://i.pinimg.com/originals/46/3d/9b/463d9b9ab4a363f3c07f94af66f62163.jpg"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Deliver Us Devil(2002)<br />
                  R | 175 min | Horror, Drama<br />
                  9.2 Rate 100 Metascore<br />
                  A bite from a spider somehow granted teenager Peter Parker its arachnid abilities and instead of using them for personal gain, he decided to help others with them.
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label="mic">
                  <MicIcon />
                </IconButton>
              </CardActions>
            </Card>

            <Card sx={{ width: "1400px" }}>
              <CardMedia
                component="img"
                height="300px"
                image="https://hips.hearstapps.com/hmg-prod/images/best-new-horror-movies-2023-infinity-pool-1672941464.jpg"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Infinity Pool (2014) <br />
                  R | 175 min | Horror, Drama<br />
                  9.1 Rate 99 Metascore<br />
                  The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label="mic">
                  <MicIcon />
                </IconButton>
              </CardActions>
            </Card>

            <Card sx={{ width: "1400px" }}>
              <CardMedia
                component="img"
                height="300px"
                image="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/a7b95043816ad77f2d8f87407cf12c2c4db95efba0bd10a0df5ef5c06fbc11af._RI_V_TTW_.jpg"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  NightMare (2015)<br />
                  9.0 Rate 96 Metascore<br />
                  After witnessing his parents' death, Bruce learns the art of fighting to confront injustice. When he returns to Gotham as Batman, he must stop a secret society that intends to destroy the city.
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label="mic">
                  <MicIcon />
                </IconButton>
              </CardActions>
            </Card>

            <Card sx={{ width: "1400px" }}>
              <CardMedia
                component="img"
                height="300px"
                image="https://qph.cf2.quoracdn.net/main-qimg-46e6e600db9e6d8826038462abdab1a0.webp"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Drag Me To Hell(2013) <br />
                  PG | 107 min | Horror, Adventure<br />
                  10.0 Rate 100 Metascore<br />
                  Rango is an ordinary chameleon who accidentally winds up in the town of Dirt, a lawless outpost in the Wild West in desperate need of a new sheriff.
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label="mic">
                  <MicIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Stack>

          <br />
          <br />

          <Stack direction="row" spacing={4}>
            <Card sx={{ width: "1500px" }}>
              <CardMedia
                component="img"
                height="300px"
                image="https://hips.hearstapps.com/hmg-prod/images/the-popes-exorcist-6438b7c3a8298.jpg?crop=1xw:1xh;center,top&resize=980:*"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  The popes Exorcist(2020) <br />
                  R | 175 min | Crime, Horror<br />
                  9.2 Rate 100 Metascore<br />
                  An ancient struggle between two Cybertronian races, the heroic Autobots and the evil Decepticons, comes to Earth, with a clue to the ultimate power held by a teenager.
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label="mic">
                  <MicIcon />
                </IconButton>
              </CardActions>
            </Card>

            <Card sx={{ width: "1400px" }}>
              <CardMedia
                component="img"
                height="300px"
                image="https://resizing.flixster.com/hVlznI9FBLIe2e77nLA5QCc3Ptk=/fit-in/180x240/v2/https://resizing.flixster.com/mfMpSRqwZ2XYg8uVYUEExaz2CkQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U4MDEyZjljLTBkOGQtNDNiZC1hZmY1LWQ3ZTEyYjYzZWNlNS5qcGc="
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Wrong Turn(2017)<br />
                  PG | 96 min | Horror, Adventure, <br />
                  9.2 Rate 100 Metascore<br />
                  78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label="mic">
                  <MicIcon />
                </IconButton>
              </CardActions>
            </Card>

            <Card sx={{ width: "1400px" }}>
              <CardMedia
                component="img"
                height="300px"
                image="https://qph.cf2.quoracdn.net/main-qimg-c948d46af65140fa4e1b92f4fd578535.webp"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  The Conjuring (2003)<br />
                  PG-13 | 144 min | Action, Horror, Thriller<br />
                  9.2 Rate 100 Metascore<br />
                  After earning 00 status and a licence to kill, secret agent James Bond sets out on his first mission as 007. Bond must defeat a private banker funding terrorists in a high-stakes game of poker at Casino Royale, Montenegro.
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label="mic">
                  <MicIcon />
                </IconButton>
              </CardActions>
            </Card>

            <Card sx={{ width: "1400px" }}>
              <CardMedia
                component="img"
                height="300px"
                image="https://resizing.flixster.com/v5oXQtZyIDr9f7C-hrf4RmTtqkU=/fit-in/180x240/v2/https://resizing.flixster.com/F9TnYmOGylspZGkpe_-WH7bJRGk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2VhMzU4MWY0LTM4NjYtNGYzZC05NzBiLWY4ZmZiMjBkZGRjNy5qcGc="
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  cellar (2022)<br />
                  R | 175 min | Crime, Drama<br />
                  9.2 Rate 100 Metascore<br />
                  Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label="mic">
                  <MicIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Stack>

          <br />
          <br />

          <Stack direction="row" spacing={4}>
            <Card sx={{ width: "1500px" }}>
              <CardMedia
                component="img"
                height="300px"
                image="https://resizing.flixster.com/qmcO1zjNbzkREECLVOC9dO8CTzE=/fit-in/180x240/v2/https://resizing.flixster.com/9WxKriao1BmRamIaqig2k8hd5uM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2YyZDQwYTM2LWZmYzEtNGUwMC05NzRkLTA3ODM0NThiNDE4Ny5qcGc="
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Talk To Me(2013) <br />
                  R | 175 min |Horror, Crime, Drama<br />
                  9.2 Rate 100 Metascore<br />
                  In the Falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label="mic">
                  <MicIcon />
                </IconButton>
              </CardActions>
            </Card>

            <Card sx={{ width: "1400px" }}>
              <CardMedia
                component="img"
                height="300px"
                image="https://image-pastemagazine-com-public-bucket.storage.googleapis.com/wp-content/uploads/2023/03/03080458/smile-2022-poster.jpg"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Smile(2018)<br />
                  R | 175 min | Crime, Horror<br />
                  9.2 Rate 100 Metascore<br />
                  Eddy persuades his three pals to pool money for a vital poker game against a powerful local mobster, Hatchet Harry. Eddy loses, after which Harry gives him a week to pay back 500,000 pounds.
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label="mic">
                  <MicIcon />
                </IconButton>
              </CardActions>
            </Card>

            <Card sx={{ width: "1400px" }}>
              <CardMedia
                component="img"
                height="300px"
                image="https://alldatmatterz.com/uploads/2022/02/The%20Nun%20(2018).jpg"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  The NUN(2018)<br />
                  R | 175 min | Crime, Drama,Horror<br />
                  9.2 Rate 100 Metascore<br />
                  A man is picked up by a fishing boat, bullet-riddled and suffering from amnesia, before racing to elude assassins and attempting to regain his memory.
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label="mic">
                  <MicIcon />
                </IconButton>
              </CardActions>
            </Card>

            <Card sx={{ width: "1400px" }}>
              <CardMedia
                component="img"
                height="300px"
                image="https://qph.cf2.quoracdn.net/main-qimg-98e702844aa26474aea8f3b665d0bcff.webp"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  The Grudge (2001)<br />
                  R | 175 min | Horror,Crime, Drama<br />
                  9.2 Rate 100 Metascore<br />
                  A fisherman, a smuggler, and a syndicate of businessmen match wits over the possession of a priceless diamond.
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label="mic">
                  <MicIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Stack>
        </Paper>
      </div>
    </div>
  );
}
