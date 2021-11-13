import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import useAuth from '../../../Hooks/useAuth'
import { Box } from '@mui/system';

const Header = () => {
    const {user, logout} = useAuth()
    return (
        <>
            <Navbar className="header-container" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand className='web-name' style={{textDecoration:'none', fontSize:'40px',fontWeight:'bold'}} href="#home">Motor Bike Sales</Navbar.Brand>
                    <Nav className="button-container">

                    <Link style={{margin:'10px',textDecoration:'none', fontSize:'20px',fontWeight:'bold'}} to="/home">Home</Link>

                    <Link style={{margin:'10px', textDecoration:'none', fontSize:'20px',fontWeight:'bold'}} to="/explores">Explores</Link>

                    {
                        user?.email ? 
                        <Box>
                            <Link style={{margin:'10px', textDecoration:'none', fontSize:'20px',fontWeight:'bold'}} to="/dashboard">Dashboard</Link>
                            <button className='logout-btn' onClick={logout} style={{margin:'10px', textDecoration:'none', fontSize:'20px',fontWeight:'bold'}} >Logout</button>
                        </Box>
                        :
                        <Link style={{margin:'10px', textDecoration:'none', fontSize:'20px',fontWeight:'bold'}} to="login">Login</Link>
                    }

                    </Nav>
                </Container>
            </Navbar>   
        </>
    );
};

export default Header;