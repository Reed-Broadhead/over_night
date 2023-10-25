import { Formik, Field, Form, FormikHelpers, setNestedObjectValues } from "formik";
import {useSelector, useDispatch} from 'react-redux'
import {useState, useEffect, useRef} from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {motion} from "framer-motion"
// images
import pin from "../assets/pin.png"
import calandar from "../assets/calandar.png"
import bed from "../assets/beds.png"
// import searchBar from "../assets/searchbar.png"
import Underline from "./Underline";
import newPin from "../assets/newPin.png"

import picCase from "../assets/case.png"


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
        <div className="w-full flex justify-center" >
          
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
          {/* w-[1250px] */}

          <div className="rounded-lg w-3/4 h-[155px] shadow-2xl bg-cover bg-center relative flex justify-center items-center ">
          <div className=" flex w-full h-full bg-black/50 absolute inset-0 rounded-lg -z-10"></div>

            
            <Form className="w-full">
              <div className="flex items-center h-full w-full ">
               

              {/* <div className="mx-auto bg-white h-min relative flex items-center rounded ">
                
                  <Field className="h-[100px] pl-2 pt-8 text-xl shadow-lg bg-white underline decoration-gray-400 rounded-lg z-10 border border-red-900" id="destination" name="destination" 
                  placeholder="hi" />
                  <label htmlFor="location" className="pl-2 absolute top-2 left-2 text-gray-800 font-semibold z-20 ">DESINATION ➣</label>
                
              </div> */}
                <div className="bg-white rounded h-[95px] mx-auto px-2 py-1 w-[18%]">
                  <div className=" mx-auto h-min  flex flex-col  border-b-2  border-black mb-5">
                     {/* <img src={pin} className=" h-[40px] w-[48px] mb-1.5 "/> */}
                     <div className="flex flex-row mb-2 pl-2 pt-1 items-center">
                     <h1 className="font-semibold text-md text-gray-800">DESTINATION</h1>
                     {/* <img /> */}
                      <img src={newPin} className="h-6 ml-1"/>
                     </div>
                     <Field className=" h-[40px]  pl-1 text-xl bg-white  bg-opacity-0" id="destination" name="destination" placeholder="" />
                  </div>
                 </div>

              {/* <div className="mx-auto h-min relative flex items-center rounded">
            <Field className="h-[95px] mr-6 pl-2 pt-8 text-xl shadow-lg bg-white rounded-lg z-10 underline decoration-gray-400 " id="rooms" name="rooms" 
             placeholder="                                                 " />
              <label htmlFor="rooms" className="pl-2  absolute top-2 left-2 text-gray-800 font-semibold z-20 ">ROOMS ☐</label>
              </div> */}

                <div className="bg-white rounded h-[95px] mx-auto px-2 py-1 w-[18%]">
                  <div className=" mx-auto h-min  flex flex-col  border-b-2  border-black mb-5">
                     {/* <img src={pin} className=" h-[40px] w-[48px] mb-1.5 "/> */}
                     <div className="flex flex-row mb-2 pl-2 pt-1">
                     <h1 className="font-semibold text-md text-gray-800">ROOMS </h1>
                      <img src={bed} className="h-6 ml-1 p-1"/>
                     </div>
                     <Field className=" h-[40px]  pl-1 text-xl shadow bg-white  bg-opacity-0" id="rooms" name="rooms" placeholder="" />
                  </div>
                </div>
                

                <div ref={menuRef} className="bg-white rounded h-[95px] w-[470px] px-2 py-1 w-[40%] mx-auto">
                  <div className=" mx-auto h-min  flex flex-col  border-b-2  border-black mb-5">
                     {/* <img src={pin} className=" h-[40px] w-[48px] mb-1.5 "/> */}
                     <div className="flex flex-row mb-2 pl-2 pt-1">
                     <h1 className="font-semibold text-md text-gray-800">Checkin /Checkout</h1>
                      <img src={picCase} className="h-6 ml-1 p-1"/>
                     </div>
                     <Field  onClick={() => openCalender()} className=" h-[40px]  pl-1 text-xl bg-white  bg-opacity-0" id="dates" name="dates" placeholder="" />
                  </div>
                    
                     { isCalender ? 
                    <Calendar 
                    id="dates" 
                    className="react-calendar"
                    value={date}
                    onChange={setDate}
                    selectRange={true}
                    /> 
                    : null}
                </div>


                <div className='z-50 w-[12%] mx-auto '>
             
                <motion.button  

                // className=" px-10 flex flex-row items-center  w-[170px] h-[95px] bg-logos-yellow rounded shadow-md" 

                className=" flex flex-row items-center justifu-center w-full h-[95px] bg-gradient-to-r from-logos-yellow to-logos-gyellow rounded shadow-md" 

                  
                  
                // className=" px-10 flex flex-row items-center  w-[170px] h-[95px] bg-gradient-to-r from-logos-yellow to-logos-gyellow rounded shadow-md" 

                type="submit"
                whileHover={
                  {scale: 1.03, 
                  }}
                whileTap={{ scale: 0.9 }}
                >
                  <div className="w-fit h-fit flex flex-row items-center justify-center mx-auto ">
                    <h1 className=" w-min  text-2xl text-simibold text-middle text-center ">Book now</h1>
                    <h1 className=" w-fit  text-2xl">→</h1>
                  </div>
                </motion.button>

               
                </div>
                
                
              </div>
            </Form>
            
            </div>
           
        </Formik>
           
            
          
       
        </div>
    )
}

