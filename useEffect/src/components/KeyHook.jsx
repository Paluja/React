import React from 'react'
import { useState, useEffect } from 'react'



function KeyHook() {
    const [key, setKey] = useState(null)
    
   
    useEffect(()=>{
        const keyDownHandler = ({key}) =>{
            setKey(key)
        }
        window.addEventListener('keydown',keyDownHandler);
        console.log("Has pulsado una tecla");
        // return (
        //     window.removeEventListener('keydown',keyDownHandler)
        // )
    },[key])
    
    return (
        <div>{key ? `La última tecla presionada fue: ${key}` : "No se ha presionado ninguna tecla"}</div>
    )
}

// function KeyHook() {
//     const [key, setKey] = useState(null)
    
    
//     const keyDownHandler = ({key}) =>{
//         setKey(key)
//     }
//     window.addEventListener('keydown',keyDownHandler);
    
//     return (
//         <div>{key ? `La última tecla presionada fue: ${key}` : "No se ha presionado ninguna tecla"}</div>
//     )
// }


export default KeyHook