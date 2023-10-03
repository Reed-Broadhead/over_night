import HeadPage from "./HeadPage"
import NavBar from "./NavBar"
import Promotions from "./Promotions"
import promotional from "../assets/Dallas.png"

export default function HomePage()  {

    return (
        <>
        
        <NavBar/>
        

        <HeadPage/>
        <Promotions/>
        
        <div  
            className="flex justify-center items-center w-full h-[600px]"
            style={{
                backgroundImage: `url(${promotional})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}
        >
            <h1 className="text-5xl text-white"> Where the best memoreis happen </h1>
        </div>

        </>

        
    )
}