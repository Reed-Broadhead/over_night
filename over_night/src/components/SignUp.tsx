import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

export default function SignUp(){
    const formik = useFormik({
        initialValues: { 
            username: null ,
            password: null,
            email: null,
            address:null,
            
        },
        validationSchema: yup.object({
            username: yup.string().required('Must enter a name'),
            password: yup.string().required('Must enter a password'),
            email: yup.string().required('Must enter a email'),
            address: yup.string().required('Must enter an address'),
        }),

        onSubmit: async (values, helpers) => {
            handlePost(values)
            helpers.resetForm()
        }
    })
    const handlePost = async (values : any) => {
    console.log(values)
    axios.post("/api/signup", {
        username: values.username,
        password: values.password,
        email: values.email,
        address: values.address,
    })
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    })};

    return(
<>
<div className="flex justify-center bg-white h-max rounded-md ">
        <h1 className=" text-center">Sign Up</h1>
        <form onSubmit={formik.handleSubmit} className="flex justify-center items-center h-screen" >
        <label> Username </label>
        <input id='username' name=' username ' value={formik.values.username} onChange={formik.handleChange} className="rounded-lg border-2 border-black"/>
        <label>email </label>
        <input id="email" name=" email " value={formik.values.email} onChange={formik.handleChange} className="rounded-lg border-2 border-black" />
        <label>Address </label>
        <input id="address" name=" address " value={formik.values.address} onChange={formik.handleChange} className="rounded-lg border-2 border-black"/>
        <label>Password </label>
        <input id="password" name=" password " value={formik.values.password} onChange={formik.handleChange} className="rounded-lg border-2 border-black"/>
        <button type="submit" className=" bg-white w-20 rounded-lg border-solid border-2 border-black">Save</button>
        </form>
        </div>
</>
)}