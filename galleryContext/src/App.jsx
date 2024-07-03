import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GalleryProvider } from './context/GalleryContext'
import Image from './components/Image'
import SelectCategory from './components/SelectCategory'


function App() {

  return (
    <>
      <GalleryProvider>
        <Image/>
        <SelectCategory/>
      </GalleryProvider>
    </>
  )
}

export default App
