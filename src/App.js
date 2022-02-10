
import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import Navbar from './Components/Pages/Navbar';
export default function App() {
  return(
    <div>
   <Navbar/>
  <br/>
   <Routes>
     <Route exact path='/' element={<Home/>}/>
     <Route path='/contact' element={<Contact/>}/>
   </Routes>
   
         
    </div>
  )
  
}


