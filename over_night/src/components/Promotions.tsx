import React from "react"




export default function Promotions({name,id,image}){
    


    return (
       
            
            
        <div className=" ml-12 mr-12 h-[350px] w-[350px]  bg-white hover:bg-gray-100 rounded-xl shadow-2xl">{name}{id}<img src ={image}/></div>
            

       
       
    )
}