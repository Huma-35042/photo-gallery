import React from 'react';
import logo from './logo.svg';
import PhotoGallery from './components/PhotoGallery';
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  
  return (
    <div className="App">
     <div className="container">
      <div className="d-flex justify-content-between">
      <NavBar/>
      <span className="switch-mode">
 
</span>
</div>
      <PhotoGallery />
      </div>
    </div>
  );
}

export default App;
