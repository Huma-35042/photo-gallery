import React from "react"
import { useEffect, useContext } from "react"
import SearchProvider from "../context/SearchContext"
import NavBar from "./NavBar"
import PhotoGallery from "./PhotoGallery"
import useLocalStorage from 'use-local-storage'
import './ThemeComp.css';
import ThemeProvider, { ThemeModeContext } from '../context/ThemeContext'


interface ThemeMode {
    dataTheme: string;
  }
export const ThemeComp = () => {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");
    const {dataTheme,  setDataTheme }= useContext(ThemeModeContext);
   
    const switchTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        setDataTheme({
            dataTheme: newTheme            
          });
      
    }
    useEffect(() => {

        document.body.setAttribute('data-theme', theme);
        
    }, [theme]);


    return (
        <>
          
                <div className="mainTheme" data-theme={theme}>
                <SearchProvider>
                  <div className="toggleButton">
                    < span className="form-check form-switch ">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={switchTheme} checked={theme === 'dark'} />
                    </span>
                    </div>   
                    <NavBar />
                    <PhotoGallery/>
                   
                 </SearchProvider>
            </div>
        </>
    )
}
export default ThemeComp;