import NavBar from "./NavBar"
import Footer from "./Footer"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import medium from "../assets/medium.png"
import {motion} from "framer-motion"
import Franco from "../assets/FrancoPicColor.jpg"
import Reed from "../assets/user.png"

export default function About(){
    return(
        <div className="">
            <NavBar/>
            <div className="h-36 bg-gray-400 " />
            <div className="bg-white flex relative w-full h-3/4 bg-cover flex flex-col items-center" >
            
            <div className=" flex flex-row h-full w-fit px-20 ">

                <div className ='text-2xl h-full w-[400px] flex flex-col text-black flex mt-10 mr-10'>
                    <h1 className="text-bold text-5xl w-[400px] text-center  ">
                    Meet The Line Up
                    </h1>
                    <h1 className="mt-8 text-2xl w-[400px] text-gray-500 text-center">
                        A couple of full stack software developers helping you see the world
                    </h1>
                </div>

                <div className="flex flex-row h-full w-2/3  mt-10"> 
                    <div className="w-full h-full flex flex-row  ">
                {/* first / reed  */}

                        <div className="h-[650px] w-[400px]  mr-10 ">
                            <img className="h-[400px] w-[400px] fit shadow-md rounded" src={Franco}/>
                            <h2 className=" text text-2xl mt-3 ml-1 ">Reed Broadhead</h2>
                            <h2 className=" text text-xl  text-indigo-600 ml-1">Lead Engineer</h2>
                            <p className="text-gray-500 mt-2 ml-1">you yo sjdf askksj  hhhhhhhhhhhhhhhhhhhhjsjjs jkfgdsfds ghkjtr cvtbbb bbubuub jjjjj</p>


                            <div className="mt-4 w-1/3 flex flex-row  ">
                                {[linkedin, github, medium].map((el) => {
                                        return (
                                    <div to="/about" className="w-10 mx-auto  rounded-full hover:shadow-xl">
                                    
                                        <motion.img 
                                        src={el}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}/>
                                

                                    </div>
                                )})}
                            </div>  
                        </div>
                        {/*  second / franco */}
                        <div className="h-[650px] w-[400px]  ">
                            <img className="h-[400px] w-[400px] fit shadow-md rounded " src={Franco}/>
                            <h2 className=" text text-2xl mt-3 ">Franco Lepe</h2>
                            <h2 className=" text text-xl  text-indigo-600">Lead Engineer</h2>
                            <p className="text-gray-500 mt-2">you yo sjdf askksj  hhhhhhhhhhhhhhhhhhhhjsjjs jkfgdsfds ghkjtr cvtbbb bbubuub jjjjj</p>


                            <div className="mt-4 w-1/3 flex flex-row  ">
                                {[linkedin, github, medium].map((el) => {
                                        return (
                                    <div to="/about" className="w-10 mx-auto  rounded-full hover:shadow-xl">
                                    
                                        <motion.img 
                                        src={el}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}/>
                                

                                    </div>
                                )})}
                            </div>  
                        </div>
                    </div>
{/* 
                    <div className="w-full h-full border">
                        <div className="h-[650px] w-[500px] border">
                        <img className="h-[440px] w-[500px] fit border border-red-400"></img>
                        <h2>Franco Block</h2>
                        <p></p>
                        </div>
                        

                    </div> */}

                </div>
            </div >
          

                <div className="h-[270px] w-[500px]   ml-24 my-5 flex flex-row">

                    <div className="w-1/2 h-full w-full  ">
                    <img className="h-full shadow-md rounded" src={Franco}/>

                    </div>
                        <div className="w-1/2 h-full  px-2">
                            <h1 className=" text-2xl ">Ayden Rivera</h1>
                            <h1 className="text-xl text-indigo-600 ">Design Consultant</h1>
                            <p className="text-md text-gray-500 mt-4  w-full">jdkflajdl;fjasd;lfjkldjfalkdjfaskldj faskldjflkasdjfkldjfla jkgldjs</p>
                            <div className="mt-8 w-2/3 flex flex-row  ">
                                {[linkedin, github, medium].map((el) => {
                                        return (
                                    <div to="/about" className="w-10 mx-auto  rounded-full hover:shadow-xl">
                                    
                                        <motion.img 
                                        src={el}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}/>
                                

                                    </div>
                                )})}
                            </div> 
                        </div>

                </div>


       
            </div>
            <Footer/>
        </div>
    )
}