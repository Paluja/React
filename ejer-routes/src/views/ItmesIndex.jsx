import React from 'react'
import { Link } from 'react-router-dom'

const items = [
    {id: 1, name: 'Item 1', description: 'Description 1'},
    {id: 2, name: 'Item 2', description: 'Description 2'},
    {id: 3, name: 'Item 3', description: 'Description 3'},
    {id: 4, name: 'Item 4', description: 'Description 4'}
]


function ItemsIndex() {
  return (
    <>
        <h2>Items</h2>
        {items.map((item)=>{
            return (
                <div key={item.id}>
                    <li>Producto: <Link to={'dashboard/item/'+item.id}> {item.name}</Link></li>
                </div>
            )
        })}
    </>
  )
}

export default ItemsIndex