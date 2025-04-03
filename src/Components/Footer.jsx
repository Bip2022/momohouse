import momo from "../assets/momo.png";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <>
        <div className="bg-[#FAFBFB] px-4 sm:px-4 font-primary-head">
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-around py-16 w-[100%] m-auto border-b border-[#d4d3d3]">
            
        <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[349px] xl:w-[550px] mb-6 sm:mb-6 md:mb-6 lg:mb-0">
           <NavLink to="/" className="flex items-center gap-x-3">
                <img src={momo} alt="momo_snap" className="h-9" />
                <h1 className="text-2xl text-green-700 hover:text-green-500 font-bold ml-1">momos</h1>
            </NavLink>
            <p className="mt-4 text-[15px] sm:text-[15px] md:text-[16px] text-[#6B788E] font-normal font-primary-head leading-loose">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                has been the industry's standard dummy text ever since the 1500s</p>
        </div>

        <div className="flex justify-between flex-col sm:flex-row md:flex-row lg:flex-row lg:gap-x-12">
        <div className="mb-6 sm:mb-6 md:mb-0">
            <h2 className="text-[18px] sm:text-[18px] md:text-[25px] text-green-700 hover:text-green-700 font-bold mb-4">Momos</h2>
            <ul className="flex flex-col">
               <NavLink to="/about"><li className="text-[15px] sm:text-[15px] md:text-[16px] font-primary-head text-[#252D43] mb-2">About Us</li></NavLink>
               <NavLink to="/menu"><li className="text-[15px] sm:text-[15px] md:text-[16px] font-primary-head text-[#252D43] mb-2">Our Menu</li></NavLink>
               <NavLink to="/services"><li className="text-[15px] sm:text-[15px] md:text-[16px] font-primary-head text-[#252D43] mb-2">Our Services</li></NavLink>
               <NavLink to="/contact"><li className="text-[15px] sm:text-[15px] md:text-[16px] font-primary-head text-[#252D43] mb-2">Contact Us</li></NavLink>
            </ul>
        </div>

        <div className="mb-6 sm:mb-6 md:mb-0">
        <h2 className="text-[18px] sm:text-[18px] md:text-[25px] text-green-700 hover:text-green-700 font-bold mb-4">Legals</h2>
            <ul>
            <NavLink to="/"><li className="text-[15px] sm:text-[15px] md:text-[16px] font-primary-head text-[#252D43] mb-2">Terms & Conditions</li></NavLink>
            <NavLink to="/"><li className="text-[15px] sm:text-[15px] md:text-[16px] font-primary-head text-[#252D43] mb-2">Privacy Policy</li></NavLink>
            <NavLink to="/contact"><li className="text-[15px] sm:text-[15px] md:text-[16px] font-primary-head text-[#252D43] mb-2">Supports</li></NavLink>
            </ul>
        </div>

        <div>
        <h2 className="text-[18px] sm:text-[18px] md:text-[25px] text-green-700 hover:text-green-700 font-bold mb-4">Follow Us</h2>
        <ul className="flex md:flex-row flex-wrap gap-x-4 w-48">
            <NavLink to="https://www.facebook.com/" target="_"><li><FaFacebookF size={37} color="white" className="rounded-full bg-[#A6AEBB] p-2 mb-4"/></li></NavLink>
            <NavLink to="https://www.linkedin.com/" target="_"><li><FaLinkedinIn size={37} color="white" className="rounded-full bg-[#A6AEBB] p-2 mb-4"/></li></NavLink>
            <NavLink to="https://x.com/" target="_"><li><FaTwitter size={37} color="white" className="rounded-full bg-[#A6AEBB] p-2 mb-4"/></li></NavLink>
            <NavLink to="https://www.youtube.com/" target="_"><li><FaYoutube size={37} color="white" className="rounded-full bg-[#A6AEBB] p-2"/></li></NavLink>
            <NavLink to="https://www.instagram.com/" target="_"><li><FaInstagram size={37} color="white" className="rounded-full bg-[#A6AEBB] p-2"/></li></NavLink>
            <NavLink to="https://www.tiktok.com/" target="_"><li><FaTiktok size={37} color="white" className="rounded-full bg-[#A6AEBB] p-2"/></li></NavLink>
        </ul>
        </div>
        </div>

        </div>
        <p className="font-primary-head font-normal text-center text-[14px] sm:text-[14px] md:text-[15px] text-[#6B788E] tracking-wider py-9">Copyright © 2025 Momo Ghar Pvt Ltd. All Rights Reserved.</p>
        </div>
        </>
  );
}

export default Footer;
