import {useState ,useEffect} from 'react'
import API_KEY from './apiKey'

const CONTEXT_KEY = "c62fb0019445539c5"

const useFetch = (term)=> {

const [ data , setData ] = useState(null)

    
const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`

const fetchData = async()=>{
    fetch(url)
     .then(response => response.json())
     .then(result => {
       setData(result)
     })
   }

useEffect (()=>{
  fetchData()
}, [term])

  
  return {data}
}

export default useFetch
