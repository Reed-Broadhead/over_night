import {useSelector, useDispatch} from 'react-redux'
import {setUser, userSlice} from "../states/user"
import axios from "axios";
import background from "../assets/miami.jpeg"
import Login from "./Login"
import SignUp from "./SignUp";
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

export default function Login_signUp() {
    const y = (x : any) : void => {setState(x) ; console.log("hi")}

    const [isLogin, setIsLogin] = useState<boolean>(true)
    // const [isVisible, setIsVisible] = useState(true);

    const setState = (x : boolean) : void => {
        setIsLogin(x)

    }

    return (

        <div className="w-full h-screen bg-cover bg-black" style={{backgroundImage: `url(${background})`}} >
        <div className=" flex justify-center items-center   bg-black bg-opacity-30 w-full h-full">

        <AnimatePresence mode='wait'>
          <motion.div className=''
            key={isLogin}
            initial={{ x: 20, opacity: 0 }}
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