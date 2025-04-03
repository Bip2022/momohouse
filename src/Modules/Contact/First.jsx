import "@fontsource/allura"; // Importing the font
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";

const ContactCard = ({ icon: Icon, title, content }) => (
    <div className="w-full lg:w-[30%] p-5 shadow-[0px_7px_25px_0px_rgba(0,_0,_0,_0.1)] rounded-[15px] mb-5 lg:mb-0">
        <div className="flex items-center">
            <Icon size={21} color="#D95103" aria-label={title} />
            <p className="font-primary-head font-semibold text-[16px] tracking-wide ml-5">{title}</p>
        </div>
        <div className="mt-8">{content}</div>
    </div>
);

function First() {
    return (
        <div className="w-full flex justify-center items-start py-10 px-4 sm:px-6 md:px-10">
            <div className="max-w-5xl w-full">
                {/* Heading Section */}
                <div className="text-center mb-6">
                    <h1 className="text-[28px] sm:text-[32px] md:text-[40px] font-allura text-teal-700 mb-4 leading-tight">
                        Our Contact
                    </h1>
                    <p className="text-[14px] sm:text-[16px] md:text-[18px] font-proxima font-light text-gray-600 mb-4 leading-relaxed tracking-wide">
                        GET IN TOUCH
                    </p>
                    <p className="text-orange-600 text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] font-proxima font-semibold leading-tight">
                        Our Friendly Team <span className="text-gray-600">would love to hear from you</span>
                    </p>
                </div>

                {/* Contact Information */}
                <div className="flex flex-col lg:flex-row justify-between align-middle gap-4 mt-10">
                    <ContactCard 
                        icon={FaLocationDot} 
                        title="Location" 
                        content={<p className="font-primary-head font-medium text-[16px] leading-[27px]">New Banaishwor, Kathmandu, Nepal</p>} 
                    />

                    <ContactCard 
                        icon={FaPhoneVolume} 
                        title="Phone" 
                        content={
                            <>
                                <div className="flex justify-between mt-7">
                                    <h2 className="font-primary-head font-semibold text-[16px] text-[#498E8D]">Mobile:</h2>
                                    <div>
                                        <h3 className="font-primary-head font-semibold text-[16px]">0977 984 2567 219</h3>
                                        <h3 className="font-primary-head font-semibold text-[16px]">0977 982 6756 267</h3>
                                    </div>
                                </div>
                                <div className="flex justify-between mt-7">
                                    <h2 className="font-primary-head font-semibold text-[16px] text-[#498E8D]">Tel:</h2>
                                    <div>
                                        <h3 className="font-primary-head font-semibold text-[16px]">01 4700000</h3>
                                        <h3 className="font-primary-head font-semibold text-[16px]">01 4700000</h3>
                                    </div>
                                </div>
                            </>
                        } 
                    />

                    <ContactCard 
                        icon={IoTime} 
                        title="Service Time" 
                        content={
                            <>
                                <div className="flex justify-between mt-7">
                                    <h2 className="font-primary-head font-semibold text-[16px] text-[#498E8D]">MON - FRI:</h2>
                                    <h3 className="font-primary-head font-semibold text-[16px]">8 AM - 8 PM</h3>
                                </div>
                                <div className="flex justify-between mt-7">
                                    <h2 className="font-primary-head font-semibold text-[16px] text-[#498E8D]">SAT - SUN:</h2>
                                    <h3 className="font-primary-head font-semibold text-[16px]">CLOSED</h3>
                                </div>
                            </>
                        } 
                    />
                </div>
            </div>
        </div>
    );
}

export default First;