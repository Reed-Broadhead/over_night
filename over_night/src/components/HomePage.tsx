import { useEffect, useState } from 'react';
import axios from 'axios';
// import.meta.env.VITE_API_KEY
import NavBar from './NavBar';
import Search from './Search';
import background from '../assets/Vacation-photos/brandedPic.png'

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

return(
    <div className="w-full h-screen bg-cover " style={{backgroundImage: `url(${background})`}} >
        <div id="1" className="border border-red-400 bg-black bg-opacity-10 relative w-full h-full">
        <NavBar/>

        <div id="2" className='border border-blue-900  h-max'>

          <h1 className="text-white">Your room await's</h1>
          
         
             {/* <button onClick={() => setUserFunc()}>hi</button> */}
            <button className="bg-logos-blue border"onClick={() => console.log(user)}>yo</button>
       </div>
       <Search/>
      </div>
    </div>  
)
}