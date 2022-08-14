import React, {useState} from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
// import { GoogleLogin } from 'react-google-login';
// import Icon from './icon';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input';
import { signin, signup} from '../../actions/auth';


const intitialState = {firstName:'', lastName:'', email:'', password:'', confirmPasword:''};

const Auth = () => {

const classes = useStyles();
const [showPassword, setShowPassword] = useState(false);
const [isSignup, setIsSignup] = useState(false);
const [formData, setFormData] = useState(intitialState);
// const isSignup = true;


const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);  // when u chnging the state using old state, u need to create callback fxn, then take prev state and toggle it

const handleSubmit = (e) => {
    e.preventDefault();
    
    if(isSignup){
        dispatch(signup(formData, history));
    }
    else{
        dispatch(signin(formData, history));

    }
}

const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value});
}

const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
}

// const googleSuccess = async (res) => {
//     console.log(res);
// };
// const googleFailure = (err) => {
//     console.log(err);
//     console.log("Google sign in failed. Try Again after some time!!");
// };



  return (
    <Container component='main' maxWidth='xs'>
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant='h5'>{isSignup ? "Sign Up" : "Sign In"}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    { isSignup && (
                        <>
                            
                        <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half />
                        <Input name='lastName' label='Last Name' handleChange={handleChange}  half />
                            
                        </>
                    )}
                    <Input name='email' label='Email Address' handleChange={handleChange} type='email' />
                    <Input name='password' label='Password' handleChange={handleChange} type={ showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                    { isSignup && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' />}
                </Grid>

                <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                    { isSignup ? "Sign Up" : "Sign In"}
                </Button>

                {/* <GoogleLogin 
                    clientId='404108569170-8fpubrni0o9htmj058dburoj9d7u7k8s.apps.googleusercontent.com'
                    render={(renderProps) => (
                        <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant='contained'>
                            Google Sign In
                        </Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                /> */}

                    


                <Grid container justify='flex-end'>
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                            </Button>

                        </Grid>
                </Grid>
            </form>
        </Paper>
    </Container>
  )
}

export default Auth
