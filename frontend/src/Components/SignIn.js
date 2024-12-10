import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

function isValidEmail(email) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#8b0000', // Admin dashboard color
    },
    background: {
      default: '#f5f5f5', // Match Admin Dashboard background
    },
  },
});

function SignIn() {
  const [emailError, setEmailError] = useState(false);
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!isValidEmail(email)) {
      setEmailError(true);
      return;
    }

    if (!role) {
      alert('Please select a role.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8085/login', {
        email,
        password,
      });

      if (response.data.success) {
        const token = response.data.token;
        // Store token in localStorage or sessionStorage
        localStorage.setItem('authToken', token);

        // Navigate based on the role
        if (role === 'admin') {
          navigate('/admin-dashboard');
        } else if (role === 'educator') {
          navigate('/educator-dashboard');
        } else if (role === 'citizen') {
          navigate('/citizen-dashboard');
        }
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error(error);
      alert('Error during login');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: '#f7e6e6', // Match Admin Dashboard color
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container
          maxWidth="xs"
          sx={{
            backgroundColor: '#ffffff',
            borderRadius: '15px', // Rounded edges
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', // Add shadow
            padding: '20px',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    error={emailError}
                    helperText={emailError ? 'Please enter a valid email' : ''}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="role-label">Select Role</InputLabel>
                    <Select
                      labelId="role-label"
                      id="role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      required
                    >
                      <MenuItem value="admin">Admin</MenuItem>
                      <MenuItem value="educator">Educator</MenuItem>
                      <MenuItem value="citizen">Citizen</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  bgcolor: '#8b0000',
                  '&:hover': { bgcolor: '#a00000' },
                }}
              >
                Sign In
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Typography variant="body2" component="a" href="/SignUp" sx={{ color: '#8b0000' }}>
                    Don't have an account? Sign Up
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default SignIn;
