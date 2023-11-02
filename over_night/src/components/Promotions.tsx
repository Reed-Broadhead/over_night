import React from "react"
import {motion} from "framer-motion"

//  /home/r_broadhead24/development/over_night/over_night/src/assets/sixStars/Bellagio.png
// http ${image}

interface PromotionsProps {
    name : String,
    id : String,
    image : String
}

export default function Promotions({name, id, image} : PromotionsProps){
 

    const handleClick = () => {
        console.log(id)
    }
    return (
        <div 
        className=" 
      
        flex items-center justify-end flex-col static
        bg-cover bg-no-repeat bg-center
        h-[300px] w-[70%] 
        
         hover:bg-gray-100 rounded-lg shadow-lg 
        "
        // style={{backgroundImage: `url(http://localhost:5173/src/assets/Bellagio.png)`}}
        style={{backgroundImage: `url(${image})`}}
        // whileHover={{ scale: 1.01 }}
        // whileTap={{ scale: 0.97 }}
        >
            

            <div className="w-full h-[50%] bg-white  flex flex-col items-center  rounded-b-lg ">


            <h1 className="text-black text-2xl text-bold  my-auto">{name}</h1>
            <h1 className="text-lg my-auto">save 20% on all purchases cus were awsome</h1>
            <motion.button className="border border-black rounded-xl py-1 px-2 text-lg my-auto hover:shadow-lg  "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
            >View Details</motion.button>
            </div>
        </div>
            

       
       
    )
}