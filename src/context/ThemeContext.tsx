import React, { Children, ReactNode } from 'react'
import { createContext, useState,  Dispatch, SetStateAction } from 'react'
import useLocalStorage from 'use-local-storage'

const theme  =localStorage.getItem('theme');
//const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
// var defaultTheme = "";

// if (theme == 'dark')  
// {
//     defaultTheme = "dark";
//     console.log('line 11 theme ThemeContext theme ='+ theme+"defaulttheme = "+defaultTheme);
// }
// else if(theme == 'light')
// {
//     defaultTheme = "light";
//     console.log('line 16 theme ThemeContext theme ='+ theme+"defaulttheme = "+defaultTheme);
// }
// else
// {
//     defaultTheme = "light";
//     console.log('line 22 theme ThemeContext theme ='+ theme+"defaulttheme = "+defaultTheme);
// }


export type ThemeMode ={

    dataTheme: string
}

export interface ThemeModeContextInterface {
    dataTheme : ThemeMode,
    setDataTheme: Dispatch<SetStateAction<ThemeMode>>
}

const defaultState ={
    dataTheme: 'light',

    setDataTheme : (dataTheme: string) => {}
} as unknown as ThemeModeContextInterface

export const  ThemeModeContext = createContext<ThemeModeContextInterface>(defaultState)

type ThemeProvideProps ={
children: ReactNode

}
export default function ThemeProvider({children}: ThemeProvideProps)
{
const [dataTheme, setDataTheme] = useState<ThemeMode>({
    dataTheme: 'light' 
});


return (

<ThemeModeContext.Provider value={{dataTheme, setDataTheme}}>
    {children}
</ThemeModeContext.Provider>

)
}