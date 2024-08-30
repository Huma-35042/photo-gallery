import React, { useContext, useState } from 'react'
import './NavBar.css';
import Search from './Search';
import SearchProvider, { SearchModeContext } from '../context/SearchContext';
import { Switch } from './Switch';


export default function NavBar() {
  const apiKey = '44795245-d71858eb8aa5f53baa0b1b1b6';
  const [mode, setMode] = useState("Light")
  let darkStyle = { color: 'white', backgroundColor: 'grey' }
  let lightStyle = { color: 'black', backgroundColor: 'white' }
  const [cssStyle, setCssStyle] = useState(lightStyle)

  const changeMode = () => {
    mode === "Light" ? (setCssStyle(darkStyle), setMode("Dark"), document.body.style.backgroundColor = "grey", document.body.style.color = "white") : (setCssStyle(lightStyle), setMode("Light"), document.body.style.backgroundColor = "white", document.body.style.color = "black")

  }
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
