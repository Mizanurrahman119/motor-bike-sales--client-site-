import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

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

    const handlePurchaseSubmit = e => {
        alert('submit successfully');
        handlePurchaseClose();
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
              defaultValue={name}
              size='small'
              />
              <TextField
              disabled
              sx={{width:'90%',my:1}}
              id='outline-size-small'
              defaultValue={price}
              size='small'
              />
              <TextField
              disabled
              sx={{width:'90%',my:1}}
              id='outline-size-small'
              defaultValue={cc}
              size='small'
              />
              <TextField 
              sx={{width:'90%',my:1}}
              id="outlined-search" 
              label="your name" 
              type="name" 
              />
              <TextField 
              sx={{width:'90%',my:1}}
              id="outlined-search" 
              label="your valid email" 
              type="email" 
              />
              <TextField
              sx={{width:'90%',my:1}} 
              id="outlined-search" 
              label="your phone number" 
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