import * as Yup from "yup";

export const loginSchema = Yup.object({
  username: Yup.string().min(2).max(25).required("Username is required"),
  password: Yup.string().min(6).required("password is required "),
});

export const signUpSchema = Yup.object({
  first_name: Yup.string().min(2).max(25).required("first_name is required "),
  last_name: Yup.string().min(2).max(25).required("last_name is required "),
  email: Yup.string().email().required("email is required "),
  username: Yup.string().min(2).max(25).required("Username is required "),
  password: Yup.string().min(6).required("password is a required field"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"),], "Password must match"),
});
