import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import NavBar from './components/NavBar';
import PhotoGallery from './components/PhotoGallery';
import SearchProvider from './context/SearchContext';


function App() {

  const [mode, setMode] = useState('');

  return (
    <div className="container">
     <SearchProvider>
   <NavBar/>
   <PhotoGallery />
    </SearchProvider>
  </div>
  );
}

export default App;
