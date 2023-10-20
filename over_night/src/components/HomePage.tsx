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

    const [sixStarCount, setSixStarCount] = useState<number>(0)

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

    const featuredHotels = sixStars.map((element, index) => (
        <Promotions  key={index} name={element.hotelName} id={element.HotelId} image={element.pictures}/>
      ))
        
    return (
        <>
        <NavBar/>
        {/* <img scr={bellegio}></img> */}
        <HeadPage/>

            <div>
                <h1 className="flex ml-24 mt-24 text-3xl mb-10 h-min w-[200px] flex items-center justify-center rounded border-b-4 border-logos-yellow"
                >Six Star Hotels</h1>

                <div className="flex flex-row  w-full max-w-screen ">

                    <div className="w-1/2 flex flex-row items-center justify-center">
                        <button onClick={() => { sixStarCount == 0 ? setSixStarCount(featuredHotels.length -2) : setSixStarCount(sixStarCount - 2)}}
                        className="w-fit p-1 mr-10 border border-red-900 rounded"> back </button>
                        {featuredHotels[sixStarCount]} 
                    </div>

                    <div className="w-1/2 flex flex-row items-center justify-center">
                        {featuredHotels[sixStarCount + 1]}
                        <button onClick={() => { (sixStarCount + 2) >= featuredHotels.length ? setSixStarCount(0) : setSixStarCount(sixStarCount + 2)}}
                        className="w-fit p-1 ml-10 border border-red-900 rounded"> next </button>
                    </div>

                    <button onClick={() => console.log(sixStarCount)}> hi </button>

                </div>
            </div>

            <div className="flex items-center justify-center pb-5">
                <button className="w-[170px] h-[50px]  bg-gradient-to-r from-logos-gyellow to-logos-yellow hover:bg-logos-hyellow rounded-lg cursor-pointer select-none 
                        active:translate-y-2  active:[box-shadow:0_9px_0_0_#FFBA03,0_0px_0_0_#FFBA03]
                        active:border-b-[0px]
                        transition-all duration-150 [box-shadow:0_10px_0_0_#F4C01E,0_10px_0_0_#F4C01E]
                        border-b-[2px] border-yellow-100 font-semibold text-2xl text-gray-700 hover:text-black "type="submit" >Next</button>
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