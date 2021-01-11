import React,{useState , useContext} from 'react'
import './searchInput.scss'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic';
import {Button} from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import { SearchContext } from '../../context/searchcontext';


function Search({hideButtons = false}) {

    const{addInput} = useContext(SearchContext)

    const [input , setInput] = useState('')
    const history = useHistory()

   const search = e =>{
       e.preventDefault()
       console.log(input)
       addInput(input)
       history.push('/search')
   }


    return (


        <div className='search'>
          <div className='search-input'>
            
            <form onSubmit={search}>
                <SearchIcon className='search-icons' style={{ fontSize: 20}}/>
                <input type='text' value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon className='search-icons mic' style={{ fontSize: 20}}/>
            </form>
           
           </div>

           {
               !hideButtons ?
            (
            <div className='buttons'>
                <Button type='submit' onClick={search}>Google Search</Button>
                <Button>I'm Feeling Lucky</Button>
            </div>
            ) : (

            <div className='buttons hidden'>
                <Button type='submit' onClick={search}>Google Search</Button>
                <Button>I'm Feeling Lucky</Button>
            </div>

            )
        
        
        }

            

        </div>
    )
}

export default Search
