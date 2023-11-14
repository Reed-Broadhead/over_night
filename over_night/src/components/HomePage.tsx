import HeadPage from "./HeadPage"
import NavBar from "./NavBar"
import promotional from "../assets/skylinenight.png"
import PopularStays from "./PopularStays"
import Footer from "./Footer"
import SixStarHotels from "./SixStarHotels"

export default function HomePage()  {       
    return (
        <>
        <NavBar/>

        <HeadPage/>
        <SixStarHotels />

    {/* image  */}
        <div  
            className="flex justify-center items-center w-full h-[500px] "
            style={{
                backgroundImage: `url(${promotional})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}>

            {/* text in image */}
                <div className="w-full h-full  flex justify-center items-center bg-black/40">
                    <h1 className="text-7xl text-white"> Where the best memories happen </h1>
                </div>
            
        </div>

        <PopularStays/>
        <Footer/>   


        </>

        
    )
}