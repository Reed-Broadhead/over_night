import NavBar from "./NavBar"
import Footer from "./Footer"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import medium from "../assets/medium.png"
import {motion} from "framer-motion"
import Franco from "../assets/FrancoPicColor.jpg"
import user from "../assets/user.png"
// import Reed from "../assets/user.png"
import Aydan from "../assets/AydanHeadshot.jpeg"
import Aydanlogo from "../assets/Aydanwebsitelogo.png"
import instagram from "../assets/instagramlogo2.png"

export default function About(){
 const aydansInfo = [{image:linkedin, url: "https://www.linkedin.com/in/aydanrivera/"}, {image: Aydanlogo, url: "https://aydandesigns.com/"},{image:instagram, url: "https://www.instagram.com/aydan.designs"}] 
 const francosInfo =[{image:linkedin, url:"https://www.linkedin.com/in/francolepe/"},{image:github,url:"https://github.com/FrancoLepe"},{image:medium, url: "https://medium.com/@francolepe169"}]
 const reedsInfo =[{image:linkedin, url:"https://www.linkedin.com/in/reed-broadhead/"},{image:github,url:"https://github.com/Reed-Broadhead"},{image:medium, url: "https://medium.com/@reedbroadhead"}]
    return(
        <div className="">
            {/* navBar and div to fill space - navBar positon abosolute */}
            <NavBar/>
            <div className="h-28   bg-gradient-to-r from-blue-950 to-black" />


            <div className="bg-white flex relative w-full h-3/4 bg-cover flex flex-col items-center" >
            
            <div className=" flex flex-row h-full w-fit px-20  ">

            {/* text section */}
                <div className ='text-2xl h-full w-[400px] flex flex-col text-black flex mt-10 mr-10 '>

                    <h1 className="text-bold text-5xl w-[400px] text-center  ">
                        Meet The Line Up
                    </h1>
                    <h1 className="mt-8 text-2xl w-[400px] text-gray-500 text-center">
                        A couple of full stack software developers helping you see the world
                    </h1>

                </div>

                {/* reed and franco section */}
                <div className="flex flex-row h-full w-2/3  mt-10"> 
                    <div className="w-full h-full flex flex-row  ">

                {/* first / reed  */}

                        <div className="h-[650px] w-[400px]  mr-10 ">

                            <img className="h-[400px] w-[400px] fit shadow-md rounded" src={user}/>

                            {/* text section */}
                            <h2 className=" text text-2xl mt-3 ml-1 ">Reed Broadhead</h2>
                            <h2 className=" text text-xl  text-indigo-600 ml-1">Lead Engineer</h2>
                            <p className="text-gray-500 mt-2 ml-1">you yo sjdf askksj  hhhhhhhhhhhhhhhhhhhhjsjjs jkfgdsfds ghkjtr cvtbbb bbubuub jjjjj</p>

                            {/* mapped icons section  */}
                            <div className="mt-4 w-1/3 flex flex-row  ">
                                {reedsInfo.map((el) => {
                                        return (
                                            <a className="w-10 mx-auto  rounded-full hover:shadow-xl"
                                            href={el.url}
                                            target="_blank" 
                                            rel="noreferrer"> 
                                            <motion.img 
                                            src={el.image}
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.9 }}/>
                                    
    
                                        </a>
                                )})}
                            </div>  
                        </div>
                        {/*  second / franco */}
                        <div className="h-[650px] w-[400px]  ">

                            <img className="h-[400px] w-[400px] fit shadow-md rounded " src={Franco}/>
                            {/* text section */}
                            <h2 className=" text text-2xl mt-3 ">Franco Lepe</h2>
                            <h2 className=" text text-xl  text-indigo-600">Lead Engineer</h2>
                            <p className="text-gray-500 mt-2">Hello! My name is Franco Lepe and I am a passionate and innovative software engineer utilizing a wide range of programming languages and tools to solve complex problems and deliver exceptional user experiences.</p>

                             {/* mapped icons section  */}
                            <div className="mt-4 w-1/3 flex flex-row  "
                            >
                                {francosInfo.map((el) => {
                                        return (
                                    <a className="w-10 mx-auto  rounded-full hover:shadow-xl"
                                        href={el.url}
                                        target="_blank" 
                                        rel="noreferrer"> 
                                        <motion.img 
                                        src={el.image}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}/>
                                

                                    </a>
                                )})}
                            </div>  

                        </div>

                    </div>
                </div>
            </div >
          
                {/* aydens section  */}
                <div className="h-[300px] w-[600px]   ml-48 my-5 flex flex-row  ">

                    <div className="w-1/2 h-full   ">
                    <img className="h-fit w-full shadow-md rounded" src={Aydan}/>

                    </div>
                    {/* info section   */}
                        <div className="w-1/2 h-full  px-2  ">
                            {/* text section  */}
                            <h1 className=" text-2xl ">Ayden Rivera</h1>
                            <h1 className="text-xl text-indigo-600 ">UX/UI Design Consultant</h1>
                            <p className="text-sm text-gray-500 mt-4  w-full  ">Hello! My name is Aydan Rivera, and I am a UX/UI Designer, and I am passionate about creating human-centered designs and solutions! From studying computer hardware engineering and working in the fashion industry, I have always been a creative spirit and a tech lover!</p>
                            {/* icons mapped section */}
                            <div className="mt-8 w-2/3 flex flex-row  ">
                                {aydansInfo.map((el) => {
                                        return (
                                    <a  className="w-10 mx-auto  rounded-full hover:shadow-xl"
                                    href={el.url}
                                    target="_blank" 
                                    rel="noreferrer" 
                                    >
                                    
                                        <motion.img 
                                        className="rounded-full w-full h-full "
                                        src={el.image}

                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}/>

                                

                                    </a>
                                )})}

                            </div> 

                        </div>

                </div>


       
            </div>
            <Footer/>
        </div>
    )
}