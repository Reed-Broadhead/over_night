// import { useEffect, useState } from 'react';
import axios from 'axios';
// import.meta.env.VITE_API_KEY
import Search from './Search';
import video from "../assets/compressed47sec-vid.mp4" 

import {useSelector} from 'react-redux'





export default function HeadPage(){

  const user = useSelector((state: any) => state.user.value);

// hotels request

const handleClick = async () => {

  axios.get("/api/hotelSearch")
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
}


return(
    <div className="flex relative w-full h-screen bg-cover  "  >
        <div className=" flex flex-col  bg-black bg-opacity-10 relative  w-full h-full">
        
        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-20">
        <video  
        
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-auto min-w-full min-h-full max-w-none"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
       <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
    </div>

        

        <div className=" flex  h-full w-full justify-center items-center ">

            <h1 className="text-white   text-8xl">Your destination await's {user?.username}</h1>

            <button className="h-10 border hover:bg-white"onClick={() => handleClick()}>  YO API TEST BUTTON</button>

        
       </div>
       <Search/>
      </div>
    </div>  
)
}