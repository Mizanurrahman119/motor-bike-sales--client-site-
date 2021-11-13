import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Manages = ({purchaseOpen, handlePurchaseClose, service}) => {
    const {name, cc, price} = service;

    const {user} = useAuth();

    const initialPurchase = {userName: user.name, userEmail: user.email, userPhone: ''}
    const [purchaseInfo, setPurchaseInfo] = useState(initialPurchase);

    const handleOnBlur = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newPurchase = {...purchaseInfo};
      newPurchase[field] = value;
      console.log(newPurchase);
      setPurchaseInfo(newPurchase);
    }

    const handlePurchaseSubmit = e => {
        const purchases = {
          ...purchaseInfo,
          bikeName: name,
          bikePrice: price,
          bikeCc: cc
        }
        fetch('http://localhost:5000/purchase', {
          method: 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(purchases)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId) {
            handlePurchaseClose();
          }
        });
        e.preventDefault();
    }

    return (
        <>
            <Modal
        open={purchaseOpen}
        onClose={handlePurchaseClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Your Purchase 
          </Typography>
          <form onSubmit={handlePurchaseSubmit}>
              <TextField
              disabled
              sx={{width:'90%', my:1}}
              id='outline-size-small'
              name='bikeName'
              defaultValue={name}
              size='small'
              />
              <TextField
              disabled
              sx={{width:'90%',my:1}}
              id='outline-size-small'
              defaultValue={price}
              name='bikePrice'
              size='small'
              />
              <TextField
              disabled
              sx={{width:'90%',my:1}}
              id='outline-size-small'
              defaultValue={cc}
              name='bikeCc'
              size='small'
              />
              <TextField
              sx={{width:'90%',my:1}}
              id='outline-size-small'
              onBlur={handleOnBlur}
              defaultValue={user.displayName}
              name='userName'
              size='small'
              />
              <TextField
              sx={{width:'90%',my:1}}
              id='outline-size-small'
              onBlur={handleOnBlur}
              defaultValue={user.email}
              name='userEmail'
              size='small'
              />
              <TextField
              sx={{width:'90%',my:1}} 
              id="outlined-search" 
              onBlur={handleOnBlur}
              label="your phone number"
              name='userPhone' 
              type="phone" 
              />
              <Button type='submit' variant='contained'>Confirm Now</Button>
          </form>
          </Box>
      </Modal>
        </>    
    );
};

export default Manages;