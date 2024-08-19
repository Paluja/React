import * as yup from 'yup'
const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
export const BasicFormSchema = yup.object().shape({
    email:yup.string().email("Please enter a valid email").required("Email is required"),
    age:yup.number().positive().integer().required("Age is required"),
    password:yup.string().min(5).required("Password is required").matches(passwordRules, "Password must contain a number"),
    confirmPassword:yup.string().required().oneOf([yup.ref("password")], "Passwords must match")
})
