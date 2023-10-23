import logo from "../assets/NewLogoBlackGradient.png"
import FooterSections from "./FooterSection"

export default function Footer(){

    const elements = [["instagram", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], ["10", "11", "12"]]

    const mappedFooterSection = elements.map((el) => {
        return (
        <FooterSections words={el} /> )
    })

    return(
        <div className="border h-[340px] flex flex-row border-t border-gray-700">
            
            
            {mappedFooterSection}
            <div className="w-[28%] border flex flex-col-reverse">
                <h1 className="mb-8 ml-10">copy wright</h1>
                <img className="mb-16" src={logo}/>
                <div className="ml-8 mb-8 w-2/4 flex flex-row  ">
                <h1 className="mx-auto">1</h1>
                <h1 className="mx-auto">2</h1>
                <h1 className="mx-auto">3</h1>
                </div>
            </div>

        </div>
    )
} 