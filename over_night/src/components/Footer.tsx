import logo from "../assets/AydanLogo.png"


export default function Footer(){
    return(
        <div>
            
            <div className="flex items-center justify-center bg-gradient-to-r from-white to-logos-blue w-full h-[300px] ">
            
                <h1 className='flex items-center justify-center text-center'>Designed and Developed by Franco & Reed Copy Write 2023</h1>
                
                <img src={logo} className="pt-10 pl-8 h-32" alt="logo" />

            </div>
        </div>
    )
}