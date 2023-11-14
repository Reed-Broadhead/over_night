import {motion} from "framer-motion"

interface PromotionsProps {
    name : string,
    id : string,
    image : string,
    web :string
}
// works with SixStarHotels.tsx
export default function Promotions({name, image, web} : PromotionsProps){

    return (
        <div 
        className=" 
      
        flex items-center justify-end flex-col static
        bg-cover bg-no-repeat bg-bottom
        h-[300px] w-[70%] 
        border border-gray-500
        rounded-lg shadow-lg 
        "
        // style={{backgroundImage: `url(http://localhost:5173/src/assets/Bellagio.png)`}}
        style={{backgroundImage: `url(${image})`}}
        // whileHover={{ scale: 1.01 }}
        // whileTap={{ scale: 0.97 }}
        >
            <div className="w-full h-[50%] bg-white p-2 flex flex-col items-center  rounded-b-lg">


            <h1 className="text-black text-2xl text-bold  my-auto">{name}</h1>
            <h1 className="text-lg my-auto">save 20% on all purchases cus were awsome</h1>
            <motion.a 
                className="border border-black p-2 rounded-xl py-1 px-2 text-lg my-auto hover:shadow-lg  "
                href={web}
                target="_blank" 
                rel="noreferrer" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
            >View Details</motion.a>
            </div>
        </div>
            

       
       
    )
}