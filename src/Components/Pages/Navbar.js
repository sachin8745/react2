import { AppBar, Toolbar, Typography} from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom'

export default function Navbar1() {
  return <div >
      <div style={{height:'80px'}}></div>
      <AppBar  color='secondary'>
          <Toolbar>
              <Typography variant='h5'  sx={{flexGrow:1}}>
               Hellooo
               </Typography>
               
              <Link to='/' style={{color:'white',margin:'20px',fontSize:'25px', textDecoration:'none'}}>Home</Link>
              <Link to='/contact' style={{color:'white',margin:'20px',fontSize:'25px', textDecoration:'none'}}>Contact</Link>
              
          </Toolbar>
      </AppBar>

      
      
     
  </div>;
}
