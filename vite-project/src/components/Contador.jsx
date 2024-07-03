import React from 'react'
import { useState } from 'react'

function Contador() {
    const [count, setCount] = useState(0);
    
    function increment(){
        setCount(count + 1);
    }
    
    function decrease(){
        setCount(count - 1);
    }

    return (
    <div>
        <h2>Has clickado el boton {count} veces</h2>
        <button onClick={increment}>+1</button>
        <button onClick={decrease}>-1</button>
    </div>
  )
}

export default Contador