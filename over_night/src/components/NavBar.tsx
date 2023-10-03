import { NavLink } from 'react-router-dom'
import Blacklogo from '../assets/blacklogo.png'
import Whitelogo from "../assets/whiteLogo.png"
import SignUp from './SignUp'
import LogOut from './LogOut'
import { useSelector } from "react-redux"
import Dots from "../assets/whitedots.png"
import { Menu, Transition } from "@headlessui/react";
import Underline from './Underline'
import { useEffect, useState } from 'react';

//  absolute top-0 left-0
export default function NavBar(){
const user = useSelector((state: any) => state.user.value)
const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
     }, []);


    return(
        
        <div className={`bg-transparent flex h-15 w-full bg-contain bg-no-repeat fixed z-10 text-right ${
            scrolling ? 'bg-gray-700 bg-opacity-30 ' : '' }`}>
             
             <div className='w-1/2'>
                
                <div className='ml-1'>
                    <Underline>
                        <img src={Whitelogo} className=" pt-1 pl-1 h-14" alt="logo" />
                    </Underline>
                </div>

            </div>
            <div className='w-1/2 flex flex-row-reverse mr-2 '>


        <Menu as='div' className="relative" >

            <Menu.Button>
            <img src={Dots} className='h-1.5 mt-5'/>
            </Menu.Button>

                <Menu.Items className="absolute right-0 border border-gray-700 rounded-sm  mt-2 shadow-md ">               
                <Menu.Items className=" w-28 text-white bg-gray-600 bg-opacity-10 hover:bg-gray-400 border-y border-y-gray-600 rounded-t-sm flex justify-center ">FAQ</Menu.Items>
                <Menu.Items className=" w-28 text-white bg-gray-600 bg-opacity-10 hover:bg-gray-400 border-y border-y-gray-600 rounded-t-sm flex justify-center ">About Us</Menu.Items>
                </Menu.Items>
            
        </Menu>




                {user == null ? 
                <div className='mr-3 mt-1.5' >
                <Underline underlineRight={true} >
                    <NavLink className=" h-fit hover:text-gray-100 text-white text-2xl " to="/login" >Login</NavLink>
                </Underline>
                </div>
                 : 
                 <div className='mr-3 mt-1.5' >
                 <Underline underlineRight={true} >
                 <LogOut/>
                 </Underline>
                </div>
                 
                 }
                 
            </div>
            
        </div>
       
    )
}

