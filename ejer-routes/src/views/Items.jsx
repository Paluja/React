import React from 'react'
import { Outlet } from 'react-router-dom'

function Items() {
  return (
    <>
        <h1>Items</h1>
        <Outlet/>
    </>
  )
}

export default Items