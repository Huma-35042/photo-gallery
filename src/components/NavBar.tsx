import React, { useContext, useState } from 'react'
import './NavBar.css';
import Search from './Search';
import SearchProvider, { SearchModeContext } from '../context/SearchContext';
import { Switch } from './Switch';


export default function NavBar() {
  const apiKey = '44795245-d71858eb8aa5f53baa0b1b1b6';
  
  return (

    <>



      <nav className='navbar'>
        <a className='navbar-brand'>Photo Gallery</a>
        <div className='search' >

          <Search />
        </div>
      </nav>


    </>
  )
}
