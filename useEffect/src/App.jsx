import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TimeNow from './components/TimeNow'
import KeyHook from './components/KeyHook'

function App() {
  return(
    <>
      <TimeNow/>
      <KeyHook/>
    </>
  )
}

export default App
