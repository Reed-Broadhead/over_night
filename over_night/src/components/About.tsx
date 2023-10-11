import NavBar from "./NavBar"

export default function About(){
    return(
        <div>
            <NavBar/>
            <div className="bg-logos-blue flex relative w-full h-screen bg-cover" >
            <h1 className ='text-2xl  text-center flex items-center justify-center'>about us section 
                designed by:
                Franco Lepe & Reed Broadhead
            </h1>
        </div>
        </div>
    )
}