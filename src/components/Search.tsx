// src/components/Search.tsx
import './Search.css';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import SearchProvider, {SearchModeContext } from '../context/SearchContext';
import { count } from 'console';
import PhotoGallery from './PhotoGallery';



function Search() {
  
  const {isSearch,  setIsSearch }= useContext(SearchModeContext);
  
  const [query, setQuery] = useState('');
 const apiKey = "44795245-d71858eb8aa5f53baa0b1b1b6";
  
  const handleSearch = async () => {
 
    console.log('Search.tsx: query: '+ query);
    if (!query)
      {
        setIsSearch({isSearch :false ,  fetchURL: 'xyz.com'} );
        return;
      }
      setIsSearch({
        isSearch: true, 
        fetchURL:  `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo`
      }); 
    //setQuery('');
       
    };

  return (
    <div className='search'>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for images..."
        className="searchTerm"
      />
      <button className="searchButton" onClick={handleSearch}>
      <img className="icon-search" src="../search.png"></img>
      </button>
    </div>
  );
};

export default Search;
