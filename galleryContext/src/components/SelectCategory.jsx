import React from 'react'
import { useContext } from 'react'
import { GalleryContext } from '../context/GalleryContext'

function SelectCategory() {
    const { category,setCategory } = useContext(GalleryContext);
    console.log(category);
    return (
        <>
            <button onClick={()=>setCategory("nature")}>Nature</button>
            <button  onClick={()=>setCategory("city")}>City</button>
            <button  onClick={()=>setCategory("food")}>Food</button>
        </>
    )
}

export default SelectCategory