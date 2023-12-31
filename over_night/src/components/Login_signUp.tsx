import Login from "./Login"
import SignUp from "./SignUp";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./NavBar";

//  conditionaly reders either login of signup
export default function Login_signUp() {

  const [isLogin, setIsLogin] = useState<boolean>(true)
  const [initialRender, setInitialRender] = useState<boolean>(true)
  const background2 = 'https://gyuazwnjskzspekvmvnr.supabase.co/storage/v1/object/sign/images/beautiful-tropical-beach-sea-min.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvYmVhdXRpZnVsLXRyb3BpY2FsLWJlYWNoLXNlYS1taW4uanBnIiwiaWF0IjoxNjk3MDM4OTg3LCJleHAiOjE3OTE2NDY5ODd9.jRZtrz-WhlSeLXRoa2Qacx3aY4b1BP7Z9kOFmbHf8rs&t=2023-10-11T15%3A43%3A07.758Z'

  

  const setState = (x : boolean) : void => {
      setIsLogin(x) 
  }

  useEffect(() : void => {
    setInitialRender(false)
  },[])



  return (

      <div className="w-full h-screen bg-cover " style={{backgroundImage: `url(${background2})`}} >
        <Navbar/>
      <div className=" flex justify-center items-center relative  bg-black bg-opacity-30 w-full h-full">
      
      <div className='absolute top-0 left-2'>
        
      </div>

      <AnimatePresence mode='wait'>
        <motion.div className='my-auto mx-auto'

          // key={isLogin}
          initial={initialRender ? {} : { x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]  }}
          > 
         {isLogin ? <Login setState={setState}/> : <SignUp setState={setState}/>}
        </motion.div> 
      </AnimatePresence>
      
      </div>
      {/* <Footer/> */}
      </div>
      
  
      

  )
}