import React from 'react'
import { useContext, useState, useEffect } from 'react';
import ThemeProvider, { ThemeModeContext } from '../context/ThemeContext'

interface ThemeMode {
  dataTheme: string;
}


export default function Spinner() {
  const { dataTheme, setDataTheme } = useContext(ThemeModeContext);
  const [loader, setLoader] = useState("");
  
  useEffect(() => {
    changeLoader();

  }, [dataTheme]);

  const changeLoader = async () => {
    if (dataTheme.dataTheme === "light") {
      setLoader('../loader.gif');
     }
    else {
      setLoader('../loader-dark.gif');
     }

  }

  return (
    <div className='text-center'> 
    <img src={loader} alt='loading'></img>
    
    
    </div>
  )
}
