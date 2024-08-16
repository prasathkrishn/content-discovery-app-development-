import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import './payments.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0d0506',
    },
    secondary: {
      main: '#0d0506',
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

export default function Payment() {
  const navigate = useNavigate();
  const [plan, setPlan] = React.useState('');

  const handleChange = (event) => {
    setPlan(event.target.value);
  };

  const handlePayment = () => {
    // Implement payment logic here
    alert('Payment Successful!');
    navigate('/');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="primary" elevation={0} sx={{ borderBottom: `1px solid ${theme.palette.divider}` }}>
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            REWINDREELS
          </Typography>
          <Button href="/" variant="outlined" sx={{ mx: 1.5, color: 'white', borderColor: 'white' }}>
            Back
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ mt: 8, mb: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Payment Details
        </Typography>
        <Box sx={{ mt: 4 }}>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="select-plan-label">Select Plan</InputLabel>
            <Select
              labelId="select-plan-label"
              id="select-plan"
              value={plan}
              label="Select Plan"
              onChange={handleChange}
            >
              <MenuItem value={999}>PLUS+ - ₹999/mo</MenuItem>
              <MenuItem value={1999}>PremiumPLUS+ - ₹1999/mo</MenuItem>
            </Select>
          </FormControl>
          <TextField label="Card Number" fullWidth sx={{ mb: 2 }} />
          <TextField label="Name on Card" fullWidth sx={{ mb: 2 }} />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField label="Expiry Date" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField label="CVV" fullWidth />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 4 }}
            onClick={handlePayment}
          >
            Make Payment
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
