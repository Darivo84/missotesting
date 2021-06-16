import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// Firebase
import firebaseCon from '../../connections/db';
// Auth0
import { useAuth0 } from '@auth0/auth0-react';

// Component
import Copyright from '../../components/copyright/Copyright';

// Image
import logo from '../../images/logo.svg';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const classes = useStyles();

  const {loginWithRedirect} = useAuth0();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    firebaseCon
    .auth()
    .signInWithEmailAndPassword(email, password)
    // .then(() => ())
    .catch((e) => {
      console.log(e);
    });
  }

  return (
    <div style={{ width: '100vw', height: '85vh', background: 'linear-gradient(45deg, #733BC3 30%, #C64156 90%)', marginTop: 0 }}>
    <Container component="main" maxWidth="xs" style={{ height: '85vh'}}>
      <CssBaseline />
      <div className={classes.paper} style={{ background: 'rgba(255,255,255, 0.4)', padding: '25px', borderRadius: '15px' }}>
      <Link to="/" variant="body2">
        <img src={logo} alt="Logo" style={{height: '100px', paddingTop: '10px'}}/>
      </Link>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" style={{color: '#fff'}}>
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(email) => setEmail(email)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(password) => setPassword(password)}
          />
          <Button
            onClick={() => handleLogin(email, password)}
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            // style={{color: 'linear-gradient(45deg, #733BC3 30%, #C64156 90%)'}}
          >
            Login
          </Button>

          <Button
            onClick={() => loginWithRedirect()}
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            // style={{color: 'linear-gradient(45deg, #733BC3 30%, #C64156 90%)'}}
          >
            {/* {console.log(loginWithRedirect())} */}
            Login with MISSO
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2" >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    <Copyright />
    </div>
  )
}

export default Login
