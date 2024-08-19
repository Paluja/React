import { Field, Form, Formik } from 'formik';
import {useState} from 'react'

function AddTodo() {
    const [todos, setTodos] = useState([]);
  return (
    <div>
        <h1>Todo List</h1>
        <Formik
        initialValues={{ todo: '' }}
        onSubmit={(values, {resetForm}) => {
            setTodos([...todos, values.todo])
            resetForm()
        }}
        >
            <Form>
                <Field name="todo" placeholder="New todo"/>
                <button type='submit'>Add todo</button>
            </Form>
        </Formik>

        <ul>
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </ul>
    </div>
  )
}

export default AddTodo