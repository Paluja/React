import React from 'react'
import {useState} from 'react'
function AddToCart({setCart}) {
    const [newElement,setNewElement] = useState("");

    function handleElement(e){
        setNewElement(e.target.value);
    }
    function addElemenToCart(e){
        e.preventDefault();
        setCart((elements)=> [...elements,newElement]);
        setNewElement("");
    }
    
    return (
        <>
            <h3>Añade elementos al for</h3>
            <form onSubmit={addElemenToCart}>
                <input onChange={handleElement} value={newElement} placeholder='Añade elementos al form' />
            </form>
        </>
    )
}

export default AddToCart