import React from 'react'
import './imagecard.scss'

function ImageCard({image}) {
    return (
        <div className='image'>

        <img src={image.src} alt=''/>
            
        </div>
    )
}

export default ImageCard
