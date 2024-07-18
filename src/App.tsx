import React from 'react';
import logo from './logo.svg';
import PhotoGallery from './components/PhotoGallery';
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
//import { initializeApp } from "firebase/app";

function App() {
  
  /*const firebaseConfig = {
    apiKey: "AIzaSyAc3AnVKo3UCU3N91SjCWaxP8rA7MEbdYA",
    authDomain: "photo-gallery-c6c8e.firebaseapp.com",
    projectId: "photo-gallery-c6c8e",
    storageBucket: "photo-gallery-c6c8e.appspot.com",
    messagingSenderId: "1097886384246",
    appId: "1:1097886384246:web:b0a5b348ef12098b0c9f57"
  };

  const app = initializeApp(firebaseConfig);*/
  
  return (
    <div className="App">
     <div className="container">
      <NavBar/>
      <PhotoGallery />
      </div>
    </div>
  );
}

export default App;
