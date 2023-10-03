import { useEffect, useState } from 'react';
import axios from 'axios';
// import.meta.env.VITE_API_KEY
import NavBar from './NavBar';
import Search from './Search';
import background from '../assets/Vacation-photos/brandedPic.png'
import video from "../assets/shortclip.mp4" 

import {useSelector, useDispatch} from 'react-redux'
import {setUser} from "../states/user"

export default function HomePage(){
  const dispatch = useDispatch()

  const user = useSelector((state: any) => state.user.value);
  const hotels = useSelector((state: any) => state.hotels.value);

  const [users, setUsers] = useState<string | null> (null);
  const [loading, setLoading] = useState(true);

// hotels request
const HandleGetRequest = (city: string) =>{
  useEffect(() => {
    async function fetchData() {
  const options = {
    method: 'GET',
    url: 'https://hotels4.p.rapidapi.com/locations/v3/search',
    params: {
      q: city,
      locale: 'en_US',
      langid: '1033',
      siteid: '300000001'
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
      'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
    }
    fetchData();
  }, []);
}
//  style={{backgroundImage: `url(${background})`}}
return(
    <div className="flex relative w-full h-screen bg-cover "  >
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
    
    {/* <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/XPRyWVq8o2w?autoplay=1&loop=1"
  title="YouTube video player"
  frameborder="0"
  
  allowfullscreen
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      
></iframe> */}
    </div>

   
        <NavBar/>
        

        <div className=" flex  h-full w-full justify-center items-center ">

            <h1 className="text-white   text-8xl">Your destination await's {user?.username}</h1>
          
         
             {/* <button onClick={() => setUserFunc()}>hi</button> */}
            {/* <button className="bg-logos-blue border"onClick={() => console.log(user)}>yo</button> */}

        
       </div>
       <Search/>
      </div>
    </div>  
)
}