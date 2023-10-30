import { motion } from "framer-motion"
import logo from "../assets/NewLogoBlackGradient.png"
import FooterSections from "./FooterSection"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import medium from "../assets/medium.png"
import { NavLink } from "react-router-dom"

export default function Footer(){

    const elements = [[<NavLink to="/about"> About</NavLink>,<NavLink to="/login">Login</NavLink>, <NavLink to="/login">Sign Up</NavLink>], 
    [<NavLink to="/FAQ">FAQ</NavLink>, "Privacy Policy", "Help"], 
    ["Flight", "Stays", "Cars"], 
    [<NavLink to="/about">Linkedin</NavLink>,<NavLink to="/about">GitHub</NavLink>, <NavLink to="/about">Medium</NavLink>]]

    const mappedFooterSection = elements.map((el) => {
        return (
        <FooterSections words={el} /> )
    })

    return(
        <div className=" h-[340px] flex flex-row border-t border-gray-700">

            <div className="flex flex-row w-[72%] ml-auto px-10 pl-14 my-2">
            {mappedFooterSection}

            </div>

            <div className="w-[28%]  flex flex-col-reverse">

                <h1 className="mb-8 ml-10 text-gray-500">Copyright ©️ 2023. All Rights Reserved.</h1>

                <img className="mb-16" src={logo}/>

                <div className="ml-8 mb-8 w-2/4 flex flex-row  ">
                    {[linkedin, github, medium].map((el) => {
                        return (
                            <NavLink to="/about" className="w-12 mx-auto shadow-lg rounded-full hover:shadow-xl">
                            {/* <div className="w-12 mx-auto shadow-lg rounded-full hover:shadow-xl"> */}
                                <motion.img 
                                src={el}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}/>
                            {/* </div> */}

                            </NavLink>)
                    })}
                </div>

            </div>

        </div>
    )
} 