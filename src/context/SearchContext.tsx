import { count } from 'console'
import React, { Children, ReactNode } from 'react'
import { createContext, useState, Dispatch, SetStateAction } from 'react'

export type SearchMode ={

    isSearch : boolean,
    fetchURL: string
}

export interface SearchModeContextInterface {
    isSearch : SearchMode,
    setIsSearch: Dispatch<SetStateAction<SearchMode>>
}

const defaultState ={
    isSearch: false,
    fetchURL: 'https://pixabay.com/api/?key=44795245-d71858eb8aa5f53baa0b1b1b6&page=1',
    setIsSearch : (isSearch: boolean) => {}
} as unknown as SearchModeContextInterface

export const  SearchModeContext = createContext<SearchModeContextInterface>(defaultState)

type SearchProvideProps ={
children: ReactNode

}
export default function SearchProvider({children}: SearchProvideProps)
{
const [isSearch, setIsSearch] = useState<SearchMode>({
isSearch: false,
fetchURL: ' '
});


return (

<SearchModeContext.Provider value={{isSearch, setIsSearch}}>
    {children}
</SearchModeContext.Provider>

)
}