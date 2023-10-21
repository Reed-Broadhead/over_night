import { motion } from "framer-motion"
import logo from "../assets/NewLogoBlackGradient.png"
import FooterSections from "./FooterSection"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import medium from "../assets/medium.png"

export default function Footer(){

    const elements = [["about", "login", "sign up"], ["FAQ", "Privacy Policy", "Help"], ["Flight", "Stays", "Cars"], ["Linkedin", "GitHub", "Medium"]]

    const mappedFooterSection = elements.map((el) => {
        return (
        <FooterSections words={el} /> )
    })

    return(
        <div className="border h-[340px] flex flex-row border-t border-gray-700">

            {mappedFooterSection}

            <div className="w-[28%]  flex flex-col-reverse">

                <h1 className="mb-8 ml-10 text-gray-500">Copyright ©️ 2023. All Rights Reserved.</h1>

                <img className="mb-16" src={logo}/>

                <div className="ml-8 mb-8 w-2/4 flex flex-row  ">
                    {[linkedin, github, medium].map((el) => {
                        return (
                            <div className="w-12 mx-auto shadow-lg rounded-full hover:shadow-xl">
                                <motion.img 
                                src={el}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}/>
                            </div>)
                    })}
                </div>

            </div>

        </div>
    )
} 