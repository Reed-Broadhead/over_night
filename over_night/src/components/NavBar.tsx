import { NavLink } from 'react-router-dom'
import logo from '../assets/overnightlogo.png'
import SignUp from './SignUp'

export default function NavBar(){
    return(
        <div className="flex justify-center h-30 border border-red-900">
            <NavLink to= "/signup">Sign Up</NavLink>
           
            
          <a><img src={logo} className="h-20" alt="logo" /></a>
       
        </div>
    )
}

