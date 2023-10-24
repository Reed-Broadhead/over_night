import HeadPage from "./HeadPage"
import NavBar from "./NavBar"
import axios from "axios"
import Promotions from "./Promotions"
import promotional from "../assets/skylinenight.png"
import PopularStays from "./PopularStays"
import Footer from "./Footer"
import { useState, useEffect } from "react"
import passwordimage from '../assets/password.png'
import bellegio from "../assets/Bellagio.png"
import SixStarHotels from "./SixStarHotels"

export default function HomePage()  {       
    return (
        <>
        <NavBar/>
        {/* <img scr={bellegio}></img> */}
        <HeadPage/>
        <SixStarHotels />

        
        <div  
            className="flex justify-center items-center w-full h-[500px] "
            style={{
                backgroundImage: `url(${promotional})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}>
                <div className="w-full h-full  flex justify-center items-center bg-black/40">
                    <h1 className="text-7xl text-white"> Where the best memories happen </h1>
                </div>
            
        </div>

        <PopularStays/>
        <Footer/>   


        </>

        
    )
}