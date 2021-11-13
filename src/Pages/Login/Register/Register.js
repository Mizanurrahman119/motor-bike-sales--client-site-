import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [loginData, setLoginData ] = useState({})
    const handleOnchange = e => {
        const  field = e.target.name;
        const value = e.target.value;
        const newLogInData = {...loginData};
        newLogInData[field] = value;
        setLoginData(newLogInData);  
    }
    const handleLoginSubmit = e => {
        if(loginData.password1 !== loginData.password2){
            alert('password did not match!');
            return
        }
            e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{my: 8}} xs={12}>
                  <form onSubmit={handleLoginSubmit}>  
                    <Typography variant="h4" gutterBottom>Please Register</Typography>
                    <TextField
                    sx={{width:'50%',my:1}}
                    name='name'
                    onChange={handleOnchange} 
                    id="outlined-search" 
                    label="your name" 
                    type="name" 
                    /> <br />
                    <TextField
                    sx={{width:'50%',my:1}}
                    name='email'
                    onChange={handleOnchange} 
                    id="outlined-search" 
                    label="your email" 
                    type="email" 
                    /> <br />
                    <TextField
                    sx={{width:'50%',my:1}} 
                    name='password1'
                    onChange={handleOnchange}
                    id="outlined-search" 
                    label="new password" 
                    type="password" 
                    /> <br />
                    <TextField
                    sx={{width:'50%',my:1}} 
                    name='password2'
                    onChange={handleOnchange}
                    id="outlined-search" 
                    label="Retype password" 
                    type="password" 
                    />
                    <br />
                    <Button style={{paddingLeft: '20px', paddingRight: '20px', paddingTop:'5px', paddingBottom:'5px', backgroundColor:'#34FD99', border:'none', fontSize:'16px', borderRadius:'5px'}} sx={{my:1,}} type='submit' variant='contined'>Register</Button>

                    <br /> <br />
                    <Link to='/login' style={{textDecoration:'none'}}>
                        <Button variant='text'>Already User? Please Login</Button>
                    </Link>
                  </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;