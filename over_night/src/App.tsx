import './App.css'
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {setUser} from "./states/user"
import axios from "axios";
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { Routes, Route } from "react-router-dom"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const handleCheck = async () => {
      axios.get('/api/checkCookies')
      .then((response) => {
        if (response) {
          const {id, username, email, address} = response.data.user;
            dispatch(setUser({
                id: id,
                username: username, 
                email: email, 
                address: address, 
            }))
        }
      })
    }
    handleCheck()
  }, [])

  return (
    <>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
    </>
  )
}

export default App
