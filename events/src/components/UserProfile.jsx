import React from 'react'

function UserProfile({name,location,age}) {
  return (
    <div>
        <h3>Perfil de usuario</h3>
        <h2>Nombre: {name}</h2>
        <p>{age}</p>
        <p>{location}</p>
    </div>
  )
}

export default UserProfile