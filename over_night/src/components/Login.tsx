import { Formik, Field, Form, FormikHelpers, setNestedObjectValues } from "formik";
import {useSelector, useDispatch} from 'react-redux'
import {setUser, userSlice} from "../states/user"
import axios from "axios";
import background from "../assets/miami.jpeg"
import loginScreen from "../assets/LoginScreenNewLogo3.png"
import { motion, AnimatePresence } from "framer-motion";
import {useState} from "react"
import { Navigate, useNavigate } from "react-router-dom";
import Underline from "./Underline";
import toast, { Toaster } from "react-hot-toast"

import lock from "../assets/password.png"
import user from "../assets/user.png"
import eye from "../assets/eye.jpg"

interface Values {
    email: string,
    password: string,
  }

// login by check data given by user agains data in data base
// use formik for form 
// holds user info with redux

export default function Login( {setState} : any ){
    const dispatch = useDispatch()
    const userStuff = useSelector((state: any) => state.user.value);
    const navigate= useNavigate()

    const [passwordVisable, setPasswordVisable] = useState<boolean>(false)
    
    // setState()
    const handlePost = async (values : any) => {
        console.log(values)
        axios.post("/api/login", {
            email: values.email,
            password: values.password,
        })
        .then((response) => {
            console.log(response);
            if (response.status == 500){
                console.log('not in system')
            }else{

           
            // console.log(response);
            const {id, username, email, address} = response.data.user;
            dispatch(setUser({
                id: id,
                username: username, 
                email: email, 
                address: address, 
            }))
            navigate('/')
        }}) 
        .catch((error) => {
            console.log(error);
            toast.error("Email or Password are incorrect", {
                duration: 3000,

                style: {
                    borderBottom: '3px solid #F02C05'
                }
            }) ;

        })};


    return (
    
        <Formik 
            initialValues={{
                email: "", 
                password: "",
            }}
            onSubmit={(
                values: Values,
                {setSubmitting}: FormikHelpers<Values>
            ) => {
                // console.log(values);
                handlePost(values);
                setSubmitting(false);
            }}
        >
            
            <Form className="pt-40 flex flex-col rounded-lg w-[320px] h-[600px] bg-cover shadow-2xl" style={{backgroundImage: `url(${loginScreen})`}}>
            <Toaster />
              <div className="pl-4 ">
                <div className="">
                    <button className="ml-0.5 border-b-2 border-logos-blue mr-3 text-gray-500 hover:text-gray-700">login</button>
                    <button className="mr-2 text-gray-500 hover:text-gray-700" onClick={(e) => {e.preventDefault(); setState(false)}}>sign up</button>
                </div>
                 <div  className=" h-[30px]  flex flex-row border-b border-gray-300 w-min  mt-4">
                     <img src={user} className=" h-[20px] mt-1.5"/>
                     <Field className=" h-full  placeholder-gray-500 pl-1 " id="email" name="email" placeholder="Email" />
                 </div>
                
                 <div className=" h-[30px] flex flex-row border-b border-gray-300 w-min mt-4 mb-2 ">
                    <img src={lock} className="h-[20px] mt-1"/>
                    {/* <button className="h-[20px] w-[20px] mt-1 " onClick={(e) => {e.preventDefault(); setPasswordVisable(!passwordVisable)}} > <img src={eye} className="w-full h-full"/> </button> */}
                    <Field className=" placeholder-gray-500 pl-1 " type={passwordVisable ? 'text' : 'password'} id="password" name="password" placeholder="Password" />
                    {/* <button className="h-[20px] mt-1" onClick={(e) => {e.preventDefault(); setPasswordVisable(!passwordVisable)}} > <img src={eye} className=""/> </button> */}
                    {/* <img src={eye} onClick={(e) => {e.preventDefault(); setPasswordVisable(!passwordVisable)}} className="h-[20px] mt-1" /> */}
                 </div>

                <div className="flex flex-col ">
                <Underline>
                    <button className=" text-gray-400 text-left text-sm hover:text-gray-700" onClick={(e) => {e.preventDefault(); setPasswordVisable(!passwordVisable)}} >Show Password </button>
                </Underline>
                <button className=" mt-6 w-[100px]  bg-logos-blue hover:bg-blue-400 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
                </div>
              </div>
            </Form>
            {/* </motion.div>  ) */}
           
        </Formik>
    )
}