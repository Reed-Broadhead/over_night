import { Formik, Field, Form, FormikHelpers, setNestedObjectValues } from "formik";
import {useSelector, useDispatch} from 'react-redux'
import {setUser, userSlice} from "../states/user"
import axios from "axios";
import background from "../assets/miami.jpeg"
import loginScreen from "../assets/loginscreen.png"
import lock from "../assets/password.png"
import user from "../assets/user.png"
import { motion, AnimatePresence } from "framer-motion";
import {useState} from "react"
import { Navigate, useNavigate } from "react-router-dom";

interface Values {
    email: string,
    password: string,
  }



export default function Login( {setState} : any ){
    const dispatch = useDispatch()
    const userStuff = useSelector((state: any) => state.user.value);
    const navigate= useNavigate()
    
    // setState()
    const handlePost = async (values : any) => {
        // console.log(values)
        axios.post("/api/login", {
            email: values.email,
            password: values.password,
        })
        .then((response) => {
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
            alert("Email or Password incorrect")
            //console.error("user not found");
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
                console.log(values);
                handlePost(values);
                setSubmitting(false);
            }}
        >
            
            {/* (<motion.div
                        initial={{ x: 10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -20, opacity: 0 }}
                        transition={{ duration: 1 }}
            >  */}
            <Form className="pt-40  flex flex-col rounded-lg w-[320px] h-[600px] bg-cover shadow-2xl" style={{backgroundImage: `url(${loginScreen})`}}>
              <div className="pl-4 ">
                <div className="">
                    <button className="ml-0.5 border-b-2 border-logos-blue mr-3 text-gray-500 hover:text-gray-700">login</button>
                    <button className="mr-2 text-gray-500 hover:text-gray-700" onClick={(e) => {e.preventDefault(); setState(false)}}>sign up</button>
                </div>
                 <div  className=" h-[30px]  flex flex-row border-b border-gray-300 w-min  mt-4">
                     <img src={user} className=" h-[20px] mt-1.5"/>
                     <Field className=" h-full  placeholder-gray-500 pl-1 " id="email" name="email" placeholder="Email" />
                 </div>
                
                 <div className=" h-[30px] flex flex-row border-b border-gray-300 w-min mt-4 mb-8">
                    <img src={lock} className="h-[20px] mt-1"/>
                    <Field className=" placeholder-gray-500 pl-1  " id="password" name="password" placeholder="Password" />
                 </div>
                <button className=" w-[100px] bg-logos-blue hover:bg-blue-400 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
              </div>
            </Form>
            {/* </motion.div>  ) */}
           
        </Formik>
    )
}