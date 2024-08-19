
import { useBasketContext } from '../contexts/UseBasketContext';

function Basket() {
    const {basket, delProduct} = useBasketContext();
    return (
    <div className="basket-container">
        <h1>Carrito</h1>
        {basket.map((product) => (
            <div key={product.id} className="product-card">
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button onClick={() => delProduct(product)}>Eliminar</button>
            </div>
        ))}
    </div>
  )
}

export default Basket