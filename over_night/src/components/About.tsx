import NavBar from "./NavBar"
import Footer from "./Footer"

export default function About(){
    return(
        <div>
            <NavBar/>
            <div className="bg-logos-blue flex relative w-full h-screen bg-cover flex items-center justify-center w-screen " >
            <h1 className ='text-2xl  text-center  text-white flex items-center justify-center'>
                Franco Lepe & Reed Broadhead
            </h1>
        </div>
        <Footer/>
        </div>
    )
}