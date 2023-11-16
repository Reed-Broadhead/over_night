import { motion } from "framer-motion"
import logo from "../assets/NewLogoBlackGradient.webp"
import FooterSections from "./FooterSection"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import medium from "../assets/medium.png"
import { NavLink } from "react-router-dom"


        // this component works with FooterSection component by mapping over data 
        //  and rendering FooterSection for the mapped return

export default function Footer(){

    const scrollToTop = () =>{ 
        window.scrollTo({ 
          top: 0,  
          behavior: 'smooth'
          /* you can also use 'auto' behaviour 
             in place of 'smooth' */
        }); 
      }; 

//  data to use for mapping
    const elements = [
    [<NavLink to="/about"> About</NavLink>,<NavLink to="/login">Login</NavLink>, <NavLink to="/login">Sign Up</NavLink>], 
    [<NavLink to="/FAQ">FAQ</NavLink>, "Privacy Policy", <NavLink to="/FAQ">Help</NavLink>], 
    [
    <a href="https://www.google.com/travel/flights"
    target="_blank" 
    rel="noreferrer"
    >Flight</a>,

    <button onClick={() => scrollToTop()}>Stays</button>, 

    <a href="https://www.enterprise.com/en/home.html"
    target="_blank" 
    rel="noreferrer"   
    >Cars</a>], 
    [<NavLink to="/about">Linkedin</NavLink>,<NavLink to="/about">GitHub</NavLink>, <NavLink to="/about">Medium</NavLink>]]

    
// mapping the data
    const mappedFooterSection = elements.map((el, index) => {
        return (
        <FooterSections key={index} words={el} /> )
    })

    return(
        <div className=" h-[340px] flex flex-row border-t border-gray-700">

            {/* return for mapped data */}
            <div className="flex flex-row w-[72%] ml-auto px-10 pl-14 my-2">
            {mappedFooterSection}

            </div>
            {/* logo and icon section */}
            <div className="w-[28%]  flex flex-col-reverse ">

                <h1 className="mb-8 ml-10 text-gray-500">Copyright ©️ 2023. All Rights Reserved.</h1>

                {/* logo */}
                <img className="mb-16 " alt={"logo"} src={logo}/>

                {/* icons */}
                <div className="ml-8 mb-8 w-2/4 flex flex-row  ">
                    {[linkedin, github, medium].map((el, index: number) => {
                        return (
                            <NavLink key={index} to="/about" className="w-12 mx-auto shadow-lg rounded-full hover:shadow-xl">
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