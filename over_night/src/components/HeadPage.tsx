import { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Search from './Search';
import video from "../assets/compressed47sec-vid.mp4";

export default function HeadPage() {
  const user = useSelector((state) => state.user.value);

  // hotels request
  const handleClick = async () => {
    axios.get("/api/hotelSearch")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // Scroll to the top of the page when it loads
    window.scrollTo(0, 0);
  }, []); // The empty dependency array ensures this effect runs only once on component mount

  return (
    <div className="flex relative w-full h-screen bg-cover">
      <div className="flex flex-col bg-black bg-opacity-10 relative w-full h-full">
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
        <div className="flex h-full w-full items-center  flex-col">
          <h1 className="text-white text-7xl mt-auto">Your destination awaits {user?.username}</h1>
          <div className='flex w-full justify-center h-fit mb-14 mt-56'>
            <Search />
          </div>
          {/* <button className="h-10 border hover:bg-white" onClick={() => handleClick()}>YO API TEST BUTTON</button> */}
        </div>
        {/* mb-48 */}
        {/* <div className='border w-full h-64' >
          <Search />
        </div> */}
      </div>
    </div>
  );
}
