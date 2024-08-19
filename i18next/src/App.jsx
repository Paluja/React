import Layout from './view/Layout'
import { Routes, Route } from 'react-router-dom'
import HomeWrapper from './components/HomeWrapper'
import ProfileWrapper from './components/ProfileWrapper'
import AboutWrapper from './components/AboutWrapper'

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<HomeWrapper/>} />
            <Route path="/profile" element={<ProfileWrapper/>} />
            <Route path="/about" element={<AboutWrapper/>}/>
          </Route>
        </Routes>
    </>
  )
}

export default App
