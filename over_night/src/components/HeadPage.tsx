import { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Search from './Search';
import video from "../assets/compressed47sec-vid.mp4";

export default function HeadPage() {
// redux state - is persistant
  const user = useSelector((state) => state.user.value);


  useEffect(() => {
    // Scroll to the top of the page when it loads
    window.scrollTo(0, 0);
  }, []); // The empty dependency array ensures this effect runs only once on component mount

  
  // function to run batching prossess batching prosses needs to be updated- takes to long
  const makeRequest = () => {
        axios.get("/api/getBatchData")
        .then((res)=>console.log(res))
        .catch((err) => console.log(err));
    }
  
  return (
    <div className="flex relative w-full h-screen bg-cover">
      <div className="flex flex-col bg-black bg-opacity-10 relative w-full h-full">

        {/* video */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-20">
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-auto min-w-full min-h-full max-w-none"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className=" h-full w-full flex-col">

          {/* message */}
          <div className='w-full h-1/2 flex items-center justify-center'>
            <h1 className="text-white text-center text-7xl mt-auto  ">Your destination awaits {user?.username}</h1> 
          </div>
          
          {/* search bar */}
          <div className='flex w-full justify-center mt-[13%]  h-fit mb-14 '>
            <Search />
          </div>

        </div>
      </div>
    </div>
  );
}
