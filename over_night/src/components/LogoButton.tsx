import React, { useEffect, useState } from 'react'
import Blacklogo from '../assets/blacklogo.png'
import Whitelogo from "../assets/whiteLogo.png"
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';

interface Props {
    color: string
}

export default function LogoButton({color} : Props ){
    const [isHovered, setIsHovered] = useState<boolean>(false);


    const variants = {
        initial: {
            scaleX:0
        },
        animate: {
            scaleX:1
        }
    };



    return (
        <div className=' absolute left-2 top-2  w-fit hover:cursor-pointer'>
        <NavLink to= "/">
 
       <motion.img onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)} className="h-12" src={color == "white" ? Whitelogo : Blacklogo}/>
 
 
       </NavLink>
       <motion.div 
                 className="absolute bottom-0 mt-5 left-2 h-0.5 w-full bg-logos-yellow origin-left"
                 variants={variants}
                 initial="initial"
                 animate={isHovered ? "animate" : "initial"}
             ></motion.div>
       </div>
    )

    }