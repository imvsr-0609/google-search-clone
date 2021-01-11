import React from 'react'
import HomeBody from '../../components/homeBody/homebody'
import HomeHeader from '../../components/homeHeader/homeheader'
import './homepage.scss'



function HomePage() {
    return (
        <div className='homepage'>
            <HomeHeader/>
            <HomeBody/>
        </div>
    )
}

export default HomePage
