import { Button, Container, Grid, TextField, Typography } from '@mui/material';
// import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData ] = useState({})
    const handleOnchange = e => {
        const  field = e.target.name;
        const value = e.target.value;
        const newLogInData = {...loginData};
        newLogInData[field]  = value;
        setLoginData(newLogInData);   
    }
    const handleLoginSubmit = e => {
        alert('submited email')
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{my: 8}} xs={12}>
                  <form onSubmit={handleLoginSubmit}>  
                    <Typography variant="h4" gutterBottom>Please Login</Typography>
                    <TextField
                    sx={{width:'50%',my:1}}
                    name='email'
                    onChange={handleOnchange} 
                    id="outlined-search" 
                    label="your email" 
                    type="email" 
                    /> 
                    <br />
                    <TextField
                    sx={{width:'50%',my:1}} 
                    name='password'
                    onChange={handleOnchange}
                    id="outlined-search" 
                    label="your password" 
                    type="password" 
                    />
                    <br />
                    <Button style={{paddingLeft: '20px', paddingRight: '20px', paddingTop:'5px', paddingBottom:'5px', backgroundColor:'#34FD99', border:'none', fontSize:'16px', borderRadius:'5px'}} sx={{my:1,}} type='submit' variant='contined'>Login</Button>
                    <br /> <br />
                    <Link to='/register' style={{textDecoration:'none'}}><Button variant='text'>New User? Please Registe !</Button>
                    </Link>
                  </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;