import { Navigate, Routes, Route } from 'react-router-dom';
import './App.css'
import { useAuthContext } from './contexts/AuthContext'
import Login from './views/Login';
import Dashboard from './views/Dashboard';

function App() {
  const {user} = useAuthContext();


  return (
    <Routes>
      <Route path="/login" element={user ? <Navigate to="/dashboard"/> : <Login/>}/>
      <Route path="/dashboard" element={user ? <Dashboard/> : <Navigate to="/login"/>}/>
    </Routes>
  )
}

export default App
