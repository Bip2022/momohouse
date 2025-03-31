import momo from "../assets/momo.png";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-10 px-8 py-6 text-gray-700 bg-white drop-shadow-md md:px-32">
      <div className="flex flex-col gap-12 md:flex-row md:justify-between md:gap-16">
        {/* Logo and Description */}
        <div className="flex flex-wrap items-center md:mb-0 md:w-2/5">
          <NavLink to="/" className="flex items-center">
            <img src={momo} alt="Logo" className="w-12 mr-2 mb-1 " />
            <h1 className="text-2xl font-bold text-green-700 mb-2 ">momos</h1>
          </NavLink>
          <p className="font-normal leading-relaxed text-normal  mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem tempor egestas molestie. Volutpat quis egestas porttitor turpis sit in. Lorem nunc nullam morbi urna amet suspendisse nullam ac vivamus.
          </p>
        </div>




        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:w-3/5">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-green-700 hover:underline">Momos</h3>
            <nav className="space-y-2">
              <NavLink to="/about" className="block font-normal hover:text-black">About Us</NavLink>
              <NavLink to="/menu" className="block font-normal hover:text-black">Our Menu</NavLink>
              <NavLink to="/services" className="block font-normal hover:text-black">Our Services</NavLink>
              <NavLink to="/contact" className="block font-normal hover:text-black">Contact Us</NavLink>
            </nav>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-green-700 hover:underline ">Legals</h3>
            <nav className="space-y-2">
              <NavLink to="/terms" className="block hover:text-black">Terms & Conditions</NavLink>
              <NavLink to="/privacy" className="block hover:text-black">Privacy Policy</NavLink>
              <NavLink to="/support" className="block hover:text-black">Support</NavLink>
            </nav>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-green-700 hover:underline">Follow Us</h3>
            <div className="flex gap-6 flex-nowrap">
              <NavLink to="https://www.instagram.com/" target="_blank">
                <div className="p-2 transition-colors duration-200 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400">
                  <FaInstagram className="text-white" />
                </div>
              </NavLink>
              <NavLink to="https://www.facebook.com/" target="_blank">
                <div className="p-2 transition-colors duration-200 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400">
                  <FaFacebookF className="text-white" />
                </div>
              </NavLink>
              <NavLink to="https://www.twitter.com/" target="_blank">
                <div className="p-2 transition-colors duration-200 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400">
                  <FaTwitter className="text-white" />
                </div>
              </NavLink>
            </div>
            <div className="flex gap-6 mt-5 flex-nowrap">
              <NavLink to="https://www.youtube.com/" target="_blank">
                <div className="p-2 transition-colors duration-200 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400">
                  <FaYoutube className="text-white" />
                </div>
              </NavLink>
              <NavLink to="https://www.linkedin.com/" target="_blank">
                <div className="p-2 transition-colors duration-200 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400">
                  <FaLinkedinIn className="text-white" />
                </div>
              </NavLink>
              <NavLink to="https://www.tiktok.com/" target="_blank">
                <div className="p-2 transition-colors duration-200 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400">
                  <FaTiktok className="text-white" />
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-4 border-gray-300" />
      <p className="text-sm text-center text-gray-400">
        © Copyright 2023 Everest Momo Pvt. Ltd. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;