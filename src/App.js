import React from 'react';
import Navbar from './Navbar';
import './App.css'
import Login from './Login';
import { Route, Routes } from 'react-router-dom';
import Autres from './Autres';
import { useState } from 'react';
const App = () => {
  
  
  return (
    <div className='App'>
      <Routes>
      <Route path= "/" element= {<Login  />} />
      <Route path= "/autres" element= {<Autres />} />
      </Routes>
      

      
    
    </div>
  )
}

export default App
