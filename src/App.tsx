import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import NavBar from './components/NavBar';
import PhotoGallery from './components/PhotoGallery';
import SearchProvider from './context/SearchContext';
import ThemeComp from './components/ThemeComp';
import useLocalStorage from 'use-local-storage'



function App() {

  const [mode, setMode] = useState('');

  return (
    <div className='container'>
      
    <ThemeComp />
  </div>
  );
}

export default App;
