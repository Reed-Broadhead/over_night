import Footer from "./Footer"
import NavBar from "./NavBar"

export default function FAQ(){

    return(
        <div>
            <NavBar/>
            
            <div className="bg-logos-blue flex relative w-full h-screen bg-cover flex items-center justify-center w-screen " >
           
            <h1 className ='text-2xl  text-center  text-white flex items-center justify-center'>not currently open for business</h1>

            </div>
            <Footer/>
        </div>
    )
}