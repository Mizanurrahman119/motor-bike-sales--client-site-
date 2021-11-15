import { TextField, Button, Grid, Alert } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [adminSuccess, setAdminSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = {email};
        fetch('https://frozen-sierra-50215.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount) {
                setAdminSuccess(true);
            }
            console.log(data);
        })
        e.preventDefault();
    }
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <h2>Make An Admin</h2>
                <form onSubmit={handleAdminSubmit}>
                    <TextField sx={{width: '40%'}} 
                    onBlur={handleOnBlur}
                    id="outlined-textarea"
                    label="Email"
                    type='email'
                    placeholder="enter your email"
                    multiline
                    />

                    <Button style={{paddingLeft: '20px', paddingRight: '20px', paddingTop:'5px', paddingBottom:'5px', backgroundColor:'#34FD99', border:'none', fontSize:'16px', borderRadius:'5px', marginLeft: '10px'}} sx={{my:1,}} type='submit' variant='contined'>Make Admin</Button>
                    </form>
                    {adminSuccess && <Alert security='Success'>Make Admin Successfully !</Alert>}
                </Grid>
            </Grid>
            
        </div>
    );
};

export default MakeAdmin;