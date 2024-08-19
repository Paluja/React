import { useField } from "formik";

function Checkbox({...props}) {
    const [field, meta] = useField(props);
  return (
    <>
        <div className="checkbox">
            <input   {...field} {...props} className={meta.touched && meta.error ? "input-error" : ""} />
            <span>I accept the terms and conditions</span>
        </div>
        {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  )
}

export default Checkbox