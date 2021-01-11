import React , {useContext} from 'react'
import HistoryBody from '../../components/historyBody/historybody'
import { HistoryContext } from '../../context/historyContext'
import './historypage.scss'

const HistoryPage = () => {
    const{searchHistory} = useContext(HistoryContext)
    console.log(searchHistory)
    return (
        <div className='history-page'>
        <h1>History</h1>

        {
            searchHistory?.map(history => {

            return(
                <HistoryBody key={history.id} title={history.title} url={history.url} id={history.id} />

            )
           
        })}

        
        
        
        
        </div>
    )
}

export default HistoryPage
