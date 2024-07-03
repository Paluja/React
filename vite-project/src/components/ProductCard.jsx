import React from 'react'

function ProductCard(props) {
  return (
    <div>
        <h3>{props.name}</h3>
        <p>{props.price}</p>
        <p>{props.description}</p>
    </div>
  )
}

export default ProductCard