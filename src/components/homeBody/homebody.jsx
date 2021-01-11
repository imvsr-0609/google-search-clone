import React from 'react'
import Search from '../homeBodySearch/searchInput'
import './homebody.scss'

function HomeBody() {
    return (
        <div className='home-body'>

             <div className='logo-container'>
             
             <img className='google-logo' src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt='GOOGLE'/>
             
             </div>

             <Search />
         

        </div>
    )
}

export default HomeBody
