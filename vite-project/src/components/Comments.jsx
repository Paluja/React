import React from 'react'

function Comments(props) {
  
    return (
        <div>
            <h3>Comentario {props.id}</h3>
            <p>{props.comment}</p>
        </div>
    )
}

export default Comments