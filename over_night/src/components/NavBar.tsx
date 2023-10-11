import { NavLink } from 'react-router-dom';
import Blacklogo from '../assets/blacklogo.png';
import Whitelogo from '../assets/whiteLogo.png';//whiteLogo.png
import SignUp from './SignUp';
import LogOut from './LogOut';
import { useSelector } from 'react-redux';

import { Menu } from '@headlessui/react';
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
      className={`flex h-15 w-full bg-contain bg-no-repeat fixed z-10 text-right ${
        scrolling ? 'bg-gray-700 bg-opacity-30' : ''
      }`}
    >
      <div className="w-1/2">
        <div className="ml-1">
          <NavLink to="/">
          <Underline>
            
              <img src={Whitelogo} className="pt-1 pl-1 h-14" alt="logo" />
            
          </Underline>
          </NavLink>
        </div>
      </div>
      <div className="flex">
      <div className="ml-40 mr-40 mt-10">
        <Underline underlineRight={true}>
              <NavLink className="h-fit hover:text-gray-100 text-white text-3xl transition-opacity duration-1000" to="/login">
                About
              </NavLink>
            </Underline>
            </div>
            <div className="mr-40 mt-10">
            <Underline underlineRight={true}>
              <NavLink className="h-fit hover:text-gray-100 text-white text-3xl transition-opacity duration-1000" to="/login">
                FAQ
              </NavLink>
            </Underline>
            </div>
        {user == null ? (
          <div className="mr-40 mt-10">
            <Underline underlineRight={true}>
              <NavLink className="h-fit hover:text-gray-100 text-white text-3xl transition-opacity duration-1000" to="/login">
                Login
              </NavLink>
            </Underline>
            
          </div>
        ) : (
          <div className="mr-3 mt-1.5">
            <Underline underlineRight={true}>
              <LogOut />
            </Underline>
          </div>
        )}
      </div>
    </div>
  );
}
