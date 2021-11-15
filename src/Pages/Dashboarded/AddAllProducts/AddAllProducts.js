import { Grid } from '@mui/material';
import React from 'react';
import AddService from '../../Shared/AddService/AddService';

const AddAllProducts = () => {
    return (
        <div>
            <Grid container spacing={1}>
        <Grid items xs={12}>
            <AddService></AddService>
        </Grid>
    </Grid>
        </div>
    );
};

export default AddAllProducts;