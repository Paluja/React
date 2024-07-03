import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {id} = useParams();
    console.log(id);

  return (
    <h1>User id: {id}</h1>
  )
}

export default User