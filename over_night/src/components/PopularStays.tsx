import {useState, useEffect} from 'react'
import axios, { AxiosHeaders } from 'axios'
import { motion } from "framer-motion"
import miami from '../assets/miami.jpeg'
import leftButton from "../assets/iconLeftButton.png"
import rightButton from "../assets/iconNextRight.png"
import { useDispatch} from 'react-redux'
import { setHotels } from "../states/hotels";
import { useNavigate } from 'react-router-dom'


export default function PopularStays(){

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [citys, setCitys] = useState<any>([])
    const [cityCount, setCityCount] = useState<number>(0)


//  function to handle rerouting users to search page after click
    const handleCityClick = (name : string) => {
        axios.post("api/getHotelsByCity", {cityName:name})
        .then((res)=> {dispatch(setHotels(res.data));})
        .catch((err) => console.log(err));
        navigate("/search")
         
        window.scrollTo({ 
            top: 0,  
            behavior: 'smooth'
        }); 
          
    
    }

//  data for bottom row
    useEffect(() => {
        axios.get("/api/getCitys")
        .then((res) => setCitys(res.data))
        .catch((err) => console.log(err))
    }, [])
  
//  data for top row
    const mainCityData = [
        {
            name : "Dallas",
            picture: "https://gyuazwnjskzspekvmvnr.supabase.co/storage/v1/object/sign/images/cityImages/dallas.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvY2l0eUltYWdlcy9kYWxsYXMud2VicCIsImlhdCI6MTY5OTU2MDMwNCwiZXhwIjoxODI1NzA0MzA0fQ.QYoxO4ETQ1vrGWdNLvqMi5ucp6ujew3oKxLlv-iRCrE&t=2023-11-09T20%3A05%3A04.839Z",
            code : "",
            side: true
        },
        {
            name : "Washington",
            picture : "https://gyuazwnjskzspekvmvnr.supabase.co/storage/v1/object/sign/images/cityImages/washington.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvY2l0eUltYWdlcy93YXNoaW5ndG9uLndlYnAiLCJpYXQiOjE2OTk1NjAzMjcsImV4cCI6MTgyNTcwNDMyN30.htxpOUYVOYA8kEWVJ6iV3fZcFfRb2YcNoVtIc4MX_b8&t=2023-11-09T20%3A05%3A27.975Z",
            code : "",
            side: false
        } 
    ]
// mapped top row
    const mappedMainCitys = mainCityData.map((el, index : number) => {
        return (
        <div key={index} className={el.side ? "w-1/2": "w-1/2 flex flex-row-reverse"}>   
        <motion.div 
        className='flex w-[95%]  h-[150px] border border-gray-600 shadow-lg hover:shadow-2xl bg-cover bg-no-repeat bg-center rounded-md'
        style={{backgroundImage: `url(${el.picture})`}}
        whileTap={{ scale: 0.98 }}
        whileHover={{scale: 1.01}}   
        
        onClick={() => {handleCityClick(el.name.toLocaleLowerCase())}}
        >
            
            <div className='flex items-center justify-center h-full w-32 bg-black/60 rounded-l-md'>
            <h1 className='text-xl text-white text-bold'>{el.name}</h1>
            </div>
   
        </motion.div>
        </div> 
        )
    })
//  mapped bottom row 
    const mappedCitys = citys.map((el : any, index : number) => {
        return (
            <motion.div 
            className='flex items-center justify-center w-2/12 mx-auto h-[150px]  shadow-lg hover:shadow-2xl bg-cover bg-no-repeat bg-center rounded-md'
            style={{backgroundImage: `url(${el?.picture})`}}

            onClick={() => handleCityClick(el.name.toLowerCase())}
            key={index}


            whileTap={{ scale: 0.95 }}
            whileHover={{scale: 1.01}}
            >
                
                <h1 className='w-3/4 h-1/4 text-xl text-white text-center flex pt-1 justify-center text-bold bg-black/60 '>{el.name}</h1>      
            </motion.div>  )
    })

//  component return
    return(
        <div className='mb-8'>
            <div>
            <h1 className="flex ml-24 mt-12 text-3xl  h-min w-fit flex  rounded border-b-4 border-logos-yellow"
            >Most Popular Stays</h1>

            <div className='h-[200px] w-10/12 px-6 mx-auto items-center flex '> 
                {mappedMainCitys}
            </div>
            
            <div className='flex justify-center h-[200px]'>
                <div className='flex items-center justify-center h-full w-12 '>
                    <motion.img onClick={() => { (cityCount) <= 0 ? setCityCount( citys.length - 5) : setCityCount(cityCount - 5) }} 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{type: "spring", stiffness: 300}} 
                    className="w-[50px] h-fit mr-10  text-2xl rounded-full shadow-md "
                    src={leftButton}
                    alt='left button'
                    ></motion.img>
                </div>

                <div className='flex items-center h-full w-10/12'>
                    {mappedCitys.slice(cityCount, cityCount + 5)}
                </div>

                <div className='flex items-center justify-center h-full w-12'>
                {/* <button onClick={() => { (sixCityCount + 2) >= featuredHotels.length ? setSixStarCount(0) : setSixStarCount(sixStarCount + 2)}} > </button> */}
                    <motion.img 
                        onClick={() => { (cityCount + 5) >= citys.length ? setCityCount(0) : setCityCount(cityCount + 5)}}
                        className="w-[50px] h-fit ml-10 text-2xl text-bold rounded-full shadow-md"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        src={rightButton}
                        alt='left button'
                    ></motion.img>
                </div>

            </div>
                
                
            </div>
    
        </div>
    )
}
