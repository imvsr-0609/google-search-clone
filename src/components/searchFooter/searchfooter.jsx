import React from 'react'
import {Link} from 'react-router-dom'
import './searchfooter.scss'

function SearchFooter() {
    return (
        <div className='footer'>

            <div className='google'>
                <span className='blue'>G</span>
                <span className='red'>o</span>
                <span className='yellow'>o</span>
                <span className='yellow'>o</span>
                <span className='yellow'>o</span>
                <span className='yellow'>o</span>
                <span className='yellow'>o</span>
                <span className='yellow'>o</span>
                <span className='yellow'>o</span>
                <span className='yellow'>o</span>
                <span className='yellow'>o</span>
                <span className='blue'>g</span>
                <span className='green'>l</span>
                <span className='red'>e</span>
                
            </div>
            
            <div className='numbers'>
                    <Link to='#'>1</Link>
                    <Link to='#'>2</Link>
                    <Link to='#'>3</Link>
                    <Link to='#'>4</Link>
                    <Link to='#'>5</Link>
                    <Link to='#'>6</Link>
                    <Link to='#'>7</Link>
                    <Link to='#'>8</Link>
                    <Link to='#'>9</Link>
                    <Link to='#'>Next</Link>
                    <Link to='#'>10</Link>
                    
            </div>
        </div>
    )
}

export default SearchFooter
