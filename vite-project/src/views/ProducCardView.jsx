import React from 'react'
import ProductCard from '../components/ProductCard'

function ProducCardView() {
    const products =[
        {id : 1, name : "Producto 1", price : 100, description : "Descripcion 1"},
        {id : 2, name : "Producto 2", price : 200, description : "Descripcion 2"},
        {id : 3, name : "Producto 3", price : 300, description : "Descripcion 3"}
    ]
  
    return (
        <div>
            {products.map((item) =>{
                return (
                    <ProductCard key = {item.id} name = {item.name} description = {item.description} />
                )
            })}
        </div>
    )
}

export default ProducCardView