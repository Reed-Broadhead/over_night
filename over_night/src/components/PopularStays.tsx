
import miami from '../assets/miami.jpeg'

export default function PopularStays(){
    return(
        <div>
            <div>
            <h1 className="flex ml-24 mt-24 text-3xl  h-min w-[268px] flex  rounded border-b-4 border-logos-blue"
            >Most Popular Stays</h1>
        
                <div className="flex items-center justify-center bg-white w-full h-[900px] grid grid-cols-3">
            
                    <div className="mx-auto">
                        <div className=" ml-12  h-[350px] w-[600px]  bg-white hover:bg-gray-100 rounded-xl shadow-2xl"></div>
                            {/* <img
                                src={miami} 
                                alt="Description of the image"
                                className="h-fit w-fit object-cover rounded-xl"/> */}
                    </div>

                    <div className="mx-auto">
                        <div className=" ml-12  h-[350px] w-[350px]  bg-white hover:bg-gray-100 rounded-xl shadow-2xl"></div>
                    </div> 
                    <div className="mx-auto">
                        <div className=" ml-12  h-[350px] w-[350px]  bg-white hover:bg-gray-100 rounded-xl shadow-2xl"></div>
                    </div>  
                    <div className="mx-auto">
                        <div className=" mr-20  h-[350px] w-[350px]  bg-white hover:bg-gray-100 rounded-xl shadow-2xl"></div>
                    </div> 
                    <div className="mx-auto">
                        <div className=" mr-20  h-[350px] w-[350px]  bg-white hover:bg-gray-100 rounded-xl shadow-2xl"></div>
                    </div>
                    <div className="mx-auto">
                        <div className=" mr-20  h-[350px] w-[300px]  bg-white hover:bg-gray-100 rounded-xl shadow-2xl"></div>
                    </div>
                </div>
            </div>
    
        </div>
    )
}
