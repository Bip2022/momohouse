import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTiktok, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import momo from "../assets/momo.png";
import { IoCartOutline } from "react-icons/io5";

function Navbar({ cartCount = 10 }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 py-4 text-black bg-white md:px-16 lg:px-32 drop-shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <NavLink to="/" className="flex items-center">
          <img src={momo} alt="momo" className="h-12 md:h-16" />
          <h1 className="ml-2 text-lg font-bold text-green-700 md:text-xl">momos</h1>
        
        </NavLink>
      </div>

      {/* Mobile View: Cart, Login, Signup */}
      <div className="flex items-center gap-x-4 md:hidden">
        {/* Cart Icon with Count (Mobile) */}
        <NavLink to="/cart" className="relative flex items-center">
          <IoCartOutline className="text-red-600 text-2xl sm:text-3xl" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full min-w-[20px] text-center">
              {cartCount}
             
            </span>
          )}
        </NavLink>
    

        {/* Login & Signup */}
      
        <NavLink to="/login" className="hover:text-green-700 font-bold">Login</NavLink>
        <NavLink to="/signup" className="hover:text-green-700 font-bold">SignUp</NavLink>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-gray-600 focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Links for Large Screens */}
      <nav
        className={`absolute top-16 left-0 z-10 w-full bg-white border-t md:static md:flex md:items-center md:justify-center md:w-auto md:border-none ${isOpen ? "flex flex-col items-center space-y-4 p-4" : "hidden md:flex md:flex-row md:space-x-6"
          }`}
      >

        <div className=" flex flex-col items-center p-4 space-y-4 md:flex-row md:space-y-0 md:space-x-6">
          <NavLink to="/about" className="hover:text-green-600">About Us</NavLink>
          <NavLink to="/menu" className="hover:text-green-600">Our Menu</NavLink>
          <NavLink to="/services" className="hover:text-green-600">Our Services</NavLink>
          <NavLink to="/allergyadvice" className="hover:text-green-600">Allergy Advice</NavLink>
          <NavLink to="/login" className="hover:text-green-700">Login</NavLink>
          <NavLink to="/signup" className="hover:text-green-700">SignUp</NavLink>

          {/* Cart Icon with Count (Large Screen) */}
          <NavLink to="/cart" className="relative hidden md:flex items-center">
            <IoCartOutline className="text-red-600 text-3xl lg:text-4xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 lg:-top-3 lg:-right-3 bg-red-500 text-white text-xs lg:text-sm font-bold px-2 lg:px-3 py-1 rounded-full min-w-[20px] lg:min-w-[24px] text-center">
                {cartCount}
              </span>
            )}
          </NavLink>
        </div>
      </nav>

      {/* Desktop View: Social Icons & Contact Button */}
      <div className="hidden md:flex items-center gap-x-6">
        <div className="flex items-center gap-x-4">
          <NavLink to="https://www.facebook.com/" target="_">
            <FaFacebook className="text-xl text-gray-600 hover:text-blue-600" />
          </NavLink>
          <NavLink to="https://www.tiktok.com/" target="_">
            <FaTiktok className="text-xl text-gray-600 hover:text-black" />
          </NavLink>
          <NavLink to="https://www.instagram.com/" target="_">
            <FaInstagram className="text-xl text-gray-600 hover:text-pink-500" />
          </NavLink>
        </div>

        <NavLink
          to="/contact"
          className="flex items-center justify-center w-32 h-12 text-white bg-orange-500 rounded-3xl hover:bg-orange-600"
        >
          Contact Us
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;
