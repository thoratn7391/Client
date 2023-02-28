import * as Yup from "yup";


export const RegisterSchema = Yup.object({
  name: Yup.string().min(4).max(30).required("Please Enter Your Name"),
  email: Yup.string().email().required("Please Enter Your Email"),
  address:Yup.string().required("Please Enter Your Address"),
  password: Yup.string().min(5).max(10).required("Please Enter Your Password"),
  confirmpass: Yup.string().required().oneOf([Yup.ref("password"), null], "password must match"),
  phone: Yup.string().max(10).required("Please Enter Your Mobile No"),
  symptoms: Yup.string().required("Please Enter Your Symptoms"),
  gender: Yup.string().required("Gender is required"),
  dob: Yup.string().required("DOB is required")
})