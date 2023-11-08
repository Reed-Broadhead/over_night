import Footer from "./Footer"
import NavBar from "./NavBar"

export default function FAQ(){
    //  might finish 
    return(
        <div>
            <NavBar/>
            
            <div className="flex flex-col relative w-full h-screen bg-cover flex items-center justify-center w-screen " >
           
            <h1 className ='text-2xl  text-center  text-black flex items-center justify-center'>what Tech stack was used to build this app?</h1>
            <h1 className ='text-2xl  text-center  text-black flex items-center justify-center'>what Api was used to build this app?</h1>
            <h1 className ='text-2xl  text-center  text-black flex items-center justify-center'>what DataBase was used to build this app?</h1>
            <h1 className ='text-2xl  text-center  text-black flex items-center justify-center'>How does the Search Bar work?</h1>
            <h1 className ='text-2xl  text-center  text-black flex items-center justify-center'>How does login / logout fucntion work?</h1>
            <h1 className ='text-2xl  text-center  text-black flex items-center justify-center'>What styling was used on this app?</h1>
            </div>
            <Footer/>
        </div>
    )
}