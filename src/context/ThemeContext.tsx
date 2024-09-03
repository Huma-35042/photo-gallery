import React, { Children, ReactNode } from 'react'
import { createContext, useState, Dispatch, SetStateAction } from 'react'

export type ThemeMode ={

    dataTheme: string
}

export interface ThemeModeContextInterface {
    dataTheme : ThemeMode,
    setDataTheme: Dispatch<SetStateAction<ThemeMode>>
}

const defaultState ={
    dataTheme: "light",
    setDataTheme : (dataTheme: string) => {}
} as unknown as ThemeModeContextInterface

export const  ThemeModeContext = createContext<ThemeModeContextInterface>(defaultState)

type ThemeProvideProps ={
children: ReactNode

}
export default function ThemeProvider({children}: ThemeProvideProps)
{
const [dataTheme, setDataTheme] = useState<ThemeMode>({
    dataTheme: "light"
});


return (

<ThemeModeContext.Provider value={{dataTheme, setDataTheme}}>
    {children}
</ThemeModeContext.Provider>

)
}