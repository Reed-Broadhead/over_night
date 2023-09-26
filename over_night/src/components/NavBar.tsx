import { NavLink } from 'react-router-dom'
import logo from '../assets/overnightlogo.png'
import SignUp from './SignUp'
import LogOut from './LogOut'
import { useSelector } from "react-redux"

export default function NavBar(){
const user = useSelector((state: any) => state.user.value)
    return(
        <div className="flex justify-center h-30 border border-red-900">
            <NavLink className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to= "/signup">Sign Up</NavLink>
          <a><img src={logo} className="h-20" alt="logo" /></a>
            {user == null ? <NavLink className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/login" >Login</NavLink> : <LogOut/>}
        

        </div>
    )
}

