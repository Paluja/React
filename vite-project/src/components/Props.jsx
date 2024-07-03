import React from 'react'

function Props(props) {
  return (
    <div>
        <h3>Componente mio</h3>
        <h2>Escrito por {props.name}</h2>
        <p>{props.description}</p>
    </div>
  )
}

export default Props