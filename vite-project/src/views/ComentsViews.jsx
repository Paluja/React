import React from 'react'
import Comments from '../components/Comments'

function ComponentsViews() {
    const comments =[
        {id : 1, comment : "Comentario 1"},
        {id : 2, comment : "Comentario 2"},
        {id : 3, comment : "Comentario 3"}
    ]

    return (
    <div>
        {comments.map((item)=>{
            return (
                <Comments key = {item.id} id = {item.id} comment = {item.comment}/>
            )
        })}
    </div>
  )
}

export default ComponentsViews