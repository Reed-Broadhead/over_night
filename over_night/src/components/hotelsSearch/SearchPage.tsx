import Footer from "../Footer"
import NavBar from "../NavBar"
import Search from "../Search"
import { useSelector } from 'react-redux';
import Data from "./interfaces"
import Underline from "../Underline";
import {motion} from "framer-motion"
import brandedButton from "../../assets/checkmark.png"
import {useState} from "react"


export default function SearchPage () {
    const hotels = useSelector((state: any) => state.hotels.value)

    const imageRanking: any = {
        "GEN" : 1 ,
        "TER" : 2 ,
        "COM" : 3 ,
        "HAB" : 4 ,
        "PLA" : 5 ,
        "PIS" : 6 ,
        "BAR" : 7 ,
        "CON" : 8 ,
        "DEP" : 9 ,
        "RES" : 10, }

    const hotelList = hotels[0] ? hotels?.map((hotel: Data) => {

        const [image, setImage] = useState<any>(hotel.images[0])

        hotel.images.forEach((img: any) => {
            if (imageRanking.img?.imageTypeCode < imageRanking.image?.imageTypeCode) {
                setImage(img)
            }
        })

        return(
            <div className="w-[900px] h-[200px] flex flex-row  mx-auto my-10 shadow-lg border-2 border-gray-400 rounded-lg">
                
                <img className=" w-[250px]"src={`http://photos.hotelbeds.com/giata/bigger/${image.path}`} />

                <div className="h-full w-[300px]  flex flex-col p-2">
                    {hotel.name.content.length < 25 ?
                        <h1 className=" text-xl mb-4 ml-1 border-b-2 w-fit border-logos-blue">{hotel.name.content}</h1> 
                        :
                        <>
                        <h1 className=" text-xl ml-1 border-b-2 w-fit border-logos-blue">{hotel.name.content.slice(0, 26)}</h1>
                        <h1 className=" text-xl mb-1 ml-1 border-b-2 w-fit border-logos-blue">{hotel.name.content.slice(26)}</h1> 
                        </>
                    }

                    <div className="w-3/4 pl-3 ">
                        <h2 className=" text-lg ">$332</h2>

                        <h2 className=" text-lg mb-2">{`Rating: ${hotel.ranking}`}</h2>

                        <p className=" md ">{`${hotel.address.content}, ${hotel.city.content.slice(0,1)}${hotel.city.content.slice(1).toLocaleLowerCase()}`}</p>
                    </div>

                </div>
                <div className=" flex border-logos-yellow ">
                </div>
                    <motion.div className="flex flex-row items-center bg-logos-yellow border border-gray-400 justify-center   mx-auto w-[150px] h-16 my-auto shadow-md  
                    rounded-md hover:shadow-lg "
                    whileTap={{ scale: 0.98 }}
                    whileHover={{scale: 1.1}}  
                    transition={{type: "spring", stiffness: 300}} 
                    >
                       
                        <h1 className='font-bold font-poppins'>Choose Room</h1><img className="h-5 pl-2"></img>
                    </motion.div>

            </div>
        )
    }): null

    return (
        <div className=''>
        <NavBar/>
        <div className="h-28 bg-gradient-to-r from-blue-950 to-black " />
        
        <div className="flex items-center justify-center w-full mb-10 mt-5  ">
            <motion.h1 className="text-6xl text-black">
                Hotel List
            </motion.h1>
        </div>
        
        {/* <Search/> */}

        <div className=" w-full mt-16 ">
            {hotelList}
        </div>

       

        {/* <div className=" flex items-center justify-center bg-cover bg-no-repeat bg-center
        ml-72 mt-40 mb-10 h-[350px] w-[1500px] bg-white hover:bg-gray-100 rounded-xl shadow-2xl">HotelName,Price,Rating,Picture</div>
        
        <div className=" flex items-center justify-center bg-cover bg-no-repeat bg-center
        ml-72 mb-10 h-[350px] w-[1500px] bg-white hover:bg-gray-100 rounded-xl shadow-2xl">HotelName,Price,Rating,Picture</div>
       
        <div className=" flex items-center justify-center bg-cover bg-no-repeat bg-center
        ml-72 mb-10 h-[350px] w-[1500px] bg-white hover:bg-gray-100 rounded-xl shadow-2xl">HotelName,Price,Rating,Picture</div>
       
        <div className=" flex items-center justify-center bg-cover bg-no-repeat bg-center
        ml-72 mb-10 h-[350px] w-[1500px] bg-white hover:bg-gray-100 rounded-xl shadow-2xl">HotelName,Price,Rating,Picture</div>

        <div className=" flex items-center justify-center bg-cover bg-no-repeat bg-center
        ml-72 mb-10 h-[350px] w-[1500px] bg-white hover:bg-gray-100 rounded-xl shadow-2xl">HotelName,Price,Rating,Picture</div>

        <div className=" flex items-center justify-center bg-cover bg-no-repeat bg-center
        ml-72 mb-10 h-[350px] w-[1500px] bg-white hover:bg-gray-100 rounded-xl shadow-2xl">HotelName,Price,Rating,Picture</div>

        <div className=" flex items-center justify-center bg-cover bg-no-repeat bg-center
        ml-72 mb-10 h-[350px] w-[1500px] bg-white hover:bg-gray-100 rounded-xl shadow-2xl">HotelName,Price,Rating,Picture</div>
        
        <div className=" flex items-center justify-center bg-cover bg-no-repeat bg-center
        ml-72 mb-10 h-[350px] w-[1500px] bg-white hover:bg-gray-100 rounded-xl shadow-2xl">HotelName,Price,Rating,Picture</div>

        <div className=" flex items-center justify-center bg-cover bg-no-repeat bg-center
        ml-72 mb-10 h-[350px] w-[1500px] bg-white hover:bg-gray-100 rounded-xl shadow-2xl">HotelName,Price,Rating,Picture</div>

        <div className=" flex items-center justify-center bg-cover bg-no-repeat bg-center
        ml-72 mb-10 h-[350px] w-[1500px] bg-white hover:bg-gray-100 rounded-xl shadow-2xl">HotelName,Price,Rating,Picture</div>

        <div className='flex items-center justify-center mb-10'>
        <button className=" border hover:bg-logos-blue ">previous</button>
        <button className=" border hover:bg-logos-blue ">next</button> */}
       
        {/* </div> */}
        <Footer/>
        </div>
    )

}