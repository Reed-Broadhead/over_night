import React from "react"


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
        border border-gray-200
        flex items-center justify-end flex-col static
        bg-cover bg-no-repeat bg-center
        h-[350px] w-[600px] 
        mb-[20px] 
        bg-white hover:bg-gray-100 rounded-xl shadow-xl 
        hover:shadow-2xl"
        // style={{backgroundImage: `url(http://localhost:5173/src/assets/Bellagio.png)`}}
        style={{backgroundImage: `url(${image})`}}

        >

            <div className="w-[600px] h-[20%] bg-white  flex items-center justify-center rounded-b-xl ">

            <h1 className="text-gray-800 text-4xl">{name}</h1>

            </div>
        </div>
            

       
       
    )
}