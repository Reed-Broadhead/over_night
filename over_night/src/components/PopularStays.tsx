import {useState, useEffect} from 'react'
import axios, { AxiosHeaders } from 'axios'
import { motion } from "framer-motion"
import miami from '../assets/miami.jpeg'

export default function PopularStays(){
    const [citys, setCitys] = useState<any>([])
    const [cityCount, setCityCount] = useState<number>(0)

    useEffect(() => {
        axios.get("/api/getCitys")
        .then((res) => setCitys(res.data))
        .catch((err) => console.log(err))
    }, [])
    console.log(citys)
    // useEffect(() => {
    //     axios.get("/api/getSixStars")
    //     .then((res) => setSixStars(res.data))
    //     .catch((err) => console.log(err))
    //   }, []);

    const mainCityData = [
        {
            name : "Dallas",
            picture: "https://gyuazwnjskzspekvmvnr.supabase.co/storage/v1/object/sign/images/cityImages/dallas.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvY2l0eUltYWdlcy9kYWxsYXMuanBnIiwiaWF0IjoxNjk3ODI1MzE4LCJleHAiOjE3MjkzNjEzMTh9.aX2-Vx_R5M--pYuBxMq9oX5t9BhByUEs4r7Lw453cig&t=2023-10-20T18%3A08%3A42.033Z",
            code : ""
        },
        {
            name : "Washington",
            picture : "https://gyuazwnjskzspekvmvnr.supabase.co/storage/v1/object/sign/images/cityImages/washington.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvY2l0eUltYWdlcy93YXNoaW5ndG9uLmpwZyIsImlhdCI6MTY5NzgyMzg5NiwiZXhwIjoxNzI5MzU5ODk2fQ.wVar31PY13KPzzrCz351jP5AcB3wxn4ULVulF7yD4Fg&t=2023-10-20T17%3A45%3A00.074Z",
            code : ""
        } 
    ]

    const mappedMainCitys = mainCityData.map((el, index) => {
        return (
        <motion.div className='flex w-[40%] mx-auto h-[150px] border shadow-lg hover:shadow-2xl bg-cover bg-no-repeat bg-center rounded-md'
        style={{backgroundImage: `url(${el.picture})`}}
        whileTap={{ scale: 0.98 }}
        whileHover={{scale: 1.01}}        
        >
            
            <div className='flex items-center justify-center h-full w-32 bg-gray-700/80 rounded-l-md'>
            <h1 className='text-xl text-white text-bold'>{el.name}</h1>
            </div>
   
        </motion.div> )
    })

    const mappedCitys = citys.map((el : any) => {
        return (
            <motion.div 
            className='flex items-center justify-center w-2/12 mx-auto h-[150px] border shadow-lg hover:shadow-2xl bg-cover bg-no-repeat bg-center rounded-md'
            style={{backgroundImage: `url(${el?.picture})`}}
            whileTap={{ scale: 0.95 }}
            whileHover={{scale: 1.01}}
            >
                
                <h1 className='text-xl text-black text-bold'>{el.name}</h1>
                {/* <div className='flex items-center justify-center h-full w-32 bg-gray-700/80 rounded-l-md'>
                </div> */}
       
            </motion.div>  )
    })

    return(
        <div className='mb-8'>
            <div>
            <h1 className="flex ml-24 mt-12 text-3xl  h-min w-fit flex  rounded border-b-4 border-logos-yellow"
            >Most Popular Stays</h1>

            <div className='h-[200px] items-center flex flex-row '> 
                {mappedMainCitys}
            </div>
            
            <div className='flex justify-center h-[200px]'>
                <div className='flex items-center justify-center h-full w-12'>
                    <motion.button onClick={() => { (cityCount) <= 0 ? setCityCount( citys.length - 5) : setCityCount(cityCount - 5) }} 
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    > {'<='} </motion.button>
                </div>

                <div className='flex items-center h-full w-full'>
                    {mappedCitys.slice(cityCount, cityCount + 5)}
                </div>

                <div className='flex items-center justify-center h-full w-12'>
                {/* <button onClick={() => { (sixCityCount + 2) >= featuredHotels.length ? setSixStarCount(0) : setSixStarCount(sixStarCount + 2)}} > </button> */}
                    <motion.button 
                        onClick={() => { (cityCount + 5) >= citys.length ? setCityCount(0) : setCityCount(cityCount + 5)}}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    > {'=>'} </motion.button>
                </div>

            </div>
                
                
            </div>
    
        </div>
    )
}
