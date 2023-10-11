import HeadPage from "./HeadPage"
import NavBar from "./NavBar"
import axios from "axios"
import Promotions from "./Promotions"
import promotional from "../assets/Dallas.png"
import PopularStays from "./PopularStays"
import Footer from "./Footer"
import { useState, useEffect } from "react"
import passwordimage from '../assets/password.png'
import bellegio from "../assets/Bellagio.png"


export default function HomePage()  {

    const [sixStars, setSixStars] = useState([]);

    useEffect(() => {
        axios.get("/api/getSixStars")
        .then((res) => setSixStars(res.data))
        .catch((err) => console.log(err))
      }, []);

      const fakeData=[
        {name:"joe",
        id:1,
        image:passwordimage},

        {name:"joe",
        id:2,
        image:passwordimage},

        {name:"yay",
        id:3,
        image:passwordimage},

        {name:"you",
        id:4,
        image:passwordimage},

    ]

    const locks= sixStars.map((element, index) => (
        <Promotions  key={index} name={element.hotelName} id={element.HotelId} image={element.pictures}/>
      ))
        
    return (
        <>
        <NavBar/>
        {/* <img scr={bellegio}></img> */}
        <HeadPage/>

            <div>
            <h1 className="flex ml-24 mt-24 text-3xl  h-min w-[575px] flex items-center rounded border-b-4 border-logos-yellow"
            >Six Star Hotels</h1>
            <div 
                className="flex items-center justify-center bg-white w-full h-[600px] grid grid-cols-4">
                {locks}
            </div>
            </div>
       
        <div  
            className="flex justify-center items-center w-full h-[600px]"
            style={{
                backgroundImage: `url(${promotional})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}
        >
            <h1 className="text-7xl text-white"> Where the best memories happen </h1>
        </div>
        <PopularStays/>
        <Footer/>

        </>

        
    )
}