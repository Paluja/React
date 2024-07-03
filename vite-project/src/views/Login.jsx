import {useState} from 'react'
import Admin from '../components/Admin'
import Client from '../components/Client'

function Login() {
  const [view,setView] = useState('client');
  return (
    <div>
      <nav>
        <h3 
        style={{color: view === "Client" ? "red" : ""}}
        onClick={()=> setView("Client")}>Cliente</h3>
        
        <h3 
        style={{color: view === "Admin" ? "red" : ""}}
        onClick={()=> setView("Admin")}>Admin</h3>

      </nav>
      {view === "Client" ? <Client/> : <Admin/>}
    </div>
  )
}

export default Login