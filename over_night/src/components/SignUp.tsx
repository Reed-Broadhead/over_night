import { Formik, Field, Form, FormikHelpers } from "formik";
// import * as yup from "yup";
import axios from "axios";
import { setUser } from "../states/user";
import { useSelector, useDispatch } from 'react-redux'

interface Values {
    username: string,
    email: string,
    address: string,
    password: string,
  }

export default function SignUp(){
    const dispatch = useDispatch()
    const handlePost = async (values : any) => {
        console.log(values)
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
        })
        .catch((error) => {
            console.error(error);
        })};

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
                console.log(values);
                handlePost(values);
                setSubmitting(false);
            }}
        >
            <Form>
            <label htmlFor="username">username:</label>
            <Field id="username" name="username" placeholder="John" />

            <label htmlFor="email">email:</label>
            <Field id="email" name="email" placeholder="Doe" />

            <label htmlFor="address">address:</label>
            <Field
                id="address"
                name="address"
                placeholder="john@acme.com"
            />
            <label htmlFor="password">Password:</label>
            <Field id="password" name="password" placeholder="Doe" />
            <button className="border-2 border-black rounded " type="submit">Submit</button>
            </Form>
        </Formik>
    )
}