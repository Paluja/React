import React from 'react'
import {useState} from 'react'
import AddToTaskList from '../components/AddToTaskList'

function TaskList() {
    const [taskList,setTaskList] = useState([
        {id:1,task:"Hacer la compra",completed:false},
        {id:2,task:"Hacer la comida",completed:false},
        {id:3,task:"Hacer la cena",completed:false}
    ]);
    // const [completedTask,setCompletedTask] = useState(false);
    // const setStyle = {
    //     textDecoration: completedTask ? "line-through" : "none"
    // }

    function taskCompleted(task){
        task.completed = !task.completed;
        setTaskList([...taskList])
        console.log("TASK COMPLETED--->",task);
    }

    function deleteTask(task){
        taskList.splice(task,1);
        setTaskList([...taskList]);
    }

    return (
        <div>
            <h2>Listado de Tareas</h2>
            <AddToTaskList setList={setTaskList} taskList={taskList}/>
            {taskList.map((element)=> {
                console.log("ELEMENT DESDE EL MAP --->",element);
                return(
                    <div>
                        <li className="task-element" key={element.id} 
                        onClick={()=>taskCompleted(element)} 
                        style={{textDecoration: element.completed ? "line-through" : "none"}}>
                            {element.task}
                            <button onClick={()=>deleteTask(element)}>Eliminar</button>
                        </li>
                    </div>
                )
        })}
        </div>
    )
}

export default TaskList