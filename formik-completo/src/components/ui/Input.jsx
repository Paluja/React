import {useField} from 'formik';

// eslint-disable-next-line react/prop-types
function Input({label, ...props}) {

    const [field, meta] = useField(props);

  return (
    <>
        <label>{label}</label>
        <input {...props} {...field}
        className={meta.touched && meta.error ? "input-error" : ""}
        />
        {meta.error && meta.touched && <div className='error'>{meta.error}</div>}
    </>
  )
}

export default Input