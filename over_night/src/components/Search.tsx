import { Formik, Field, Form, FormikHelpers, setNestedObjectValues } from "formik";
import {useSelector, useDispatch} from 'react-redux'
import pin from "../assets/pin.png"
import calandar from "../assets/calandar.png"
import bed from "../assets/bed.png"

interface Values {
    location: string,
    dates: string,
    rooms: string,
  }


export default function Search(){
    return(
        <div className="h-48 flex justify-center ">
            <Formik 
            initialValues={{
                location: "",
                dates: "",
                rooms: ""
            }}
            onSubmit={(
                values: Values,
               
                {setSubmitting, resetForm}: FormikHelpers<Values>
            ) => {
                console.log(values);
                resetForm()
                setSubmitting(false);
            }}
        >
    
            <Form className="rounded-2xl w-2/3 h-20 shadow-2xl bg-gray-300 bg-opacity-20">
              <div className="flex items-center pl-4  h-full w-full ">
                {/* <div className="">
                    <button className="ml-0.5 border-b-2 border-logos-blue mr-3 text-gray-500 hover:text-gray-700">login</button>
                    <button className="mr-2 text-gray-500 hover:text-gray-700" onClick={(e) => {e.preventDefault(); setState(false)}}>sign up</button>
                </div> */}

                 <div className=" mx-auto h-min  flex items-center rounded border-b border-logos-blue bg-opacity-30 bg-white">
                     <img src={pin} className=" h-[40px] mt-1.5 "/>
                     <Field className=" h-[40px] placeholder-white pl-1 text-xl bg-white  bg-opacity-0" id="location" name="location" placeholder="location" />
                 </div>
                
                 <div className=" mx-auto h-min  flex items-center rounded border-b border-logos-blue bg-opacity-30 bg-white">
                    <img src={calandar} className="h-[32px] mb-2 mt-1.5"/>
                    <Field className="h-[40px] placeholder-white pl-1 text-xl bg-white  bg-opacity-0" id="dates" name="dates" placeholder="dates" />
                 </div>

                 <div className=" mx-auto h-min  flex items-center rounded border-b border-logos-blue bg-opacity-30 bg-white">
                    <img src={bed} className="mb-1 h-[28px] mt-1.5"/>
                    <Field className="h-[40px] placeholder-white pl-1 text-xl bg-white  bg-opacity-0" id="rooms" name="rooms" placeholder="rooms" />
                 </div>

                <button className=" w-[100px] bg-logos-blue hover:bg-blue-400 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
              </div>
            </Form>
            {/* </motion.div>  ) */}
           
        </Formik>
           
            
          
       
        </div>
    )
}