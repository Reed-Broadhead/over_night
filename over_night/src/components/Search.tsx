import { Formik, Field, Form, FormikHelpers, setNestedObjectValues } from "formik";
import {useSelector, useDispatch} from 'react-redux'
import {useState, useEffect, useRef} from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
// images
import pin from "../assets/pin.png"
import calandar from "../assets/calandar.png"
import bed from "../assets/bed.png"
// import searchBar from "../assets/searchbar.png"
import Underline from "./Underline";

import Calendar from 'react-calendar'
import '../App.css';

interface Values {
    location: string,
    dates: string,
    rooms: string,
  }


export default function Search(){
    const [isCalender, setIsCalender] = useState<boolean>(false)
    const [date, setDate] = useState<any>(new Date());

    const navigate = useNavigate()

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
      
    const handleSubmit = (location: string, dates: [], rooms: string) : void => {
      console.log(location, dates, rooms)

      // axios.get("/api/hotelSearch")
      // .then((res) => console.log(res))
      // .catch((err) => console.log(err))

      navigate("/search")

    }

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
                handleSubmit(values.location, date , values.rooms)
                resetForm()
                setSubmitting(false);
            }}
        >
          <div className="rounded-lg w-2/3 h-36 shadow-2xl bg-cover bg-center relative">
          <div className="bg-white w-full h-full opacity-40 absolute inset-0 rounded-lg z-0"></div>
            
            <Form  >
              <div className="flex items-center pl-4  h-full w-full ">
               

              <div className="mx-auto h-min relative flex items-center rounded">
            <Field className="h-[100px] pl-1 text-xl shadow bg-white underline  rounded-lg z-10" id="destination" name="destination" 
            placeholder="                                                 "  />
              <label htmlFor="location" className="absolute top-2 left-2 text-gray-800 z-20">DESINATION ⟟ ➣</label>
              </div>

              <div className="mx-auto h-min relative flex items-center rounded">
            <Field className="h-[100px] pl-1 text-xl shadow-md bg-white rounded-lg z-10 underline" id="rooms" name="rooms" 
             placeholder="                                                 " />
              <label htmlFor="rooms" className="absolute top-2 left-2 text-gray-800 z-20">ROOMS</label>
              </div>
                
                 <div ref={menuRef} className="mx-auto h-min relative flex items-center rounded relative">
                    <div  className="flex items-center">
                        <Field onClick={() => openCalender()} className="h-[100px] w-[470px] pl-1 text-xl shadow-md bg-white rounded-lg z-10 underline " id="dates" name="dates" 
                        placeholder="                                                                                                            " />
                        <label htmlFor="dates" className="absolute top-2 left-2 text-gray-800 z-20">Checkin/Checkout</label>
                    </div>
                    { isCalender ? 
                    <Calendar 
                    id="dates" 
                    className="react-calendar "
                    value={date}
                    onChange={setDate}
                    selectRange={true}
                    /> 
                    : null}

                 </div>

                <div className='mr-4 '>
               
                <button className="bg-logos-gyellow h-[100px] w-36 hover:bg-logos-yellow text-gray-800 text-2xl pl-[15px] rounded-lg z-20" type="submit" style={{ textAlign: "left" }}>Book →<br></br> Now</button>

               
                </div>
                
              </div>
            </Form>
            
            </div>
           
        </Formik>
           
            
          
       
        </div>
    )
}