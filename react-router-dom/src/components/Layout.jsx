import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

function Layout() {
  return (
    <>
        <NavBar/>
        <Outlet/> {/* Elemento dinamico que va cambiando segun la ruta */}
        
    </>
  )
}

export default Layout