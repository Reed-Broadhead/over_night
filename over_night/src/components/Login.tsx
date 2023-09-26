import { Formik, Field, Form, FormikHelpers } from "formik";
import {useSelector, useDispatch} from 'react-redux'
import {setUser, userSlice} from "../states/user"
import axios from "axios";
import background from "../assets/miami.jpeg"
import loginScreen from "../assets/loginscreen.png"
import lock from "../assets/password.png"
import user from "../assets/user.png"

interface Values {
    email: string,
    password: string,
  }



export default function Login(){
    const dispatch = useDispatch()
    const userStuff = useSelector((state: any) => state.user.value);

    const handlePost = async (values : any) => {
        console.log(values)
        axios.post("/api/login", {
            email: values.email,
            password: values.password,
        })
        .then((response) => {
            console.log(response);
            const {id, username, email, address} = response.data.user;
            dispatch(setUser({
                id: id,
                username: username, 
                email: email, 
                address: address, 
            }))
        })
        .catch((error) => {
            console.error(error);
        })};

    return (
        <div className="w-full h-screen bg-cover bg-black" style={{backgroundImage: `url(${background})`}}>
            <div className="flex justify-center items-center  bg-black bg-opacity-30 w-full h-full">
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
            
            <Form className="pt-44  flex flex-col rounded-lg w-[320px] h-[600px] bg-cover shadow-2xl" style={{backgroundImage: `url(${loginScreen})`}}>
              <div className="pl-4">
                 <div  className=" h-[20px] flex flex-row border-b border-gray-300 w-min mb-5">
                     <img src={user} className="h-[20px] py-1"/>
                     <Field className="placeholder-gray-500 pl-1" id="email" name="email" placeholder="Email" />
                 </div>
                
                 <div className=" h-[20px] flex flex-row border-b border-gray-300 w-min mb-5">
                    <img src={lock} className="h-[20px] py-1"/>
                    <Field className=" placeholder-gray-500 pl-1  " id="password" name="password" placeholder="Password" />
                 </div>
                <button className=" w-[100px] bg-logos-blue hover:bg-blue-400 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
              </div>
            </Form>
        </Formik>

        </div>
        </div>
    )
}