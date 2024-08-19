import {useState, useEffect} from 'react'

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() =>{
        setTodos(['Learn react', "Learn UseContext", "Learn useEffect"])
    }, []);


  return (
    <div>
        <h1>Todo List</h1>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList