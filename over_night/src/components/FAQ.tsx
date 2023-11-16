import Footer from "./Footer"
import NavBar from "./NavBar"
import arrow from "../assets/arrow.jpg"
import {useState, useEffect} from "react"
import {motion} from "framer-motion"

export default function FAQ(){

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
// data to use
    const data = [
    {question: "Can I book hotels on OverNight?", answer: "Booking functionality is currently not supported on OverNight; however, it is under development and is expected to be added soon."}, 
    {question: "What happens when I try to book on OverNight?", answer: "You will be redirected to the designated hotel site, where you can complete your reservation."},
    {question: "Where does OverNight obtain its data?", answer: "OverNight's data is sourced from HotelBeds, one of the largest hotel data suppliers."},
    {question: "Why does selecting a date with the calendar not work?", answer: "To properly access the calendar filter you need to first double click your arrival date and then single click your departure date."},
    {question: "Do I need to create an account to access hotel search functionality?", answer: "No, it is not necessary to create an account in order to browse hotel availability."},
    {question: "How can I see hotel prices?", answer: "In order to see hotel availability and pricing, you need to select a date range in the search bar."},
    {question: "What Technologies were used to build this site?", answer: "OverNight was built using Typescript featuring React on the front-end and Express with Prisma on the back-end."},
    {question: "Want to know more?", answer: "If you have any more questions, you can contact either Franco Lepe or Reed Broadhead.There contact information if avalible on the about us page."},
]

// state to will hold array that we use to see whick questions open
    const [clicked, setClicked] = useState<any>([])

// mappes over data
    const mappedData = data.map((el, index) => {
        return (
        // when button is clicked the div key is added to clicked state
        // if the div key is in clicked array question div is there
            <div key={index} className="w-2/3  my-4 border flex flex-col border-gray-400 shadow-md items-center rounded"
            onClick={() => setClicked( clicked.includes(index) ? clicked.filter((el : number) => el != index ) : clicked.concat(index) ) }>

            {/* question div */}
                <div className="w-full items-center flex flex-row rounded">
                {/* question */}
                    <h1  className ='text-2xl text-center my-5  text-black ml-6 '>{el.question}</h1>
                {/* button */}
                    <button className="ml-auto mr-5">
                        <motion.img 
                        className="h-6 " src={arrow}
                        animate={{
                            rotate: clicked.includes(index) ? 90 : 0
                          }}
                        />
                    </button>
                </div>

            {/* answer div */}
                <div className="w-full">
                    { clicked.includes(index) ?
                    <div className=" w-full  h-22 flex border-t-2 items-center flex-row"> 
                        <h1 className="text-xl ml-6 text-logos-blue"> / </h1>
                        <h1 className="text-xl mr-1 text-logos-blue"> / </h1>

                        <p className="text-xl  text-gray-800  ml-2 my-3 ">{el.answer}</p>
                    </div>
                    : null
                    }
                </div>
            </div>
        )
    })


    return(
        <div>
        {/* nav bar and section to fill navbar space */}
            <NavBar />
            <div className="h-28 bg-gradient-to-r from-blue-950 to-black " />

        {/* title */}
            <h1 className="text-6xl  mx-auto w-fit my-16"> Frequently Asked Question</h1>

        {/* mapped data */}
            <div className="flex flex-col relative w-full bg-cover flex items-center justify-center mb-28 " >
                {mappedData}
            </div>
        
            <Footer/>
        </div>
    )
}