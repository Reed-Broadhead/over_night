import { useEffect, useState } from 'react';
import axios from 'axios';
// import.meta.env.VITE_API_KEY
import NavBar from './NavBar';
import Search from './Search';
import background from '../assets/Vacation-photos/brandedPic.png'
import video from "../assets/shortclip.mp4" 

import {useSelector, useDispatch} from 'react-redux'
import {setUser} from "../states/user"





export default function HeadPage(){
  const dispatch = useDispatch()

  const user = useSelector((state: any) => state.user.value);
  const hotels = useSelector((state: any) => state.hotels.value);

  const [users, setUsers] = useState<string | null> (null);
  const [loading, setLoading] = useState(true);

// hotels request
const HandleGetRequest = async (city: string) => { 
  
  axios.post("/api/getHotels", {
    city: city
}).then((response) => {console.log(response)})
}


const getSixStars = async () => {

  axios.get("/api/getSixStars")
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
}

const tripAdvisor = () => {
  const options = {
    method: 'GET',
    url: '/api/tripadvisor', // Use the relative URL for your server-side proxy
    headers: { accept: 'application/json' },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

// const options = {method: 'GET', headers: {accept: 'application/json'}};

// const tripAdvisor = ()=>{
//   const options = {
    
//     method: 'GET',
//     url: '/tripadvisor',
//     params: {key: import.meta.env.TRIP_ADVISOR_API, searchQuery: 'miami', language: 'en', currency: 'USD'},
//     headers: {accept: 'application/json'}
//   };
  
//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
//   }

    // async function fetchData() {
  // const options = {
  //   method: 'GET',
  //   url: 'https://hotels4.p.rapidapi.com/locations/v3/search',
  //   params: {
  //     q: city,
  //     locale: 'en_US',
  //     langid: '1033',
  //     siteid: '300000001'
  //   },
  //   headers: {
  //     'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
  //     'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
  //   }
  // };
  
  // try {
  //   const response = await axios.request(options);
  //   console.log(response.data);
  // } catch (error) {
  //   console.error(error);
  // }
  //   } 

    
    
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
    
    </div>

   
        {/* <NavBar/> */}
        

        <div className=" flex  h-full w-full justify-center items-center ">

            <h1 className="text-white   text-8xl">Your destination await's {user?.username}</h1>

            <h1 onClick={() => getSixStars()}>yo</h1>

        
       </div>
       <Search/>
      </div>
    </div>  
)
}