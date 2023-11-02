import Footer from "../Footer"
import NavBar from "../NavBar"
import Search from "../Search"
import { useSelector } from 'react-redux';
import Data from "./interfaces"
import Underline from "../Underline";
import {motion} from "framer-motion"
import brandedButton from "../../assets/checkmark.png"


export default function SearchPage () {
    const hotels = useSelector((state: any) => state.hotels.value)
    console.log(hotels)

    


    // if (hotels[0]){
    const hotelList = hotels[0] ? hotels?.map((hotel: Data) => {
        console.log(hotel)
        return(
            <div className="w-[900px] h-[200px] flex flex-row  mx-auto my-10 shadow-lg border-2 border-gray-400 rounded-lg">
                
                <img className=" w-[250px]"src={`http://photos.hotelbeds.com/giata/bigger/${hotel.images[0].path}`} />

                <div className="h-full w-[300px]  flex flex-col p-2">
                    {hotel.name.content.length < 25 ?
                        <h1 className=" text-xl mb-4 ml-1 border-b-2 w-fit border-logos-yellow">{hotel.name.content}</h1> 
                        :
                        <>
                        <h1 className=" text-xl ml-1 border-b-2 w-fit border-logos-yellow">{hotel.name.content.slice(0, 26)}</h1>
                        <h1 className=" text-xl mb-1 ml-1 border-b-2 w-fit border-logos-yellow">{hotel.name.content.slice(26)}</h1> 
                        </>
                    }

                    <div className="w-3/4 pl-3 ">
                        <h2 className=" text-lg ">$332</h2>

                        <h2 className=" text-lg mb-2">{`Rating: ${hotel.ranking}`}</h2>

                        <p className=" md ">{`${hotel.address.content}, ${hotel.city.content.slice(0,1)}${hotel.city.content.slice(1).toLocaleLowerCase()}`}</p>
                    </div>

                </div>
                <div className=" flex border-logos-yellow ">
{/*                    
                    <div className="  flex flex-col-reverse pb-8"> 
                        <Underline>
                        <h1 className="text-lg text-logos-blue hover:text-blue-500">Choose Room</h1>
                        </Underline>
                    </div> */}
{/* ml-16 */}
                </div>
                    <motion.div className="flex flex-row items-center  border border-gray-400 justify-center   mx-auto w-[150px] h-16 my-auto shadow-md  
                    rounded-md hover:shadow-lg "
                    whileTap={{ scale: 0.98 }}
                    whileHover={{scale: 1.1}}  
                    transition={{type: "spring", stiffness: 300}} 
                    >
                       
                        <h1 className=''>Choose Room</h1><img className="h-5 pl-2"src={brandedButton}></img>
                    </motion.div>

            </div>
        )
    }): null

    return (
        <div className=''>
        <NavBar/>
        <div className="h-28 bg-gray-400 " />
        
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