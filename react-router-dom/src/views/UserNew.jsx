import React from 'react'
import { useNavigate } from 'react-router-dom'

function UserNew() {
  const navigate = useNavigate();

  function onSubmit(){
    navigate('/users');
  }
  return (
    <>
    <h1>UserNew</h1>
    
    <button onClick={onSubmit}>Enviar datos</button>
    </>
  )
}

export default UserNew