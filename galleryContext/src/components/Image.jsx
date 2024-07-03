import React from 'react'
import { useContext } from 'react'
import { GalleryContext } from '../context/GalleryContext'

function Image() {
    const { image } = useContext(GalleryContext);
    console.log(image);
    return (
    <div className='img-container'>
        <img src={image} alt={ image } className='img' />
    </div>
  )
}

export default Image