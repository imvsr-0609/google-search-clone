import {Link} from 'react-router-dom'
import React from 'react'
import Search from '../homeBodySearch/searchInput'
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core'
import './searchheader.scss'
import SearchIcon from '@material-ui/icons/Search';
import YouTubeIcon from '@material-ui/icons/YouTube';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import HistoryIcon from '@material-ui/icons/History';

function SearchHeader() {
    return (
        <div className='search-header'>

            <div className='search-header-top'>

                <div className='search-header-top-left'>
                    <Link to='/'>
                      <img className='google-logo' src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt='GOOGLE'/>
                    </Link>
                    <Search  hideButtons/>
                </div>

                <div className='search-header-top-right'>
                    <AppsIcon />
                    <Avatar className='avatar' />
                </div>
                
            
            </div>


            <div className='search-header-bottom'>

             <Link className='all' to='/search'>
             <SearchIcon/>
             All
             </Link>

             <Link to='/search/images' >
             <ImageIcon/>
             Images
             </Link>

             <Link to='/search/history'>
              <HistoryIcon/>
              History
             </Link>

             <Link to='#'>
             <YouTubeIcon/>
             Videos
             </Link>
             <Link to='#' >
             <DescriptionIcon/>
             News
             </Link>
          
             <Link to='#'>
             <LibraryBooksIcon/>
             Books
             </Link>
             <Link to='#' className='more'>
             <MoreVertIcon/>
             More
             </Link>
             <Link to='#'>
             Settings
             </Link>
             <Link to='#'>
             Tools
             </Link>
            
            
            </div>
            
        </div>
    )
}

export default SearchHeader
