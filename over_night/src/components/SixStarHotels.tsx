import {useState, useEffect} from "react"
import Promotions from "./Promotions"
import axios from "axios";
import {motion} from "framer-motion"

export default function SixStarHotels() {
    const [sixStarCount, setSixStarCount] = useState<number>(0)
    const [sixStars, setSixStars] = useState([]);

    useEffect(() => {
        axios.get("/api/getSixStars")
        .then((res) => setSixStars(res.data))
        .catch((err) => console.log(err))
      }, []);

    const featuredHotels = sixStars.map((element, index) => (
        <Promotions  key={index} name={element.hotelName} id={element.HotelId} image={element.pictures}/>
      ))
    return (
<div className="h-[500px] border">
                <h1 className="flex ml-24 mt-10 text-3xl mb-5 h-min w-[200px] flex items-center justify-center rounded border-b-4 border-logos-yellow"
                >Six Star Hotels</h1>

                <div className="flex flex-row  w-full ">

                    <div className="w-1/2 flex flex-row items-center justify-center ">

                        <motion.button 
                        onClick={() => { sixStarCount == 0 ? setSixStarCount(featuredHotels.length -2) : setSixStarCount(sixStarCount - 2)}}
                        className="w-fit h-fit p-1 mr-10  text-2xl rounded shadow-lg "
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        > {'<='} </motion.button>

                        {featuredHotels[sixStarCount]} 

                    </div>

                    <div className="w-1/2 flex flex-row items-center justify-center">

                        {featuredHotels[sixStarCount + 1]}

                        <motion.button
                        onClick={() => { (sixStarCount + 2) >= featuredHotels.length ? setSixStarCount(0) : setSixStarCount(sixStarCount + 2)}}
                        className="w-fit h-fit p-1 ml-10 border border-red-900 rounded-lg shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        > {"=>"} </motion.button>

                    </div>

                </div>

                            {/* <div className="flex items-center justify-center pb-5">
                <button className="w-[170px] h-[50px]  bg-gradient-to-r from-logos-gyellow to-logos-yellow hover:bg-logos-hyellow rounded-lg cursor-pointer select-none 
                        active:translate-y-2  active:[box-shadow:0_9px_0_0_#FFBA03,0_0px_0_0_#FFBA03]
                        active:border-b-[0px]
                        transition-all duration-150 [box-shadow:0_10px_0_0_#F4C01E,0_10px_0_0_#F4C01E]
                        border-b-[2px] border-yellow-100 font-semibold text-2xl text-gray-700 hover:text-black "type="submit" >Next</button>
            </div > */}
            </div>
    )
}