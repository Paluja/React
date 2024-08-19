import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './views/Layout'
import Login from './components/Login'
import RequireAuth from './views/RequireAuth'
import Home from './components/Home'
import Films from './components/Films'
import NotFound from './components/NotFound'
import FilmDetails from './components/FilmDetails'


function App() {


  return (
    <>
    
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="login" element={<Login/>}/>
          {/* rutas privadas */}
          <Route element={<RequireAuth/>}>
            <Route path="/" element={<Home/>}/>
              <Route path="/peliculas" element={<Films/>}/> 
              <Route path='/film-details' element={<FilmDetails/>}/>
              
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    
    </>
  )
}

export default App
