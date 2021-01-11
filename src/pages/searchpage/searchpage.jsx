import React ,{useContext } from 'react'
import SearchFooter from '../../components/searchFooter/searchfooter'
import SearchHeader from '../../components/searchHeader/searchheader'
import SearchResult from '../../components/searchResult/searchresult'
import { SearchContext } from '../../context/searchcontext'
import useFetch from '../../useGoogleSearch'
//import response from '../../response'
import uuid from 'react-uuid'
import './searchpage.scss'



function SearchPage() {
    const{searchText} = useContext(SearchContext)
    console.log(searchText)
   

    const {data} = useFetch(searchText)

   
    
    
    return (
        <div className='search-page'>

          <SearchHeader/>


        <div className='search-body'>
            <p className='result-time'>
            {`About ${data?.searchInformation.formattedTotalResults} results (${data?.searchInformation.formattedSearchTime} seconds)`}
            </p>

            { data?.items.map(item =>{
                return(
                    <SearchResult key={uuid()} displayLink={item.displayLink} title={item.title} link={item.link} snippet={item.snippet} />  
                )
            })}
           
        </div>
        
       <SearchFooter/>
        
        
        
        </div>
      
     
    )
}

export default SearchPage
