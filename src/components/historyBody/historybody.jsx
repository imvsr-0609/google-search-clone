import React,{useContext} from 'react'
import { HistoryContext } from '../../context/historyContext'
import './historybody.scss'
import DeleteIcon from '@material-ui/icons/Delete';
import HistoryIcon from '@material-ui/icons/History';

function HistoryBody({title , url , id}) {
    const{removeHistory}= useContext(HistoryContext)
    const deleteHistory =()=>{
        removeHistory(id)
    }
    
    return (
        <div className='history-body'>

        <div className='history-left'>
        <HistoryIcon className='history-icon'/>
        <div className='url-title'>
        <h4>{title}</h4>
        <p>{url}</p>
        </div>

        
        </div>
         <button className='delete-btn' onClick={deleteHistory}>  
        <DeleteIcon  className='delete-btn-icon'/>
        </button> 


        </div>
    )
}

export default HistoryBody
