import React from 'react'
import { useFormik } from 'formik'
import { initialValues } from './utils/form'
import { BasicFormSchema } from './BasicFormSchema'

const onSubmit = async() => {
    console.log("Form Submitted")
}

function BasicForms() {
    const {values, error, touched, handleChange,handleSubmit} = useFormik({
        initialValues:initialValues,
        validationSchema:BasicFormSchema,
        onSubmit
    })
    return (
        <form onSubmit={handleSubmit} onChange={}>
            <input 
            type="email" 
            id="email"
            value={values.email}
            placeholder='Enter your email'/>
            className={errors.email && touched.email ? "error" : null}
            
            <input 
            type="number" 
            id="fdato"
            value={values.email}
            placeholder='Enter your email'/>
            className={errors.email && touched.email ? "error" : null}
            
            <input 
            type="password" 
            id="passwrord"
            value={values.email}
            placeholder='Enter your email'/>
            className={errors.email && touched.email ? "error" : null}
        </form>
    )
}

export default BasicForms