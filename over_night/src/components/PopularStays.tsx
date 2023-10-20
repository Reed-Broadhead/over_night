import {useState, useEffect} from 'react'
import axios, { AxiosHeaders } from 'axios'
import miami from '../assets/miami.jpeg'

export default function PopularStays(){
    const [citys, setCitys] = useState<any>(null)

    useEffect(() => {
        axios.get("/api/getCitys")
        .then((res) => setCitys(res.data))
        .catch((err) => console.log(err))
    }, [])
    console.log(citys)
    // useEffect(() => {
    //     axios.get("/api/getSixStars")
    //     .then((res) => setSixStars(res.data))
    //     .catch((err) => console.log(err))
    //   }, []);

    const mainCityData = [
        {
            name : "Dallas",
            picture: "https://gyuazwnjskzspekvmvnr.supabase.co/storage/v1/object/sign/images/cityImages/dallas.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvY2l0eUltYWdlcy9kYWxsYXMuanBnIiwiaWF0IjoxNjk3ODI1MzE4LCJleHAiOjE3MjkzNjEzMTh9.aX2-Vx_R5M--pYuBxMq9oX5t9BhByUEs4r7Lw453cig&t=2023-10-20T18%3A08%3A42.033Z",
            code : ""
        },
        {
            name : "Washington",
            picture : "https://gyuazwnjskzspekvmvnr.supabase.co/storage/v1/object/sign/images/cityImages/washington.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvY2l0eUltYWdlcy93YXNoaW5ndG9uLmpwZyIsImlhdCI6MTY5NzgyMzg5NiwiZXhwIjoxNzI5MzU5ODk2fQ.wVar31PY13KPzzrCz351jP5AcB3wxn4ULVulF7yD4Fg&t=2023-10-20T17%3A45%3A00.074Z",
            code : ""
        } 
    ]

    const mappedMainCitys = mainCityData.map((el, index) => {
        // console.log("hi")
        return (
        <div className='flex w-[40%] mx-auto h-[150px] border shadow-lg hover:shadow-xl bg-cover bg-no-repeat bg-center rounded-md'
        style={{backgroundImage: `url(${el.picture})`}}>
            
            <div className='flex items-center justify-center h-full w-32 bg-gray-700/80 rounded-l-md'>
            <h1 className='text-xl text-white text-bold'>{el.name}</h1>
            </div>
   
        </div> )
    })

    return(
        <div>
            <div>
            <h1 className="flex ml-24 mt-24 text-3xl  h-min w-fit flex  rounded border-b-4 border-logos-yellow"
            >Most Popular Stays</h1>

            <div className='h-[200px] items-center flex flex-row border'> 
                {mappedMainCitys}
            </div>
            
            <div className='h-[200px]'>

            </div>
                
                
            </div>
    
        </div>
    )
}
