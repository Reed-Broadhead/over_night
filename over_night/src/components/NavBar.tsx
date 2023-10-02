import { NavLink } from 'react-router-dom'
import Blacklogo from '../assets/blacklogo.png'
import Whitelogo from "../assets/whiteLogo.png"
import SignUp from './SignUp'
import LogOut from './LogOut'
import { useSelector } from "react-redux"
import Dots from "../assets/whitedots.png"
import { Menu, Transition } from "@headlessui/react";
import LogoButton from './LogoButton'


export default function NavBar(){
const user = useSelector((state: any) => state.user.value)
    return(

        <div className="bg-transparent flex  h-28 w-full bg-contain bg-no-repeat  text-right">
             <div className='w-1/2'>
                {/* <a><img src={Whitelogo} className="pt-1 pl-1 h-14" alt="logo" /></a> */}
                <LogoButton color="white"/>
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
                <NavLink className="mt-1.5 mr-3 h-fit hover:text-black text-white text-2xl " to="/login" >Login</NavLink>
                 : <LogOut/>}
                 
            </div>
            
        </div>
    )
}

