import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

import { useFormik } from "formik";
import { initialValues } from "./utils/utils";
import { BasicFormSchema } from "./utils/BasicFormSchema";

function Login() {
    const { login, errorMessage } = useAuthContext();
    const navigate = useNavigate();
    
    function onSubmit(values, actions) {
      console.log(values);
      console.log(actions);
      actions.resetForm();
      login(user);
      navigate("/");
    }
    
    const {values, errors, touched, handleChange, handleSubmit, handleBlur, isSubmitting} = useFormik({
      initialValues:initialValues,
      validationSchema: BasicFormSchema,
      onSubmit,
    });
    
    const user = {
      email: values.email,
      password: values.password,
    }
    
    return (
        <>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              name="email"
              onBlur={handleBlur("email")}
              onChange={handleChange}
              value={values.email}
              autoComplete="off"
              placeholder="Email"
              className={errors.email && touched.email ? "input-error" : ""}
            />
    
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur("password")}
              autoComplete="off"
              value={values.password}
              placeholder="Password"
              className={errors.password && touched.password ? "input-error" : ""}
            />
    
            <p style={{color: "red"}}>{errorMessage}</p>
            <button disabled={isSubmitting} type="submit">Login</button>
          </form>
        </>
      );
}
export default Login;