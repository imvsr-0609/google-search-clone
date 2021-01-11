import React from 'react'
import './homeheader.scss'
import {Link} from 'react-router-dom'
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core'

function HomeHeader() {
    return (
        <div className='home-header'>

             <Link to='/' >Gmail</Link>   
             <Link to='/'>Images</Link>   
             <Link to='/search/history'>History</Link>
             <AppsIcon />
             <Avatar className='avatar' />

            </div>
    )
}

export default HomeHeader
