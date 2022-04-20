import React, { useState } from "react";
import Base from "../core/Base";
import styled from "styled-components";

import {
  Button,
  Container,
  Grid,

} from "@mui/material";
import { signup } from "./helper/signupHelper.js";
import { Alert, AlertTitle } from "@mui/lab";
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const [visibility, setVisibility] = useState(false);
  let history = useHistory();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    address1: "",
    address2: "",
    city: "",
    pincode: "",
    contact: "",
    dob: "",
    error: "",
    success: false,
  });

  // Destucturing of values
  const { name, email, password, confirm_password, address1, address2, city, pincode, contact, dob, error } = values;

  // Password Visibility Methods
  const handleVisibility = () => {
    return visibility ? setVisibility(false) : setVisibility(true);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      error: false,
      [name]: event.target.value,
    });
  };
  const theme = createTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    console.log(values)
    if (password === confirm_password) {
      signup({
        customerName: name,
        email: email,
        password,
        address: address1 + ", " + address2 + ", " + city + ", " + pincode,
        contact,
        dob
      })
        .then((data) => {
          if (data.error) {
            setValues({ ...values, error: data.error, success: false });
          } else {
            console.log(values);
            setValues({
              ...values,
              name: "",
              email: "",
              password: "",
              confirm_password: "",
              address1: "",
              address2: "",
              city: "",
              pincode: "",
              contact: "",
              dob: "",
              error: "",
              success: false,
            });
            history.push("/signin");
          }
        })
        .catch((err) => console.log("Error in Signup"));
    } else {
      setValues({ ...values, error: "Password is Not same", success: false });
    }
  };

  const handleErrorMessage = () => {
    return (
      <div>
        <Alert severity="error" style={{ display: error ? "" : "none" }}>
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      </div>
    );
  };

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

  const SignupForm = () => {
    return (
      <>
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
                        SIGN UP
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
                            size="small"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Full Name"
                            name="name"
                            autoComplete="name"
                            value={name}
                            onChange={handleChange("name")}
                            size="small"
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
                            size="small"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="confirm-password"
                            label="Confirm Password"
                            type="password"
                            id="confirm-password"
                            value={confirm_password}
                            onChange={handleChange("confirm_password")}
                            size="small"
                          />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="Address1"
                            label="Address line 1"
                            type="address1"
                            id="address1"
                            autoComplete="address1"
                            value={address1}
                            onChange={handleChange("address1")}
                            size="small"
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            name="Address2"
                            label="Address line 2"
                            type="address2"
                            id="address2"
                            autoComplete="address2"
                            value={address2}
                            onChange={handleChange("address2")}
                            size="small"
                        />
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                          <Grid item xs={6}>
                          <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="city"
                            label="City"
                            type="city"
                            id="city"
                            autoComplete="city"
                            value={city}
                            onChange={handleChange("city")}
                            size="small"
                        />
                          </Grid>
                          <Grid item xs={6}>
                          <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="pincode"
                            label="Pincode"
                            type="pincode"
                            id="pincode"
                            autoComplete="pinccode"
                            value={pincode}
                            onChange={handleChange("pincode")}
                            size="small"
                        />
                          </Grid>
                        
                        </Grid>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="contact"
                            label="Contact Number"
                            type="contact"
                            id="contact"
                            autoComplete="contact"
                            value={contact}
                            onChange={handleChange("contact")}
                            size="small"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="dob"
                            label="DOB"
                            type="date"
                            id="dob"
                            autoComplete="dob"
                            value={dob}
                            onChange={handleChange("dob")}
                            defaultValue={"dd-mm-yyyy"}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            size="small"
                        />
                   
                        {/* <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        /> */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign up
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                
                            </Grid>
                            <Grid item>
                                <Link href="/signin" variant="body2">
                                    {"Already have account? Sign In"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
      </>
    );
  };

  return (
    <Base>    {handleErrorMessage()}
              {SignupForm()}
      {JSON.stringify(values)}
    </Base>
  );
};

export default Signup;

const SignupMain = styled.div`
  margin: 70px 0px;
  height: 80vh;
  /* border: 1px solid rgba(36, 36, 36, 0.8); */
  border-radius: 6px;
  box-shadow: 2px 2px 9px 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 990px) {
    margin: 20px 0px;
    height: 90%;

    .MuiGrid-container {
      .MuiGrid-item:first-child {
        display: none;
      }
    }
  }
`;

const ErrorMsg = styled.div`
  margin: 15px 155px;
`;

const ImageFile = styled.img`
  object-fit: cover;
  width: 100%;
  height: 80vh;
  border-radius: 6px 0px 0px 6px;
`;

const FormTitle = styled.div`
  text-align: center;
  margin: 30px 0px;
  font-size: 30px;

  @media (max-width: 612px) {
    margin: 10px 0px;
  }
`;

const FormBody = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;

  .MuiFormControl-root {
    margin: 10px 100px;
  }

  @media (max-width: 612px) {
    .MuiFormControl-root {
      margin: 3px 10px;
    }
  }
`;

const Already = styled.div`
  text-align: center;
  margin-top: 3px;
`;

const SubmitButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  button {
    margin: 15px 115px;

    a {
      text-decoration: none;
    }
  }
`;
