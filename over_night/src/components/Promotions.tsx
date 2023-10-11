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
        flex items-center justify-end flex-col
        border border-black
        bg-cover bg-no-repeat bg-center
        ml-12 mr-12 h-[350px] w-[700px]  
        bg-white hover:bg-gray-100 rounded-xl shadow-xl "
        style={{backgroundImage: `url(http://localhost:5173/src/assets/Bellagio.png)`}}
        >

        <div className="w-full h-[20%] bg-white  flex items-center justify-center rounded-b-xl ">
        <h1 className="text-gray-800 text-4xl">{name}</h1>

        </div>
        </div>
            

       
       
    )
}