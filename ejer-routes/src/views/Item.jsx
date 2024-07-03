import React from 'react'
import { useParams } from 'react-router-dom'

function Item() {
    const {id} = useParams();
    return (
    <h3>Item con id {id}</h3>
  )
}

export default Item