import "@fontsource/allura"; // Importing the font
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";

function First() {
    return (
        <>
            <div className=" w-full max-h-screen flex justify-center items-start py-16">
                <div className=" w-[1300px] px-4">
                <div className="text-center mb-6">
          <h1 className="text-[40px] sm:text-[48px] md:text-[56px] font-allura text-teal-700 mb-6 leading-[1]">
            Our Contact
          </h1>
          <p className="text-[18px] sm:text-[20px] md:text-[24px] font-proxima font-[300] text-gray-600 mb-6 leading-[1.5] tracking-[0.05em]">
            GET IN TOUCH
          </p>

          <p className="text-orange-600 text-[25px] sm:text-[28px] md:text-[31px] font-proxima font-[600] leading-[1.2]">
            Our Friendly Team <span className="text-gray-600">would love to hear from you</span>
          </p>
        </div>

                    <div className="flex justify-between gap-4 mt-10">
                        <div className="w-[35%] p-5 shadow-[0px_7px_25px_0px_rgba(0,_0,_0,_0.1)] rounded-[15px]">
                            <div className="flex items-center">
                                <FaLocationDot size={21} color="#D95103" />
                                <p className="font-sans font-medium text-[23px] tracking-wide ml-5">Location</p>
                            </div>
                            <p className="font-sans font-medium text-[21px] leading-[27px] mt-8">
                                New Baneshwor-41201,<br />
                                Kathmandu,Bagmati,Nepal
                            </p>
                        </div>

                        <div className="w-[35%] p-5 shadow-[0px_7px_25px_0px_rgba(0,_0,_0,_0.1)] rounded-[15px]">
                            <div className="flex items-center">
                                <FaPhoneVolume size={21} color="#D95103" />
                                <p className="font-sans font-medium text-[23px] tracking-wide ml-5">Phone</p>
                            </div>

                            <div className="flex justify-between mt-7">
                                <h2 className="font-sans font-semibold text-[19px] text-[#498E8D]">Mobile: </h2>
                                <div>
                                    <h3 className="font-sans font-semibold text-[20px]">+9779805689789</h3>
                                    <h3 className="font-sans font-semibold text-[20px]">(+9779841275897)</h3>
                                </div>
                            </div>

                            <div className="flex justify-between mt-7">
                                <h2 className="font-sans font-semibold text-[19px] text-[#498E8D]">Tel: </h2>
                                <div>
                                    <h3 className="font-sans font-semibold text-[20px]">01-4783972</h3>
                                </div>
                            </div>
                        </div>

                        <div className="w-[35%] p-5 shadow-[0px_7px_25px_0px_rgba(0,_0,_0,_0.1)] rounded-[15px]">
                            <div className="flex items-center">
                                <IoTime size={21} color="#D95103" />
                                <p className="font-sans font-medium text-[23px] tracking-wide ml-5">Service Time</p>
                            </div>

                            <div className="flex justify-between mt-7">
                                <h2 className="font-sans font-semibold text-[19px] text-[#498E8D]">MON - FRI: </h2>
                                <div>
                                    <h3 className="font-sans font-semibold text-[20px]">8am-8pm</h3>
                                </div>
                            </div>

                            <div className="flex justify-between mt-7">
                                <h2 className="font-sans font-semibold text-[19px] text-[#498E8D]">SAT - SUN: </h2>
                                <div>
                                    <h3 className="font-sans font-semibold text-[20px]">Closed</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default First;
