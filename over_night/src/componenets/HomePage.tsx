
import { useEffect, useState } from 'react';
import axios from 'axios';

import NavBar from './NavBar';
import Search from './Search';


export default function HomePage(){
  const [users, setUsers] = useState<string | null> (null);
  const [loading, setLoading] = useState(true);

function HandleGetRequest(city: string){
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

function RequestUsers(){
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get('/api/users');
        console.log('Response:', response.data);
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
    fetchUsers();
  }, []);
}
// HandleGetRequest("dallas")
// HandleGetRequest("new York")
RequestUsers()
console.log(users)

return(
    <div>
        
        <NavBar/>
        <Search/>
        <h2>hello home page</h2>

    </div>
)
}