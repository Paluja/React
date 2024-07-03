import React from 'react'
import {useState} from 'react'
function AddToTaskList({setList,taskList}) {
    const [newElement,setNewElement] = useState("");
    
    function handleElement(e){
        setNewElement(e.target.value);
    }
    function addElemenToList(e){
        e.preventDefault();

        const newTask = {
            id: Date.now(),
            task: newElement,
            completed:false
        }
        setList([...taskList,newTask]);
        setNewElement("");
    }
    
    return (
        <>
            <h3>Añade tareas a la lista</h3>
            <form onSubmit={addElemenToList}>
                <input onChange={handleElement} value={newElement} placeholder='Añade elementos al form' />
            </form>
        </>
    )
}

export default AddToTaskList