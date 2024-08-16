import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextField, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import backgroundImage from '../assets/imagered.jpg';

const logoUrl = 'https://appexchange.salesforce.com/partners/servlet/servlet.FileDownload?file=00P4V000011msraUAA';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        REWINDREELS
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Album() {
  const [imageUrl, setImageUrl] = React.useState('');
  const [selectedGenre, setSelectedGenre] = React.useState('All');
  const [authors, setAuthors] = React.useState([
    { name: 'Charlie Chaplin', genre: 'Comedy', image: 'https://images2.fanpop.com/image/photos/8900000/-Charlie-Chaplin-Smile-keep-smiling-8935793-320-240.jpg' },
    { name: 'Howard Hawks', genre: 'Comedy', image: 'https://goldenglobes.com/wp-content/uploads/2023/10/gettyimages-564799251.jpg?w=2000' },
    { name: 'George Cukor', genre: 'Romance', image: 'https://faroutmagazine.co.uk/static/uploads/1/2022/01/George-Cukor-1.jpg' },
    { name: 'Frank Capra', genre: 'Comedy', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfu3jj42jXYm5OpgbwIaPBpBWEY9oPPTwrw&s' },
    { name: 'Alfred Hitchcock', genre: 'Thriller', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuPMCT8Ssn4NbwXp-3o0LQhCE48cCEv0rV6Q&s' },
    { name: 'Stanley Kubrick', genre: 'Sci-Fi', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiKiLZhtM5_jVh-UoPbTZ2FJr2djIlmoYRaA&s' },
  ]);

  const [editingAuthor, setEditingAuthor] = React.useState(null);
  const [newImageUrl, setNewImageUrl] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (index) => {
    setEditingAuthor(index);
    setNewImageUrl(authors[index].image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleImageUpdate = () => {
    if (editingAuthor !== null) {
      const updatedAuthors = authors.map((author, index) =>
        index === editingAuthor ? { ...author, image: newImageUrl } : author
      );
      setAuthors(updatedAuthors);
      handleClose();
    }
  };

  const filteredAuthors = selectedGenre === 'All'
    ? authors
    : authors.filter((author) => author.genre === selectedGenre);

  return (
    <div className="Home" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>

      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <AppBar position="static" sx={{ backgroundColor: '#333' }}>
          <Toolbar>
            <img src={logoUrl} alt="Logo" style={{ marginRight: '10px', height: '40px', width: 'auto' }} />
            <Typography variant="h6" color="error" noWrap sx={{ flexGrow: 1, fontWeight: 'bold' }}>
              REWINDREELS
            </Typography>
            <Box>
              <Button href="./loginform" variant="outlined" sx={{ mx: 1.5, color: 'white', backgroundColor: '#1976D2' }}>
                Login
              </Button>
              <Link to="/">
                <Button href="/" variant="outlined" sx={{ mx: 1.5, color: 'white', backgroundColor: '#1976D2' }} className="home-button">
                  Back
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
        <main>
          <Box
            sx={{
              bgcolor: 'black',
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h5"
                variant="h4"
                align="center"
                color="white"
                gutterBottom
              >
                OUR TOP MOVIES !!
              </Typography>
              <Typography variant="h6" align="center" color="white" paragraph>
                Embark on an exhilarating cinematic journey with our carefully curated selection of top movies. Immerse yourself in a world where storytelling meets brilliance, as each frame unfolds a captivating narrative.
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              />
            </Container>
          </Box>

          {/* Authors Section */}
          <Box
            sx={{
              bgcolor: '#333',
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="md">
              <Typography
                component="h5"
                variant="h4"
                align="center"
                color="white"
                gutterBottom
              >
                Famous Authors
              </Typography>
              <Typography variant="h6" align="center" color="white" paragraph>
                Discover the brilliant minds behind the classics. Filter by genre to explore their works.
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 4 }}>
                <TextField
                  select
                  label="Filter by Genre"
                  value={selectedGenre}
                  onChange={(e) => setSelectedGenre(e.target.value)}
                  sx={{ width: 200 }}
                >
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="Comedy">Comedy</MenuItem>
                  <MenuItem value="Romance">Romance</MenuItem>
                  <MenuItem value="Thriller">Thriller</MenuItem>
                  <MenuItem value="Sci-Fi">Sci-Fi</MenuItem>
                  {/* Add more genres as needed */}
                </TextField>
              </Stack>
              <Grid container spacing={4}>
                {filteredAuthors.map((author, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4}>
                    <Card
                      sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2, boxShadow: 3 }}
                    >
                      <CardMedia
                        component="img"
                        height="200"
                        image={author.image}
                        alt={author.name}
                        sx={{ borderBottom: '1px solid #ddd' }}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {author.name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                          Genre: {author.genre}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary" onClick={() => handleClickOpen(index)}>
                          Update Image
                        </Button>
                        <Button size="small" color="primary">
                          Share
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>

          {/* Image URL Update Modal */}
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Update Author Image</DialogTitle>
            <DialogContent>
              <TextField
                label="New Image URL"
                value={newImageUrl}
                onChange={(e) => setNewImageUrl(e.target.value)}
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleImageUpdate} color="primary">
                Update Image
              </Button>
            </DialogActions>
          </Dialog>

          {/* Image URL Input Section */}
          <Box
            sx={{
              bgcolor: '#444',
              pt: 4,
              pb: 4,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h5"
                variant="h4"
                align="center"
                color="white"
                gutterBottom
              >
                Add Custom Image
              </Typography>
              <Typography variant="h6" align="center" color="white" paragraph>
                Enter an image URL to display a custom image below.
              </Typography>
              <Stack direction="column" spacing={2} alignItems="center">
                <TextField
                  label="Image URL"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  variant="outlined"
                  fullWidth
                  sx={{ maxWidth: 600 }}
                />
                {imageUrl && (
                  <Card sx={{ maxWidth: 600, borderRadius: 2, boxShadow: 3 }}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={imageUrl}
                      alt="Custom Image"
                    />
                  </Card>
                )}
              </Stack>
            </Container>
          </Box>
        </main>
        <Box sx={{ bgcolor: 'black', p: 6 }} component="footer">
          <Typography color="white" variant="h6" align="center" gutterBottom>
            Find us on!
          </Typography>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <InstagramIcon sx={{ fontSize: 40, color: 'white' }} />
            <FacebookIcon sx={{ fontSize: 40, color: 'white' }} />
            <TwitterIcon sx={{ fontSize: 40, color: 'white' }} />
            <YouTubeIcon sx={{ fontSize: 40, color: 'white' }} />
          </Grid>
          <Copyright />
        </Box>
      </ThemeProvider>
    </div>
  );
}
