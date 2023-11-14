import { Formik, Field, Form, FormikHelpers } from "formik";
import { useDispatch} from 'react-redux'
import {useState, useEffect, useRef} from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {motion} from "framer-motion"
// images
import bed from "../assets/beds.png"
// import searchBar from "../assets/searchbar.png"
import newPin from "../assets/newPin.png"

import picCase from "../assets/case.png"


import Calendar from 'react-calendar'
import '../App.css';
import { setHotels } from "../states/hotels";

interface Values {
    destination: string,
    dates: string,
    rooms: string,
  }


export default function Search({homePage} : any){
    
    const [isCalender, setIsCalender] = useState<boolean>(false)
    const [date, setDate] = useState<any>(new Date());


    const formateDate = (date: any) => {
      const months : any = {
        Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
        Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12'
      };

      const parts = date.split(' ');
      const day = parts[2];
      const month = months[parts[1]];
      const year = parts[3];

      return (`${year}-${month}-${day}`)
    }

    

    const dispatch = useDispatch()
    

    const navigate = useNavigate()

    let menuRef: any = useRef();

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



      
    const handleSubmit = (destination: string, dates: any, rooms: string) : void => {
      // console.log(destination, rooms)
      // console.log(formateDate(dates.toString()))

      if (Array.isArray(dates)){
        let parsedDates = dates.map((data: any) => formateDate(data.toString()))

        axios.post("api/getHotelsByCity", {cityName:destination, checkIn:parsedDates[0], checkOut:parsedDates[1], rooms:rooms})
        .then((res)=> {dispatch(setHotels( res.data ));})
        .catch((err) => console.log(err));
        navigate("/search")

      }else{

        axios.post("api/getHotelsByCity", {cityName:destination})
        .then((res)=> { console.log(res.data); dispatch(setHotels(res.data));})
        .catch((err) => console.log(err));
        navigate("/search")

      }
    }
    
  
    return(
        <div className="w-full flex justify-center" >
         
            <Formik 
            initialValues={{
                destination: "",
                dates: "",
                rooms: ""
            }}
            onSubmit={(
                values: Values,
               
                {setSubmitting, resetForm}: FormikHelpers<Values>
            ) => {
                // console.log(values)
                handleSubmit(values.destination, date , values.rooms)
                resetForm()
                setSubmitting(false);
            }}
        >
          {/* w-[1250px] */}

          <div className="rounded-lg w-3/4 h-[155px]  bg-transparent bg-center relative flex justify-center items-center ">
          <div className={
            homePage ? " flex w-full h-full bg-black/50 absolute inset-0 rounded-lg -z-10 shadow-2xl" 
            : " flex w-full h-full absolute bg-transparent inset-0 rounded-lg -z-10 "}></div>

            
            <Form className="w-full ">
              <div className="flex items-center h-full w-full ">

                <div className={
                  homePage ?"bg-white rounded h-[95px] mx-auto px-2 py-1 w-[18%] "
                : "bg-white rounded h-[95px] mx-auto px-2 py-1 w-[18%] border-2 border-gray-500 shadow-lg"}>
                  <div className=" mx-auto h-min  flex flex-col  border-b-2  border-black mb-5 ">
                     {/* <img src={pin} className=" h-[40px] w-[48px] mb-1.5 "/> */}
                     <div className="flex flex-row mb-2 pl-2 pt-1 items-center">
                     <h1 className="font-semibold text-md text-gray-800">DESTINATION</h1>
                     {/* <img /> */}
                      <img src={newPin} alt={"pin"} className="h-6 ml-1"/>
                     </div>
                     <Field className=" h-[40px]  pl-1 text-xl bg-white  bg-opacity-0" id="destination" name="destination" placeholder="" />
                  </div>
                 </div>

                <div className={
                  homePage ?"bg-white rounded h-[95px] mx-auto px-2 py-1 w-[18%] "
                : "bg-white rounded h-[95px] mx-auto px-2 py-1 w-[18%] border-2 border-gray-500 shadow-lg"}>
                  <div className=" mx-auto h-min  flex flex-col  border-b-2  border-black mb-5">
                     {/* <img src={pin} className=" h-[40px] w-[48px] mb-1.5 "/> */}
                     <div className="flex flex-row mb-2 pl-2 pt-1">
                     <h1 className="font-semibold text-md text-gray-800">ROOMS </h1>
                      <img src={bed} alt={"bed"} className="h-6 ml-1 p-0.5"/>
                     </div>
                     <Field className=" h-[40px]  pl-1 text-xl bg-white  bg-opacity-0" id="rooms" name="rooms" placeholder="" />
                  </div>
                </div>
                

                <div ref={menuRef} className={
                  homePage ? "bg-white rounded h-[95px] w-[470px] px-2 py-1 w-[40%] mx-auto"
                : "bg-white rounded h-[95px] w-[470px] px-2 py-1 w-[40%] mx-auto border-2 border-gray-500 shadow-lg"}>
                  <div className=" mx-auto h-min  flex flex-col  border-b-2  border-black mb-5">
                     {/* <img src={pin} className=" h-[40px] w-[48px] mb-1.5 "/> */}
                     <div className="flex flex-row mb-2 pl-2 pt-1">
                     <h1 className="font-semibold text-md text-gray-800">Checkin /Checkout</h1>
                      <img src={picCase} alt={"SuitCase"} className="h-6 ml-1 p-1"/>
                     </div>
                     <Field  onClick={() => openCalender()} className=" h-[40px]  pl-1 text-xl bg-white  bg-opacity-0" id="dates" name="dates" placeholder="" />
                  </div>
                    
                     { isCalender ? 
                    <Calendar 
                    // id="dates" 
                    defaultValue={[new Date(2023, 11, 13), new Date(2023, 11, 15)]}
                    
                    className="react-calendar"
                    value={date}
                    onChange={setDate}
                    selectRange={true}
                    goToRangeStartOnSelect={false}
                    /> 
                    : null}
                </div>


                <div className=' w-[12%] mx-auto '>
             
                <motion.button  
                className={ homePage ? " flex flex-row items-center justifu-center w-full h-[95px] bg-gradient-to-r from-logos-yellow to-logos-gyellow rounded shadow-md"
              :  " flex flex-row items-center justifu-center w-full h-[95px] bg-gradient-to-r from-logos-yellow to-logos-gyellow rounded shadow-md border border-gray-400" }
                type="submit"
                whileHover={
                  {scale: 1.03, 
                  }}
                whileTap={{ scale: 0.9 }}
                >
                  <div className="w-fit h-fit flex flex-row items-center justify-center mx-auto ">
                  
                  {homePage ? (
                    <>
                    <h1 className=" w-min  text-2xl text-simibold text-middle text-center ">Book now</h1>
                    <h1 className=" w-fit  text-2xl">→</h1> 
                    </>
                  ) : (
                    <>
                    <h1 className=" w-min  text-2xl text-simibold text-middle text-center ">Update Search</h1>
                    {/* <h1 className=" w-fit  text-2xl">→</h1>  */}
                    </>
                  )}
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

