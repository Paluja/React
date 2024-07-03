import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CountProvider, useCountContext} from './context/CountContext'
import Btn from './components/Btn'
import Counter from './components/Counter'
import Layout from './view/Layout'
import {ThemeProvider} from './context/ThemeContext'
import {LangProvider} from './context/LangContext'

function App() {


  return (
    <>
      <LangProvider>
        <ThemeProvider>
          <CountProvider>
            <Layout/>
          </CountProvider>
        </ThemeProvider>
      </LangProvider>
    </>
  )
}

export default App
