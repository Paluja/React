import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './PrincipalPage'

function Layout() {
  return (
    <>
        <h1 class="title">Rick <span>and</span> Morty</h1>
        <h1 class="title middle">Rick <span>and</span> Morty</h1>
        <h1 class="title bottom">Rick <span>and</span> Morty</h1>

        <Outlet/>
    </>
  )
}

export default Layout