import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import NavBar from './components/NavBar'
import Layout from './components/Layout'
import NotFound from './views/NotFound'
import Users from './views/Users'
import UserNew from './views/UserNew'
import UserIndex from './views/UserIndex'
import User from './views/User'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index  element={<Home/>}/>
          <Route path='/about' element={<About/>}/>  {/* Estos tres serian literalmente el outlet */}
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/users' element={<Users/>}>
            <Route index element={<UserIndex/>}/>
            <Route path='user/:id' element={<User/>}/>
            <Route path="new" element={<UserNew/>}/>
          </Route>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
