import React, { useState } from "react";
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
import { signin } from './helper/signinHelper';
import { useHistory } from 'react-router-dom';
import Base from "../core/Base";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                DigitalDen
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignIn() {
    
    let history = useHistory();

    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        success: false,
      });
    
      // Destucturing of values
      const { email, password, error } = values;

      const handleChange = (name) => (event) => {
        setValues({
          ...values,
          error: false,
          [name]: event.target.value,
        });
      };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        signin({
            userName: email,
            password
          })
            .then((data) => {
                console.log(data);
              if (data.error) {
                setValues({ ...values, error: data.error, success: false });
              } else {
                  localStorage.setItem("Customer", JSON.stringify( data.data));
                setValues({
                  ...values,  
                  email: "",
                  password: "",
                  error: "",
                  success: false,
                });
                history.push("/");
              }
            })
    };

    return (
        <Base>
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ width: 500, height: 100 }}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/myphotobook-f86ff.appspot.com/o/Image%2FDigital%20Den%20(1).png?alt=media&token=b3c250cc-eb26-4b5a-b18a-f70726a8edca" alt="Logo" />
                    </Avatar>
                    <Typography component="h1" variant="h4" sx={{mt: 3}} >
                        SIGN IN
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={handleChange("email")}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={handleChange("password")}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
        </Base>
    );
}