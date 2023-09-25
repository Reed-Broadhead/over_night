import { Formik, Field, Form, FormikHelpers } from "formik";
import {useSelector, useDispatch} from 'react-redux'
import {setUser, userSlice} from "../states/user"
import axios from "axios";

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
        <>
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
            <Form>
            <label htmlFor="email">email:</label>
            <Field id="email" name="email" placeholder="Doe" />

            <label htmlFor="password">Password:</label>
            <Field id="password" name="password" placeholder="Doe" />

            <button className="border-2 border-black rounded " type="submit">Submit</button>
            </Form>
        </Formik>
        <button onClick={() => {console.log(userStuff)}}>hi</button>
        </>
    )
}