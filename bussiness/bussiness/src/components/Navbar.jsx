import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
       <AppBar>
              <Toolbar>
                  
                  <Typography variant="h6" sx={{ flexGrow:1}} >
                    PRODUCT APP
                  </Typography>
                  <Link to='/lg'>
                      <Button color="error">Login</Button>
                  </Link>
                  <Link to='/rg'>
                      <Button color="error">Registration</Button></Link>
                      <Link to='/home'>
                      <Button color='error'>Products</Button></Link>
                      <Link to="/cart">
                      <Button color='error'>Cart</Button></Link>
                  
            
    
          
              </Toolbar>
          </AppBar>
    </div>
  )
}

export default Navbar
