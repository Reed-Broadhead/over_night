import logo from '../assets/overnightlogo.png'

export default function NavBar(){
    return(
        <div className="flex justify-center h-30 border border-red-900">
            <h2>Sign In</h2>
           
            
          <a><img src={logo} className="h-20" alt="logo" /></a>
       
        </div>
    )
}

