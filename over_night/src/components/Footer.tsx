import logo from "../assets/AydanLogo.png"


export default function Footer(){
    return(
        <div>
            
            <div className="border-2 border-gray-400 w-full h-[340px] ">
                <span className="grid grid-cols-5 ">
                <div>
                    <h1 className='pl-28 pb-8 mt-12 text-justify '>About</h1>
                </div>
                <div>
                    <h1 className='pl-28 pb-8 mt-12 text-justify '>FAQ</h1>
                </div>
                <div>
                    <h1 className='pl-28 pb-8 mt-12 text-justify '>Destinations</h1>
                </div>
                
                <div>
                    <h1 className=' pb-8 mt-12 text-justify '>Log in</h1>
                </div>
                <div>
                <img src={logo} className="mt-12 h-24 " alt="logo" />
                </div>
                <div>
                    <h1 className='pl-28 pb-8 text-justify '>Six Star Hotels</h1>
                </div>
                <div>
                    <h1 className='pl-28 pb-8 text-justify '>Privacy policy</h1>
                </div>
                <div>
                    <h1 className='pl-28 pb-8 text-justify '>Popular Destinations</h1>
                </div>
                <div>
                    <h1 className=' pb-8 text-justify '>Designed and Developed by Franco & Reed </h1>
                </div>
                
                </span>

               

            </div>
            
            </div>
    )
}