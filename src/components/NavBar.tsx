import React, { useState } from 'react'
import './NavBar.css';
export default function NavBar() {


  return (
  <>
  
  <nav className="navbar">
   
  <a className="navbar-brand">Photo Gallery</a>
  <div className="wrap">
   <div className="search">
      <input type="text" className="searchTerm" placeholder="Search"/>
      <button type="submit" className="searchButton">
        <i className="fa fa-search"></i>
     </button>
   </div>
</div>
</nav>

  </> 
  )
}
