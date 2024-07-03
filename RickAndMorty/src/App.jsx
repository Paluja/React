import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import CharactersIndex from './components/CharactersIndex'
import Layout from './views/Layout'
import CharacterDetails from './components/CharacterDetails'
import PrincipalPage from './views/PrincipalPage'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index  element={<PrincipalPage/>}/>
          </Route>
          <Route path='/details/:id' element={<CharacterDetails/>}/>
        </Routes>
      </BrowserRouter>
      

    </>
  )
}

export default App
