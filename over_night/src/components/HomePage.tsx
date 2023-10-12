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

    const featuredHotels= sixStars.map((element, index) => (
        <Promotions  key={index} name={element.hotelName} id={element.HotelId} image={element.pictures}/>
      ))
        
    return (
        <>
        <NavBar/>
        {/* <img scr={bellegio}></img> */}
        <HeadPage/>

            <div>
            <h1 className="flex ml-24 mt-24 text-3xl  h-min w-[200px] flex items-center justify-center rounded border-b-4 border-logos-yellow"
            >Six Star Hotels</h1>
            <div 
                className="flex items-center justify-center bg-white w-full  grid grid-cols-2">
                <div className="h-[400px] mb-[80px]">{featuredHotels}</div>
                <div className="h-[400px] mb-[80px]">{featuredHotels}</div>
            </div>
            </div>
            <div className="flex items-center justify-center pb-5">
                <button className="w-[170px] h-[50px]  bg-logos-gyellow hover:bg-logos-hyellow rounded-lg cursor-pointer select-none 
                        active:translate-y-2  active:[box-shadow:0_9px_0_0_#FFBA03,0_0px_0_0_#FFBA03]
                        active:border-b-[0px]
                        transition-all duration-150 [box-shadow:0_10px_0_0_#F4C01E,0_10px_0_0_#F4C01E]
                        border-b-[2px] border-yellow-100 font-semibold text-2xl text-gray-700 "type="submit" >Next</button>
            </div >
        <div  
            className="flex justify-center items-center w-full h-[600px]"
            style={{
                backgroundImage: `url(${promotional})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}>
            <h1 className="text-7xl text-white"> Where the best memories happen </h1>
        </div>

        <PopularStays/>
        <Footer/>

        </>

        
    )
}