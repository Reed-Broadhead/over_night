import {useState, useEffect} from "react"
import Promotions from "./Promotions"
import axios from "axios";
import {motion} from "framer-motion"
import rightButton from "../assets/iconNextRight.png"
import leftButton from "../assets/iconLeftButton.png"

// works with promotions.tsx
export default function SixStarHotels() {
    const [sixStarCount, setSixStarCount] = useState<number>(0)
    const [sixStars, setSixStars] = useState([]);

    useEffect(() => {
        axios.get("/api/getSixStars")
        .then((res) => setSixStars(res.data))
        .catch((err) => console.log(err))
      }, []);

    const featuredHotels = sixStars.map((element: any, index) => (
        <Promotions  key={index} name={element.hotelName} id={element.HotelId} image={element.pictures} web={element.web}/>
      ))
    return (
<div className="h-[475px] flex flex-col items-center">

                <div className="h-[120px] w-full flex items-center justify-center">

                <h1 className="flex   text-3xl  h-min w-[200px] flex items-center justify-center rounded border-b-4 border-logos-yellow"
                >Six Star Hotels</h1>
                </div>

                <div className="flex flex-row  w-full  ">

                    <div className="w-1/2 flex flex-row items-center justify-center ">

                        <motion.img 
                        onClick={() => { sixStarCount == 0 ? setSixStarCount(featuredHotels.length -2) : setSixStarCount(sixStarCount - 2)}}

                        className="w-[50px] h-fit mr-10  text-2xl rounded-full shadow-md cursor-pointer  "

                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{type: "spring", stiffness: 300}} 
                        src={leftButton}
                        alt='left button'
                        ></motion.img>

                        {featuredHotels[sixStarCount]} 

                    </div>

                    <div className="w-1/2 flex flex-row items-center justify-center">

                        {featuredHotels[sixStarCount + 1]}

                        <motion.img
                        onClick={() => { (sixStarCount + 2) >= featuredHotels.length ? setSixStarCount(0) : setSixStarCount(sixStarCount + 2)}}
                        className="w-[50px] h-fit ml-10 text-2xl text-bold rounded-full shadow-md cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{type: "spring", stiffness: 300}} 
                        
                        src={rightButton}
                       alt='button right'></motion.img>

                    </div>
                   

                </div>
                
            </div>
    )
}