import { Formik, Field, Form, FormikHelpers, setNestedObjectValues } from "formik";
import {useSelector, useDispatch} from 'react-redux'
import {useState, useEffect, useRef} from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {motion} from "framer-motion"
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
          <div className="rounded-lg w-5/6 h-[155px] shadow-2xl bg-cover bg-center relative flex justify-center items-center ">
          <div className="bg-white w-full h-full opacity-50 absolute inset-0 rounded-lg -z-10"></div>
            
            <Form>
              <div className="flex items-center pl-4  h-full w-full ">
               

              {/* <div className="mx-auto bg-white h-min relative flex items-center rounded ">
                
                  <Field className="h-[100px] pl-2 pt-8 text-xl shadow-lg bg-white underline decoration-gray-400 rounded-lg z-10 border border-red-900" id="destination" name="destination" 
                  placeholder="hi" />
                  <label htmlFor="location" className="pl-2 absolute top-2 left-2 text-gray-800 font-semibold z-20 ">DESINATION ➣</label>
                
              </div> */}
                <div className="bg-white rounded h-[95px] mr-6 px-2 py-1">
                  <div className=" mx-auto h-min  flex flex-col  border-b-2  border-black mb-5">
                     {/* <img src={pin} className=" h-[40px] w-[48px] mb-1.5 "/> */}
                     <div className="flex flex-row mb-2 pl-2 pt-1">
                     <h1 className="font-semibold text-md text-gray-800">DESTINATION ➣</h1>
                      <img />
                     </div>
                     <Field className=" h-[40px]  pl-1 text-xl shadow bg-white  bg-opacity-0" id="destination" name="destination" placeholder="" />
                  </div>
                 </div>

              {/* <div className="mx-auto h-min relative flex items-center rounded">
            <Field className="h-[95px] mr-6 pl-2 pt-8 text-xl shadow-lg bg-white rounded-lg z-10 underline decoration-gray-400 " id="rooms" name="rooms" 
             placeholder="                                                 " />
              <label htmlFor="rooms" className="pl-2  absolute top-2 left-2 text-gray-800 font-semibold z-20 ">ROOMS ☐</label>
              </div> */}

                <div className="bg-white rounded h-[95px] mr-6 px-2 py-1">
                  <div className=" mx-auto h-min  flex flex-col  border-b-2  border-black mb-5">
                     {/* <img src={pin} className=" h-[40px] w-[48px] mb-1.5 "/> */}
                     <div className="flex flex-row mb-2 pl-2 pt-1">
                     <h1 className="font-semibold text-md text-gray-800">ROOMS ☐</h1>
                      <img />
                     </div>
                     <Field className=" h-[40px]  pl-1 text-xl shadow bg-white  bg-opacity-0" id="rooms" name="rooms" placeholder="" />
                  </div>
                </div>
                
                 {/* <div ref={menuRef} className="mx-auto h-min relative flex items-center rounded relative">
                    <div  className="flex items-center">
                        <Field onClick={() => openCalender()} className="h-[100px] w-[470px] mr-8 pl-2 pt-8 text-xl shadow-lg bg-white rounded-lg z-10 underline decoration-gray-400 " id="dates" name="dates" 
                        placeholder="                                                                                                            " />
                        <label htmlFor="dates" className="pl-2 absolute top-2 left-2 text-gray-800 font-semibold z-20">Checkin ☑ /Checkout ☐</label>
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

                 </div> */}

                <div ref={menuRef} className="bg-white rounded h-[95px] w-[470px] mr-6 px-2 py-1 ">
                  <div className=" mx-auto h-min  flex flex-col  border-b-2  border-black mb-5">
                     {/* <img src={pin} className=" h-[40px] w-[48px] mb-1.5 "/> */}
                     <div className="flex flex-row mb-2 pl-2 pt-1">
                     <h1 className="font-semibold text-md text-gray-800">Checkin ☑ /Checkout ☐</h1>
                      <img />
                     </div>
                     <Field  onClick={() => openCalender()} className=" h-[40px]  pl-1 text-xl shadow bg-white  bg-opacity-0" id="dates" name="dates" placeholder="" />
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


                <div className='mr-4 z-50'>


                
               
                {/* <button className='w-[170px] h-[100px]  bg-gradient-to-r from-logos-gyellow to-logos-yellow hover:bg-logos-hyellow rounded-lg cursor-pointer select-none 
                        active:translate-y-2  active:[box-shadow:0_9px_0_0_#4AB7F5,0_0px_0_0_#4AB7F5]
                        active:border-b-[0px]
                        transition-all duration-150 [box-shadow:0_10px_0_0_#F4C01E,0_10px_0_0_#F4C01E]
                        border-b-[2px] border-yellow-100 font-semibold text-2xl text-gray-700 hover:text-black '  type="submit" >Book → <br></br>Now</button> */}
                  
                <motion.button  
                className=" px-10 flex flex-row items-center  w-[170px] h-[95px] bg-logos-yellow rounded shadow-md" 
                type="submit"
                whileHover={
                  {scale: 1.03, 
                  }}
                whileTap={{ scale: 0.9 }}
                >
                  
                  <h1 className=" w-1/2 mr-2 text-2xl text-simibold text-middle text-center ">Book now</h1>
                  <h1 className=" w-1/2 text-2xl">→</h1>
                </motion.button>

               
                </div>
                
                
              </div>
            </Form>
            
            </div>
           
        </Formik>
           
            
          
       
        </div>
    )
}

//<a href="#_" class="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
//<span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
//<span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
//<span class="relative z-20 flex items-center text-sm">
//<svg class="relative w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
//Button Text
//</span>
//</a>