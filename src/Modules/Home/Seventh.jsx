import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Seventh() {
  const [name, setName] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const formHandle = (e) => {
    e.preventDefault();
    console.log({ name, last, email, phone });
  };

  return (
    <div className="w-[100%] m-auto px-4 py-7 sm:px-4 md:px-14 sm:py-7 md:py-14 ">
      {/* Left Side (Map) */}
      <h2 className="font-primary-head font-bold text-[29px] md:text-[39px] text-center tracking-wide">
        Get <span className="text-[#D95103]">In Touch</span>
      </h2>
      <p className="font-primary-head font-semibold text-[19px]  sm:text-[19px] md:text-[25px] text-[#0C6967] text-center tracking-wide">
        Our Friendly team would love to hear from you
      </p>

      <div className="mt-14 flex flex-col lg:flex-row justify-between shadow-lg p-6 md:p-10 rounded-lg gap-10">
        {/* Contact Details Section */}
        <div className="bg-[#0C6967] p-6 md:p-9 rounded-lg w-full lg:w-[35%] text-white font-primary-head">
          {/* Address */}
          <div>
            <div className="flex items-start">
              <CiLocationOn size={25} />
              <h5 className="font-medium text-[19px] ml-3">Our Address:</h5>
            </div>
            <p className="text-[17px] md:text-[20px] italic font-light tracking-wide my-6">
              New Baneshwor, Kathmandu, Bagmati, Nepal
            </p>
          </div>

          {/* Contact Numbers */}
          <div className="mt-10">
            <div className="flex items-start">
              <IoCallOutline size={25} />
              <h5 className="font-medium text-[19px] ml-3">Our Contacts:</h5>
            </div>
            <div className="flex flex-col md:flex-row justify-between mt-5">
              <div className="w-full md:w-1/2 font-medium text-[19px]">
                <h3>Mobile</h3>
                <p className="mt-3 italic text-[17px]">984 2567 219</p>
                <p className="mt-3 italic text-[17px]">982 6756 267</p>
              </div>
              <div className="w-full md:w-1/2 font-medium text-[19px]">
                <h3 className="mt-4 md:mt-0">Landline</h3>
                <p className="mt-3 italic text-[17px]">01 4738972</p>
              </div>
            </div>
          </div>

          {/* Service Time */}
          <div className="mt-10">
            <div className="flex items-start">
              <IoMdTime size={25} />
              <h5 className="font-medium text-[19px] ml-3">Our Service Time:</h5>
            </div>
            <div className="flex flex-col md:flex-row justify-between mt-5">
              <div className="w-full md:w-1/2 font-medium text-[19px]">
                <h3 className="uppercase text-[17px]">Mon - Fri</h3>
                <p className="mt-3 italic text-[17px]">10 AM - 8 PM</p>
              </div>
              <div className="w-full md:w-1/2 font-medium text-[19px]">
                <h3 className="uppercase mt-4 md:mt-0 text-[17px]">Sat - Sun</h3>
                <p className="mt-3 italic text-[17px]">Closed</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="my-10">
            <h2 className="text-[16px] md:text-[20px] text-white font-primary-head font-normal">
              Get in Touch at Social Media
            </h2>
            <div className="flex gap-4 mt-5">
              <NavLink to="#" target="_"><FaFacebookF size={35} /></NavLink>
              <NavLink to="#" target="_"><FaInstagram size={35} /></NavLink>
              <NavLink to="#" target="_"><FaTiktok size={37} /></NavLink>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full lg:w-[65%]">
        <form onSubmit={formHandle} className="flex flex-col gap-4 mt-6">
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-col xl:flex-col 2xl:flex-col gap-4 sm:gap-8">
            <div className="w-full">
              <label htmlFor='name' className="font-medium text-[16px] text-[#5c5c5c]">First Name <br/>
                <input 
                  onChange={(e) => setName(e.target.value)}
                  type='text' id="name" placeholder='Enter Your First Name' 
                  className="border border-gray-300 focus:outline-0 p-3 w-full rounded mt-2 placeholder:text-[15px]"/>
              </label>
            </div>
            <div className="w-full">
              <label htmlFor='last' className="font-medium text-[16px] text-[#5c5c5c]">Last Name <br/>
                <input 
                  onChange={(e) => setLast(e.target.value)}
                  type='text' id="last" placeholder='Enter Your Last Name'
                  className="border border-gray-300 focus:outline-0 p-3 w-full rounded mt-2 placeholder:text-[15px]"/>
              </label>
            </div>
          </div>

          <div>
            <p className="text-sm sm:text-base">Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              value={email}
              className="w-full p-2 border border-gray-300 rounded text-sm sm:text-base"
            />
          </div>

          <div>
            <p className="text-sm sm:text-base">What can we do for you?</p>
            <select className="w-full p-2 border border-gray-300 rounded text-sm sm:text-base">
              <option value="">Choose</option>
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>

          <div>
            <p className="text-sm sm:text-base">Phone Number</p>
            <div className="flex items-center">
              <span className="p-2 border-l border-t border-b bg-gray-100 text-gray-600 rounded-l text-sm sm:text-base">
                🇳🇵 +977
              </span>
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                placeholder="Phone Number"
                value={phone}
                className="flex-1 p-2 border border-gray-300 rounded-r text-sm sm:text-base"
              />
            </div>
          </div>

          <div>
            <p className="text-sm sm:text-base">Message</p>
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded text-sm sm:text-base"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full sm:w-[256px] h-[50px] sm:h-[59px] bg-[#ff6600] text-white font-bold rounded-full mt-4 flex justify-center items-center gap-2 text-sm sm:text-base"
          >
            Send Message
          </button>
        </form>
        </div>
      </div>
    </div>
  );
}

export default Seventh;
