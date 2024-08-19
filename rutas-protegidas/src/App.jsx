
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Login from './views/Login'
import Home from './views/Home'
import About from './views/About'
import Profile from './views/Profile'
import NotFound from './views/NotFound'
import RequireAuth from './components/RequireAuth'

function App() {


  return (
      <>
      <Routes>
        {/*Rutas Publicas*/}
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />

          {/*Rutas Privadas */}
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          {/*Rutas que no existen */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
