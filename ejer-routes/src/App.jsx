import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Inicio from './views/Inicio'
import Layout from './components/Layout'
import Blog from './views/Blog'
import Contacto from './views/Contacto'
import DashboardIndex from './views/DashboardIndex'
import Overview from './views/Overview'
import Stats from './views/Stats'
import Notifications from './views/Notifications'
import Settings from './views/Settings'
import Dashboard from './views/Dashboard'
import Items from './views/Items'
import ItemsIndex from './views/ItmesIndex'
import Item from './views/Item'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Inicio/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/dashboard' element={<Dashboard/>}>
            
            <Route index element={<DashboardIndex/>}/>
            <Route path='/dashboard/overview' element={<Overview/>}/>
            <Route path='/dashboard/stats' element={<Stats/>}/>
            <Route path='/dashboard/notifications' element={<Notifications/>}/>
            <Route path='/dashboard/settings' element={<Settings/>}/>
            <Route path='/dashboard/item' element={<Items/>}>
              <Route index element={<ItemsIndex/>}/>
              <Route path='dashboard/item/:id' element={<Item/>}/>
            </Route>

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
