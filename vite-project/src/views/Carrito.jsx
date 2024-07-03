import {useState} from 'react'
import AddToCart from '../components/AddToCart';


function Carrito() {
    const [cart,setCart] = useState(["Pan","Leche","Pasta"]);
    
    return (
        <div>
            <h2>Comunicacion de hijo a padre</h2>
            <AddToCart setCart={setCart}/>
            {cart.map((element)=> (
                <li key={element}>{element}</li>
            ))}
        </div>
    )
}

export default Carrito