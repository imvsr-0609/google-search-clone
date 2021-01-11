import React, { createContext , useState ,useEffect } from 'react'

export const SearchContext = createContext()

const SearchContextProvider = (props)=> {

   const[searchText , setSearchText] = useState(()=>{
       const searchInput = localStorage.getItem('searchText')
       return searchInput
   })


   const addInput = (input) =>{
       setSearchText(input)
   }
    useEffect(()=>{
           localStorage.setItem('searchText' , searchText) 
        }, [searchText])

    return (
        <SearchContext.Provider value = {{searchText , addInput}}>
        {props.children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider
