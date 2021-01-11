import React, { createContext , useState ,useEffect } from 'react'
import uuid from 'react-uuid'

export const HistoryContext = createContext()

const HistoryContextProvider = (props)=>{

    const[searchHistory , setSearchHistory] = useState(()=>{
        const history = localStorage.getItem('history')
        return history ? JSON.parse(history) : ''
       })
    
       const addHistory = (title , url) =>{
        setSearchHistory([...searchHistory , 
        {title: title , url: url , id: uuid()}
    ])
    
    
   }

   const removeHistory = (id)=>{
       setSearchHistory(searchHistory.filter(history => history.id !==id))
   }

   useEffect(()=>{
       localStorage.setItem('history' , JSON.stringify(searchHistory))
   } ,[searchHistory])

   return (
    <HistoryContext.Provider value = {{searchHistory ,addHistory ,removeHistory}}>
    {props.children}
    </HistoryContext.Provider>
)



}

export default HistoryContextProvider