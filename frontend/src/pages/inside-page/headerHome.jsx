import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FcAbout, FcHome } from "react-icons/fc";
import { FaPersonSwimming } from "react-icons/fa6";
import { IoMdBoat, IoMdLogOut } from "react-icons/io";
import { GiFarmer } from "react-icons/gi";
import { BsFillCloudLightningRainFill } from "react-icons/bs";

const HeaderHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Store active path, default from current URL
  const [activePath, setActivePath] = useState(location.pathname);

  // Function to handle clicking a link and setting active
  const handleSetActive = (path) => {
    setActivePath(path);
    setIsMenuOpen(false);  // Optional: close mobile menu on click
  }

  // Common classes for list items
  const baseItemClass = "flex items-center space-x-2 cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-green-300 after:transition-all after:duration-300";

  // Function to generate classes depending on active/hover state
  const getItemClass = (path) => {
    const isActive = activePath === path;
    return `${baseItemClass} ${isActive ? 'after:w-full text-yellow-300' : 'after:w-0 hover:text-yellow-300 hover:after:w-full text-white'}`;
  }

  const [profileImage, setProfileImage] = useState(
    localStorage.getItem('tempProfileImage') ||
    localStorage.getItem('profileImage') ||
    'https://i.pinimg.com/736x/61/95/ff/6195ffcadbdb8bf6282645692817de64.jpg'
  );

  // Update profile image when localStorage changes
  useEffect(() => {
    const updateProfileImage = () => {
      setProfileImage(
        localStorage.getItem('tempProfileImage') ||
        localStorage.getItem('profileImage') ||
        'https://i.pinimg.com/736x/61/95/ff/6195ffcadbdb8bf6282645692817de64.jpg'
      );
    };

    window.addEventListener('profileImageUpdate', updateProfileImage);
    return () => window.removeEventListener('profileImageUpdate', updateProfileImage);
  }, []);

  return (
    <div className="overflow-hidden w-screen flex flex-col bg-gradient-to-t from-green-700 via-75% to-green-900">
      <nav className="p-2 rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 hover:text-yellow-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-300 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
            <img
              className='h-10'
              src='https://cdn-icons-png.flaticon.com/512/9309/9309055.png'
              alt="logo"
            />
            <h1 className="text-3xl font-bold font-serif ml-2 text-white hover:text-rose-50">
              <a href='#'>Nature</a>
            </h1>
          </div>

          {/* Animated hamburger button */}
          <button
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>

          {/* Navigation links */}
          <ul className={`${isMenuOpen ? 'block' : 'hidden'} md:flex absolute md:relative top-16 md:top-0 left-0 mr-[20.5rem] md:space-x-6 bg-green-800 md:bg-transparent p-4 md:p-0 md:flex-row flex-col space-y-4 md:space-y-0 text-lg font-semibold w-full md:w-auto`}>
            
            <li onClick={() => handleSetActive('/home')} className={getItemClass('/home')}>
              <Link to="/home" className="flex items-center space-x-2">
                <FcHome />
                <span>Home</span>
              </Link>
            </li>
            
            <li onClick={() => handleSetActive('/natureHome')} className={getItemClass('/natureHome')}>
              <Link to="/natureHome" className="flex items-center space-x-2">
                <FaPersonSwimming />
                <span>Nature</span>
              </Link>
            </li>
            
            <li onClick={() => handleSetActive('/rainFlowHome')} className={getItemClass('/rainFlowHome')}>
              <Link to="/rainFlowHome" className="flex items-center space-x-2">
                <BsFillCloudLightningRainFill />
                <span>Rain Flow</span>
              </Link>
            </li>
            
            <li onClick={() => handleSetActive('/farmerHome')} className={getItemClass('/farmerHome')}>
              <Link to="/farmerHome" className="flex items-center space-x-2">
                <GiFarmer />
                <span>Farmer</span>
              </Link>
            </li>
            
            <li onClick={() => handleSetActive('/seaHome')} className={getItemClass('/seaHome')}>
              <Link to="/seaHome" className="flex items-center space-x-2">
                <IoMdBoat />
                <span>Sea</span>
              </Link>
            </li>
            
            <li onClick={() => handleSetActive('/aboutHome')} className={getItemClass('/aboutHome')}>
              <Link to="/aboutHome" className="flex items-center space-x-2">
                <FcAbout />
                <span>About</span>
              </Link>
            </li>

            <li onClick={() => handleSetActive('/profile')} className={getItemClass('/profile') + " mt-[0.1rem]"}>
              <Link to="/profile" className="flex items-center">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-6 h-6 rounded-full object-cover"
                />
              </Link>
            </li>

            <li>
              <button
                onClick={() => window.location.href = '/'}
                className="flex text-white items-center space-x-2 hover:text-red-500 transition-colors font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                type="button"
              >
                <IoMdLogOut />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default HeaderHome;




