import React from 'react'
import { Link } from 'react-router-dom'


const users = [
  {id:1,name:'Jhon', edad: 25},
  {id:2,name:'PAco', edad: 22},
  {id:3,name:'Antonia', edad: 23},
  {id:4,name:'Agapito', edad: 23},
]

function UserIndex() {
  return (
    <>
    <h2>User</h2>
    {users.map((user) => {
      return(
        <div key={user.id}>
          <li>Nombre:
            <Link to={'user/'+user.id}> {user.name} </Link>
            , Edad: {user.edad}</li>
        </div>
      )
    })}
    <p>datos del usuario</p>
    <Link to="new">Crear usuario</Link>
    </>
  )
}

export default UserIndex