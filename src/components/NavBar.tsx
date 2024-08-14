import React, { useContext, useState } from 'react'
import './NavBar.css';
import Search from './Search';
import SearchProvider, { SearchModeContext } from '../context/SearchContext';


export default function NavBar() {
  const { isSearch, setIsSearch } = useContext(SearchModeContext);
  const apiKey = '44795245-d71858eb8aa5f53baa0b1b1b6';
  

  const handleClick = () => {
    
    setIsSearch({
      isSearch: false,
      fetchURL: `https://pixabay.com/api/?key=${apiKey}&page=1`
    });
    }

  return (
    
   <>
  
  <nav className="navbar">
  <span className="navbar-brand">Photo Gallery</span>
  <div>
   <div>
      <Search/>
   </div>
</div>
</nav>

  </> 
  )
}
