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
        <motion.div 
        className=" 
        border border-gray-600
        flex items-center justify-end flex-col static
        bg-cover bg-no-repeat bg-center
        h-[300px] w-[70%] 
        
         hover:bg-gray-100 rounded-xl shadow-xl 
        hover:shadow-2xl"
        // style={{backgroundImage: `url(http://localhost:5173/src/assets/Bellagio.png)`}}
        style={{backgroundImage: `url(${image})`}}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.97 }}
        >
            <div className="w-full h-[20%] bg-black/50  border-x border-gray-600 flex items-center justify-center rounded-b-xl ">


            <h1 className="text-white text-4xl">{name}</h1>

            </div>
        </motion.div>
            

       
       
    )
}