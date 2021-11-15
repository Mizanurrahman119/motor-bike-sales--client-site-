import React from 'react';
import { Grid } from '@mui/material';
import Purchases from '../Purchases/Purchases';

const MyOrders = () => {
    return (
        <Grid container spacing={1}>
        <Grid items xs={12}>
            <Purchases></Purchases>
        </Grid>
    </Grid>
    );
};

export default MyOrders;