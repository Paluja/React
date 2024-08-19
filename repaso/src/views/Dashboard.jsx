import { useAuthContext } from "../contexts/AuthContext"
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";


function Dashboard() {
    const {logout} = useAuthContext();

  return (
    <div>
        <h1>Dashboard</h1>
        <button onClick={logout}>Logout</button>
        <AddTodo/>
        <TodoList/>
    </div>
  )
}

export default Dashboard