import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const BasicFromSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Email is required"),
  age: yup.number().positive().integer().required("Age is required"),
  password: yup.string().min(5).required("Password is required").matches(passwordRules, "Please create a stronger password"),
  confirmPassword: yup.string().required("Required").oneOf([yup.ref("password")], "Password must match")
})