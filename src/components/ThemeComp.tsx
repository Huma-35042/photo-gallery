import React from "react"
import { useEffect } from "react"
import SearchProvider from "../context/SearchContext"
import NavBar from "./NavBar"
import PhotoGallery from "./PhotoGallery"
import useLocalStorage from 'use-local-storage'
import './ThemeComp.css';


export const ThemeComp = () => {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        console.log(newTheme);
        setTheme(newTheme);
    }
    useEffect(() => {

        document.body.setAttribute('data-theme', theme);

    }, [theme]);


    return (
        <>
            <div data-theme={theme}>
                <SearchProvider>
                  <div className="toggleButton">
                    < span className="form-check form-switch ">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={switchTheme} checked={theme === 'dark'} />
                    </span>
                    </div>   
                    <NavBar />
                  
                    <PhotoGallery />
                </SearchProvider>
            </div>
        </>
    )
}
export default ThemeComp;