import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../Hooks/useAuth';

const Purchases = () => {
    const {user} = useAuth();
    const [purchase, setPurchase] = useState([]);
    useEffect(() => {
        const url = `https://frozen-sierra-50215.herokuapp.com/purchase?userEmail=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPurchase(data));
    },[user])
    return (
        <div>
            <h2>Purchases: {purchase.length}</h2>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: "70%" }} aria-label="Purchase table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Bikr-name</TableCell>
            <TableCell align="center">Bike-Price</TableCell>
            <TableCell align="center">Bike-CC</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {purchase.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.userName}
              </TableCell>
              <TableCell align="center">{row.bikeName}</TableCell>
              <TableCell align="center">{row.bikePrice}</TableCell>
              <TableCell align="center">{row.bikeCc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default Purchases;