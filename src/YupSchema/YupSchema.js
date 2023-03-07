import * as Yup from 'yup';

export const registerSchema = Yup.object({
    username: Yup.string().min(2).required('Name is required field'),
    email: Yup.string().email().required('Email is required field'),
    password: Yup.string().min(6).max(15).required('Password is required field'),
    confirmPassword: Yup.string().min(6).max(15).required().oneOf([Yup.ref('password'), null], "Confirm password should match")
});

export const loginSchema = Yup.object({
    email: Yup.string().min(2).required('Name is required field'),
    password: Yup.string().min(6).max(15).required('Password is required field')
})