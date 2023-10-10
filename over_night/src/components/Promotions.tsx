import React from "react"


//  /home/r_broadhead24/development/over_night/over_night/src/assets/sixStars/Bellagio.png
// http ${image}
export default function Promotions({name,id,image}){
 

    const handleClick = () => {
        console.log(id)
    }
    return (
       
       
            
        <div 
        className=" 
        flex items-center justify-center
        bg-cover bg-no-repeat bg-center
        ml-12 mr-12 h-[350px] w-[350px]  
        bg-white hover:bg-gray-100 rounded-xl shadow-2xl"
        style={{backgroundImage: `url(http://localhost:5173/src/assets/Bellagio.png)`}}
        >

        <h1 className="text-gray-200 text-xl">{name}</h1>
            
        </div>
            

       
       
    )
}