import NavBar from "./NavBar"
import Footer from "./Footer"

export default function About(){
    return(
        <div className="h-screen">
            <NavBar/>
            <div className="h-36 bg-gray-900" />
            <div className="bg-white flex relative w-full h-3/4 bg-cover flex flex-col items-center" >
            
            <div className=" flex flex-row h-full w-full">
                <div className ='text-2xl h-full w-1/3  text-center  text-black flex items-center border'>
                    Franco Lepe & Reed Broadhead
                </div>
                <div className="border flex flex-col h-full w-2/3"> 
                
                    <div className="w-full h-full border">
                        <div className="h-[400px] w-20 border"></div>

                    </div>

                </div>
            </div>

                <div className="h-1/3">
                    adyn
                </div>
            </div>
            <Footer/>
        </div>
    )
}