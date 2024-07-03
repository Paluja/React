
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Basket from './views/Basket'
import Products from './views/Products'
import Home from './views/Home'
import About from './views/About'
import Layout from './components/Layout'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/basket' element={<Basket/>}/>
          <Route path='/products' element={<Products/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
