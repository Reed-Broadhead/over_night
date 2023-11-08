import Footer from "./Footer"
import NavBar from "./NavBar"
import arrow from "../assets/arrow.jpg"
import {useState} from "react"
import {motion} from "framer-motion"

export default function FAQ(){
    //  might finish 

    const data = [
    {question: "What Tech stack was used to build this app?", answer: " Over Night was build using react with typescript for the front-end, and express for the back-end "}, 
    {question: "What Tech stack was used to build this app?", answer: " Over Night was build using react with typescript for the front-end, and express for the back-end "},
    {question: "What Tech stack was used to build this app?", answer: " Over Night was build using react with typescript for the front-end, and express for the back-end "},
    {question: "What Tech stack was used to build this app?", answer: " Over Night was build using react with typescript for the front-end, and express for the back-end "},
    {question: "What Tech stack was used to build this app?", answer: " Over Night was build using react with typescript for the front-end, and express for the back-end "},
    {question: "What Tech stack was used to build this app?", answer: " Over Night was build using react with typescript for the front-end, and express for the back-end "},
    {question: "What Tech stack was used to build this app?", answer: " Over Night was build using react with typescript for the front-end, and express for the back-end "}]

    const [clicked, setClicked] = useState<any>([])

    const mappedData = data.map((el, index) => {
        return (
            <div key={index} className="w-2/3  my-4 border flex flex-col border-gray-400 shadow-md items-center rounded">

                <div className="w-full items-center  flex flex-row rounded">

                    <h1  className ='text-2xl text-center my-5  text-black ml-6 '>{el.question}</h1>

                    <button className="ml-auto mr-5" onClick={() => setClicked(  clicked.includes(index) ? clicked.filter((el : number) => el != index ) : clicked.concat(index) ) }>
                        <motion.img 
                        className="h-6 " src={arrow}
                        animate={{
                            rotate: clicked.includes(index) ? 90 : 0
                          }}
                        />
                    </button>

                </div>

                <div className="w-full">
                    { clicked.includes(index) ?
                    <div className=" w-full  h-22 flex border-t-2 items-center flex-row"> 
                        <h1 className="text-xl ml-6 text-logos-blue"> / </h1>
                        <h1 className="text-xl mr-1 text-logos-blue"> / </h1>

                        <p className="text-xl  text-gray-800  my-3 ">{el.answer}</p>
                    </div>
                    : null
                    }
                </div>
            </div>
        )
    })


    return(
        <div>
            <NavBar/>
            <div className="h-28 bg-gradient-to-r from-blue-950 to-black " />
            
            <h1 className="text-6xl  mx-auto w-fit my-16"> Frequently Asked Question</h1>

            <div className="flex flex-col relative w-full  bg-cover flex items-center justify-center w-screen mb-40 " >
           
                {/* <h1 className ='text-2xl  text-center  text-black flex items-center justify-center'>what Tech stack was used to build this app?</h1>
                <h1 className ='text-2xl  text-center  text-black flex items-center justify-center'>what Api was used to build this app?</h1>
                <h1 className ='text-2xl  text-center  text-black flex items-center justify-center'>what DataBase was used to build this app?</h1>
                <h1 className ='text-2xl  text-center  text-black flex items-center justify-center'>How does the Search Bar work?</h1>
                <h1 className ='text-2xl  text-center  text-black flex items-center justify-center'>How does login / logout fucntion work?</h1>
                <h1 className ='text-2xl  text-center  text-black flex items-center justify-center'>What styling was used on this app?</h1> */}
                {mappedData}
            </div>
            <Footer/>
        </div>
    )
}