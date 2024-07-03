import React from 'react'
import { Outlet } from 'react-router-dom'

function Users() {
  return (
    <>
      <h1>Los collons (usuarios)</h1>
      <Outlet/>
    </>
  )
}

export default Users