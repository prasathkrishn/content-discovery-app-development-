import React, { useState } from 'react';
import { TextField, Button, Container, Paper, Typography, Link } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setUseremail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = async () => {
    try {
      const apiUrl = `http://localhost:8080/api/get`;
      const response = await axios.get(apiUrl);
      const users = response.data;

      const user = users.find(user => user.email === email);

      if (!user) {
        setErrorMessage('User not found');
        return;
      }

      if (user.password === password) {
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/');
      } else {
        setErrorMessage('Invalid password');
      }
    } catch (error) {
      console.error('Error during fetch:', error);
      setErrorMessage('Failed to login. Please try again.');
    }
  };

  return (
    <div style={{ backgroundImage: `url(https://img.freepik.com/free-vector/elegant-retro-film-strip-design-black-background_1017-42670.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <Container component="main" maxWidth="xs" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <Paper elevation={10} style={{ padding: 30, backgroundColor: 'rgba(255, 255, 255, 0.8)', color: grey[900], borderRadius: 25 }}>
          <Typography variant="h5" style={{ marginBottom: 20, color: blue[500] }}><b>Login</b></Typography>
          <form style={{ width: '100%' }} onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            <TextField label="email" variant="outlined" margin="normal" fullWidth value={email} onChange={(e) => setUseremail(e.target.value)} required />
            <TextField label="Password" variant="outlined" margin="normal" fullWidth type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            {errorMessage && <Typography style={{ color: 'red' }}>{errorMessage}</Typography>}
            <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: 20, backgroundColor: blue[500], color: grey[50] }}>Sign In</Button>
            <Link href="#" style={{ marginTop: 10, color: blue[500] }}>Forgot your password?</Link>
          </form>
          <Typography variant="body2" style={{ marginTop: 20 }}>Don't have an account? <Link href="/Register" style={{ color: blue[500] }}>Sign Up</Link></Typography>
        </Paper>
      </Container>
    </div>
  );
};

export default LoginForm;
