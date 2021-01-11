import React , {useContext } from 'react'
import SearchHeader from '../../components/searchHeader/searchheader'
import './imagepage.scss'
import { SearchContext } from '../../context/searchcontext'
import useFetch from '../../useGoogleSearch'
import uuid from 'react-uuid'
//import response from '../../response'
import ImageCard from '../../components/ImageCard/imagecard'

function ImagePage() {

    const{searchText} = useContext(SearchContext)
    
    

    const {data} = useFetch(searchText)

    return (
        <div className='image-page'>
            <SearchHeader/>
            <div className='image-body'>

             {
                data?.items.map(item =>{

                    return(
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src &&
                        
                        <ImageCard key={uuid()} image={item.pagemap?.cse_image[0]}/>
                       
                    )
                

            })

            }
            </div>

           

            <div className='image-footer'>
            <h4>The rest of the results might not be what you're looking for.</h4>
            <span>See more anyway</span>
            </div>
        </div>
    )
}

export default ImagePage
