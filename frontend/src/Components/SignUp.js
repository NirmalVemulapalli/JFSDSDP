import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DarkRedButton = ({ children, ...props }) => (
  <Button {...props} variant="contained" sx={{ bgcolor: '#8b0000', color: 'white', mt: 3, mb: 2 }}>
    {children}
  </Button>
);

const DarkRedContainer = ({ children }) => (
  <Container component="main" maxWidth="xs" sx={{ bgcolor: '#f7d0d0', borderRadius: '10px', p: 3 }}>
    {children}
  </Container>
);

export default function SignUp() {
  const navigate = useNavigate();
  const [role, setRole] = React.useState('');
  const [isSignedUp, setIsSignedUp] = React.useState(false); // State variable to track signup status

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');

    // Email format validation using regular expression
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return; // Stop the signup process if the email format is incorrect
    }

    console.log({
      name: data.get('name'),
      role: data.get('role'),
      email: email, // Use the validated email
      password: data.get('password')
    });

    axios.post('http://localhost:8085/register', {
      name: data.get('name'),
      role: data.get('role'),
      email: email, // Use the validated email
      password: data.get('password')
    }).then(res => {
      console.log(res.data);
      setIsSignedUp(true); // Set signup status to true
      navigate('/SignIn'); // Navigate to SignIn page after successful sign-up
    }).catch(error => {
      console.error('Error:', error);
    });
  };

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#8b0000', // Dark red color
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DarkRedContainer>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {!isSignedUp ? ( // Conditionally render the signup form if not signed up
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name='role'
                      value={role}
                      label="Role"
                      onChange={handleChange}
                    >
                      <MenuItem value={1}>Student</MenuItem>
                      <MenuItem value={2}>Visitor</MenuItem>
                      <MenuItem value={3}>Management</MenuItem>
                      <MenuItem value={4}>Counsellor</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
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
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <DarkRedButton type="submit" fullWidth>
                Sign Up
              </DarkRedButton>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/SignIn" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          ) : ( // Render success message if signed up
            <Typography variant="h6" align="center">
              Successfully signed up!
            </Typography>
          )}
        </Box>
      </DarkRedContainer>
    </ThemeProvider>
  );
}
