import { Formik, Field, Form, FormikHelpers, setNestedObjectValues } from "formik";
import {useSelector, useDispatch} from 'react-redux'
import {useState, useEffect, useRef} from "react"
// images
import pin from "../assets/pin.png"
import calandar from "../assets/calandar.png"
import bed from "../assets/bed.png"
import searchBar from "../assets/searchbar.png"
import Underline from "./Underline";

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

interface Values {
    location: string,
    dates: string,
    rooms: string,
  }


export default function Search(){
    const [isCalender, setIsCalender] = useState<boolean>(false)
    const [date, setDate] = useState(new Date());

    let menuRef = useRef();

    const openCalender = () => {
        setIsCalender(true)
    }

    useEffect(() => {
        let handler = (e : any)=>{
          if(!menuRef.current.contains(e.target)){
            setIsCalender(false);
          }      
        };
        document.addEventListener("mousedown", handler);
        
        return() =>{
          document.removeEventListener("mousedown", handler);
        }
      });

    return(
        <div className="h-64  flex justify-center " >
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
    
            <Form className="rounded-xl w-2/3 h-28 shadow-2xl bg-white  bg-cover bg-center" style={{backgroundImage: `url(${searchBar})`}}>
              <div className="flex items-center pl-4  h-full w-full ">
                {/* <div className="">
                    <button className="ml-0.5 border-b-2 border-logos-blue mr-3 text-gray-500 hover:text-gray-700">login</button>
                    <button className="mr-2 text-gray-500 hover:text-gray-700" onClick={(e) => {e.preventDefault(); setState(false)}}>sign up</button>
                </div> */}

                 <div className=" mx-auto h-min  flex items-center rounded border-b-4 border-logos-blue ">
                     <img src={pin} className=" h-[40px] mt-1.5 "/>
                     <Field className=" h-[40px] placeholder-gray-700 pl-1 text-xl shadow bg-white  bg-opacity-0" id="location" name="Location" placeholder="Location" />
                 </div>
                
                 <div ref={menuRef} className=" flex flex-col mx-auto h-min  max-h-[50px] rounded border-b-4 border-logos-blue ">
                    <div  className="flex items-center">
                        <img src={calandar} className="h-[32px] mb-2 mt-1.5 "/>
                        <Field onClick={() => openCalender()} className="h-[40px] placeholder-gray-700 pl-1 text-xl shadow bg-white text-black bg-opacity-0" id="dates" name="Dates" placeholder="Dates" />
                    </div>
                    { isCalender ? 
                    <Calendar 
                    className="w-[550px] h-[550px] pt-3 pb-8 pr-5 pl-5 bg-white text-xl text-black font-extrabold border-b-4 border-logos-blue rounded-3xl {[]}"
                    onChange={setDate}
                    value={date}
                    selectRange={true}
                    /> 
                    : null}

                 </div>

                 <div className=" mx-auto h-min  flex items-center rounded border-b-4 border-logos-blue ">
                    <img src={bed} className="mb-1 h-[28px] mt-1.5"/>
                    <Field className="h-[40px] placeholder-gray-700 pl-1 text-xl shadow-md bg-white  bg-opacity-0" id="rooms" name="Rooms" placeholder="Rooms" />
                 </div>

                <div className='mr-4 '>
                <Underline underlineRight={true} >
                <button className=" border-gray-400 text-gray-700 text-lg rounded" type="submit">Submit</button>
                </Underline>
                </div>

              </div>
            </Form>
            {/* </motion.div>  ) */}
           
        </Formik>
           
            
          
       
        </div>
    )
}