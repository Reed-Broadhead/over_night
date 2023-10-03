import React, { useEffect, useState, ReactNode } from 'react'
import Blacklogo from '../assets/blacklogo.png'
import Whitelogo from "../assets/whiteLogo.png"
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';


interface Props {
    children: ReactNode;
    underlineRight?: boolean;
}

export default function Underline({children, underlineRight} : Props ){
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const style = (underlineRight == true ? "h-0.5 w-full bg-logos-yellow origin-right" : "h-0.5 w-full bg-logos-yellow origin-left")

    const variants = {
        initial: {
            scaleX:0
        },
        animate: {
            scaleX:1
        }
    };


    return (
        <div className=' w-fit hover:cursor-pointer'
        // onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}
        >
        
        <motion.div 
        onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}
        >
        {children}
        </motion.div>
       {/* <motion.img onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)} className="h-12" src={color == "white" ? Whitelogo : Blacklogo}/> */}
 
 
       
       <motion.div 
                 className={style}
                 variants={variants}
                 initial="initial"
                 animate={isHovered ? "animate" : "initial"}
             ></motion.div>

       </div>
    )

    }