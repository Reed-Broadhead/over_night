import {useSelector, useDispatch} from 'react-redux'
import {setUser, userSlice} from "../states/user"
import axios, { formToJSON } from "axios";
import background from "../assets/miami.jpeg"
import Login from "./Login"
import SignUp from "./SignUp";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import homeButton from "../assets/WhiteLogo.png"
import { Form, NavLink } from 'react-router-dom';
import Navbar from "./NavBar";
 

export default function Login_signUp() {

  const [isLogin, setIsLogin] = useState<boolean>(true)
  const [initialRender, setInitialRender] = useState<boolean>(true)
  const [isHovered, setIsHovered] = useState<boolean>(false);
  

  const setState = (x : boolean) : void => {
      setIsLogin(x)

  }

  useEffect(() : void => {
    setInitialRender(false)
  },[])

  const variants = {
    initial: {
        scaleX:0
    },
    animate: {
        scaleX:1
    }
};

  return (

      <div className="w-full h-screen bg-cover bg-black" style={{backgroundImage: `url(${background})`}} >
      <div className=" flex justify-center items-center relative  bg-black bg-opacity-30 w-full h-full">

      <div className=' absolute left-2 top-2  w-fit hover:cursor-pointer'>
       <NavLink to= "/">

      <motion.img onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)} className="h-12" src={homeButton}/>


      </NavLink>
      <motion.div 
                className="absolute bottom-0 mt-5 left-2 h-0.5 w-full bg-logos-yellow origin-left"
                variants={variants}
                initial="initial"
                animate={isHovered ? "animate" : "initial"}
            ></motion.div>
      </div>


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