import { NavLink } from 'react-router-dom';
import Whitelogo from '../assets/NewLogoWhiteGradient..webp';//whiteLogo.png//AydanLogo.png
import LogOut from './LogOut';
import { useSelector } from 'react-redux';

import Underline from './Underline';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const user = useSelector((state: any) => state.user.value);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex justify-center h-28 w-full bg-contain bg-no-repeat fixed z-10 text-right  ${
        scrolling ? 'bg-black/50 ' : ''
      }`}
    >
      <div className="w-2/3 flex flex-row items-center">
        <div className='ml-5 w-fit '>
          <NavLink to="/" className=''>
          <Underline>
            
              <img src={Whitelogo} alt={"Logo"} className=" h-16" alt="logo" />
            
          </Underline>
          </NavLink>
          </div>
      </div>


        <div className="flex flex-row-reverse  w-1/3 h-full">

            {user == null ? (
              <div className=" flex items-center mx-auto">
                <Underline underlineRight={true}>
                  <NavLink className="h-fit hover:text-gray-100 text-white text-2xl transition-opacity duration-1000" to="/login">
                    Login
                  </NavLink>
                </Underline>
                
              </div>
            ) : (
              <div className="flex items-center mx-auto">
                <Underline underlineRight={true}>
                  <LogOut />
                </Underline>
              </div>
            )} 

          <div className="flex items-center mx-auto">
            <Underline underlineRight={true}>
                  <NavLink className="h-fit hover:text-gray-100 text-white text-2xl transition-opacity duration-1000" to="/About">
                    About
                  </NavLink>
              </Underline>
            </div>

            <div className="flex items-center mx-auto">
              <Underline underlineRight={true}>
                <NavLink className="h-fit hover:text-gray-100 text-white text-2xl transition-opacity duration-1000" to="/faq">
                  FAQ
                </NavLink>
              </Underline>
            </div>

        </div>
    </div>
  );
}
