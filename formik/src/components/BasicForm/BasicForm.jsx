import { useFormik } from "formik";
import { initialValues } from "./utils/form";
import { BasicFromSchema } from "./BasicFormSchema";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  actions.resetForm();
};

function BasicForm() {
  const { values, errors, touched, handleChange, handleSubmit, handleBlur, isSubmitting} = useFormik({
    initialValues: initialValues,
    validationSchema: BasicFromSchema,
    onSubmit,
  });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          onBlur={handleBlur("email")}
          value={values.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className={errors.email && touched.email ? "input-error" : ""}
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}

        <input
          type="number"
          id="age"
          value={values.age}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Enter your age"
          className={errors.age && touched.age ? "input-error" : ""}
        />
        {errors.age && touched.age && <p className="error">{errors.age}</p>}
        <input
          type="password"
          id="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your password"
          className={errors.password && touched.password ? "input-error" : ""}
        />
        {errors.password && touched.password && (
          <p className="error">{errors.password}</p>
        )}
        <input
          type="password"
          id="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Confirm password"
          className={
            errors.confirmPassword && touched.confirmPassword
              ? "input-error"
              : ""
          }
        />

        {errors.confirmPassword && touched.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
        <button disabled={isSubmitting} type="submit">Submit</button>
      </form>
    </>
  );
}

export default BasicForm;
