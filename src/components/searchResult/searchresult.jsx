import React , {useContext} from 'react'
import { HistoryContext } from '../../context/historyContext'
import './searchresult.scss'

function SearchResult({displayLink ,title , link , snippet}) {

    const{addHistory , searchHistory } = useContext(HistoryContext)

    const saveHistory = () =>{
       
        addHistory(title ,displayLink)
        console.log(searchHistory)
    }

    return (
        <div className='search-result'>
           <p className='display-link'>{displayLink}</p>
           <a onClick={saveHistory} className='url' href={link}>{title}</a>
           <p className='snippet'>{snippet}</p>
        </div>
    )
}

export default SearchResult
