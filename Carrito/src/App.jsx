import { Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import Basket from './components/Basket'
import './App.css'
import Layout from './views/Layout'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/basket" element={<Basket/>}/>
        </Route>
      </Routes>
      
    
    </>
  )
}

export default App
