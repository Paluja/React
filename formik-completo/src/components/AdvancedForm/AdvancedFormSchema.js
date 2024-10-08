import * as yup from 'yup';

export const AdvancedFormSchema = yup.object().shape({
    username: yup.string().min(3, "Username must be minimum 3 caracters!"). required("Required"),
    jobType: yup.string().oneOf(["designer", "developer", "manager", "other"], "Invalid Job Type").required("Required"),
    acceptedTC: yup.boolean().oneOf([true], "Please accept the terms and conditions")
})