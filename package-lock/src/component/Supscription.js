import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link, useNavigate } from 'react-router-dom';
import './Supscription.css';
import backgroundImage from '../assets/imagered.jpg';

const logoUrl = 'https://appexchange.salesforce.com/partners/servlet/servlet.FileDownload?file=00P4V000011msraUAA';

function Copyright(props) {
  return (
    <Typography variant="body2" color="black" align="center" {...props}>
      {'Copyright © '}
      <Link color="black" to="https://DiscoverMoviz.com/">
        DiscoverMoviz
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      'Contains ads',
      'Up to 720p',
      'Dolby 2.1 enabled',
      'Only selected movies',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'contained',
    linkTo: '/loginform',
  },
  {
    title: 'PLUS+',
    subheader: 'Most popular',
    price: '999',
    description: [
      'Ads free streaming',
      'Up to 1080p',
      'Dolby 4.1 enabled',
      'Includes TV shows & web series',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'PremiumPLUS+',
    price: '1999',
    description: [
      'Ads free streaming',
      'Up to 4K',
      'Dolby Atmos enabled',
      'Includes TV shows & web series',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
];

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

const theme = createTheme({
  palette: {
    primary: {
      main: '#0d0506',
    },
    secondary: {
      main: '#0d0506',
    },
    background: {
      default: '#0d0506',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Merriweather, serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Merriweather, serif',
      fontWeight: 700,
    },
    body1: {
      fontFamily: 'Open Sans, sans-serif',
    },
    body2: {
      fontFamily: 'Open Sans, sans-serif',
    },
  },
});

export default function Pricing() {
  const navigate = useNavigate(); // Ensure useNavigate is correctly imported and used here

  return (
    <div className="Home" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
        <CssBaseline />
        <AppBar position="static" color="primary" elevation={0} sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
          <Toolbar sx={{ flexWrap: 'wrap' }}>
            <img src={logoUrl} alt="Logo" style={{ marginRight: '10px', height: '40px', width: 'auto' }} />
            <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1, fontWeight: 'bold' }}>
              REWINDREELS
            </Typography>
            <Box>
              <Button href="./loginform" variant="outlined" sx={{ mx: 1.5, color: 'white', borderColor: 'white' }}>
                Login
              </Button>
              <Link to="/">
                <Button variant="outlined" sx={{ mx: 1.5, color: 'white', borderColor: 'white' }} className="home-button">
                  Back
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
        <marquee style={{ color: 'white', backgroundColor: theme.palette.primary.main }}>
          <h3>HURRY UP!!! SPECIAL SALE ON PREMIUMPLUS+ PACK, GRAB 10% OFF ON CHECKOUT WITH CODE: FLAT10+.</h3>
        </marquee>
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
          <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
            Pricing plans
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" component="p">
            You can enjoy our latest TV shows and web series in 4K Dolby Atmos audio enabled with PremiumPLUS Plan.
          </Typography>
        </Container>
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {tiers.map((tier) => (
              <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                <Card>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: 'center' }}
                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                    subheaderTypographyProps={{ align: 'center' }}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                          ? theme.palette.grey[200]
                          : theme.palette.grey[700],
                    }}
                  />
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', mb: 2 }}>
                      <Typography component="h2" variant="h3" color="text.primary">
                        ₹{tier.price}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        /mo
                      </Typography>
                    </Box>
                    <ul>
                      {tier.description.map((line) => (
                        <Typography component="li" variant="subtitle1" align="center" key={line}>
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant={tier.buttonVariant}
                      color="primary"
                      onClick={() => navigate('/payment')}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container maxWidth="md" component="footer" sx={{ borderTop: (theme) => `1px solid ${theme.palette.divider}`, mt: 8, py: [3, 6] }}>
          <Grid container spacing={4} justifyContent="space-evenly">
            {footers.map((footer) => (
              <Grid item xs={6} sm={3} key={footer.title}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  {footer.title}
                </Typography>
                <ul>
                  {footer.description.map((item) => (
                    <li key={item}>
                      <Link to="#" variant="subtitle1" color="text.secondary">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <InstagramIcon color="primary" fontSize="large" />
              <FacebookIcon color="primary" fontSize="large" />
              <TwitterIcon color="primary" fontSize="large" />
              <YouTubeIcon color="primary" fontSize="large" />
            </Box>
          </Grid>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
}
