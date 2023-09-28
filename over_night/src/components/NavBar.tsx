import { NavLink } from 'react-router-dom'
import logo from '../assets/whiteLogo.png'
import SignUp from './SignUp'
import LogOut from './LogOut'
import { useSelector } from "react-redux"


export default function NavBar(){
const user = useSelector((state: any) => state.user.value)
    return(
        <div className=" bg-transparent flex border h-30 bg-contain bg-no-repeat mb-10 text-right">
             
             <div className='w-1/2'>
                <a><img src={logo} className="pt-1 pl-1 h-14" alt="logo" /></a>
            </div>
             
            <div className='w-1/2'>
                {user == null ? <NavLink className=" border mt-1 right-0 hover:bg-logos-blue text-white font-bold py-2 px-4 rounded" to="/login" >Login</NavLink> : <LogOut/>}
            </div>
            
        </div>
    )
}

