import { Formik, Field, Form, FormikHelpers } from "formik";
// import * as yup from "yup";
import axios from "axios";
import { setUser } from "../states/user";
import { useDispatch } from 'react-redux'
import signup from "../assets/SignUpScreenNewLogo3.png"
import lock from "../assets/password.png"
import user from "../assets/user.png"
import email from "../assets/email.jpg"
import house from "../assets/house.jpg"
import {  useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast"

interface Values {
    username: string,
    email: string,
    address: string,
    password: string,
  }

export default function SignUp( {setState} : any ){
    const dispatch = useDispatch()
    const navigate= useNavigate()
    const handlePost = async (values : any) => {
        
        // const {username, email, address, password} = values
        if ((Object.values(values)).includes("")){
            toast.error("All fields are required", {
                duration: 3000,
                style: {
                    borderBottom: '3px solid #F02C05'
                }  } ) 
            } else {

        axios.post("/api/signup", {
            username: values.username,
            password: values.password,
            email: values.email,
            address: values.address,
        })
        .then((response) => {
            console.log(response)
            const {id, username, email, address} = response.data.user;
            dispatch(setUser({
                id: id,
                username: username, 
                email: email, 
                address: address, 
            }))
            navigate('/')
        })
        .catch((error: any) => {
            toast.error(`${error.response.data.target} is already taken`, {
                duration: 3000,
                style: {
                    borderBottom: '3px solid #F02C05'
                }
            })
        })}; }

    return (
        <Formik 
            initialValues={{
                username: "",
                email: "",
                address: "",
                password: "",
            }}
            onSubmit={(
                values: Values,
                {setSubmitting}: FormikHelpers<Values>
            ) => {
                handlePost(values);
                setSubmitting(false);
            }}
        >   
            

            <Form className="pt-40  flex flex-col rounded-lg w-[320px] h-[600px] bg-cover shadow-2xl" style={{backgroundImage: `url(${signup})`}}>
                <Toaster />
            <div className=" pl-4">
                <div className="">
                    <button className=" ml-0.5 mr-3 text-gray-500 hover:text-gray-700" onClick={(e) => {e.preventDefault() ; setState(true) }}>login</button>
                    <button className=" border-b-2 border-logos-blue mr-2 text-gray-500 hover:text-gray-700" onClick={(e) => {e.preventDefault()}}>sign up</button>
                </div>
                <div className=" h-[30px]  flex flex-row border-b border-gray-300 w-min  mt-4">
                    <img src={user} className=" h-[20px] mt-1.5"/>
                    <Field className=" h-full  placeholder-gray-500 pl-1 "id="username" name="username" placeholder="username" />
                </div>

                <div className=" h-[30px]  flex flex-row border-b border-gray-300 w-min  mt-4">
                    <img src={email} className=" h-[20px] mt-1.5"/>
                    <Field className=" h-full  placeholder-gray-500 pl-1 " id="email" name="email" placeholder="email" />
                </div>

                <div className=" h-[30px]  flex flex-row border-b border-gray-300 w-min  mt-4">
                    <img src={house} className=" h-[20px] mt-1.5"/>
                    <Field className=" h-full  placeholder-gray-500 pl-1 "
                        id="address"
                        name="address"
                        placeholder="address"
                    />
                </div>

                <div className=" h-[30px]  flex flex-row border-b border-gray-300 w-min mb-8 mt-4">
                    <img src={lock} className=" h-[20px] mt-1.5"/>
                    <Field className=" h-full  placeholder-gray-500 pl-1 " id="password" name="password" placeholder="password" />
                </div>
                <button className=" w-[100px] bg-logos-blue hover:bg-blue-400 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
            </div>
            </Form>
        
        </Formik>
    )
}