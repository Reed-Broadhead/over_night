import {useSelector, useDispatch} from 'react-redux'
import {setUser, userSlice} from "../states/user"
import axios from "axios";
import background from "../assets/miami.jpeg"
import Login from "./Login"
import SignUp from "./SignUp";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import homeButton from "../assets/arrow.png"
import { NavLink } from 'react-router-dom';
import Navbar from "./NavBar";

export default function Login_signUp() {

  const [isLogin, setIsLogin] = useState<boolean>(true)
  const [initialRender, setInitialRender] = useState<boolean>(true)
  // const [isVisible, setIsVisible] = useState(true);

  const setState = (x : boolean) : void => {
      setIsLogin(x)

  }

  useEffect(() : void => {
    setInitialRender(false)
  },[])


  return (

      <div className="w-full h-screen bg-cover bg-black" style={{backgroundImage: `url(${background})`}} >
      <div className=" flex justify-center items-center relative  bg-black bg-opacity-30 w-full h-full">
       <NavLink to= "/">
      <motion.img className="h-10 absolute left-0 top-0" src={homeButton}
      whileHover={{
        scale: 1.2,
        transition: { duration: 1 },
        
      }}/>
      </NavLink>
      <AnimatePresence mode='wait'>
        <motion.div className=''

          key={isLogin}
          initial={initialRender ? {} : { x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]  }}
          > 
         {isLogin ? <Login setState={setState}/> : <SignUp setState={setState}/>}
        </motion.div> 
      </AnimatePresence>
      
      </div>
      </div>
      
  
      

  )
}