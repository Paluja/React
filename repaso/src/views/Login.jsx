import {Formik, Field, Form} from 'formik';
import { useAuthContext } from '../contexts/AuthContext'

function Login() {
    const {login} = useAuthContext();
  return (
    <div>
        <h1>Login</h1>
        <Formik
        initialValues={{ email: ''}}
        onSubmit={(values) => login(values.email)}
        >
            <Form>
                <Field name="email" placeholder="Email"/>
                <button type="submit">Login</button>
            </Form>
        </Formik>
    </div>
  )
}

export default Login