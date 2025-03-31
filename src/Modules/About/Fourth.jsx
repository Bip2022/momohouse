import bgbeside from '../../assets/aboutgirlbeside.png';
import girl from '../../assets/aboutgirl.png';
import { RiDoubleQuotesL } from "react-icons/ri";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function Fourth() {
    return (
        <div className=" relative h-[690px] bg-cover bg-no-repeat bg-center flex items-center" style={{ backgroundImage: `url(${bgbeside})` }}>
            {/* Overlay for Dark Effect */}
            <div className="absolute inset-0 bg-black opacity-75 backdrop-filter: blur(30px); backdrop-blur-md "></div>

            {/* Main Content Wrapper */}
            <div className=" relative w-full mx-auto flex justify-between items-center h-full ">
                {/* Left Side Content */}
                <div className="   ml-64  w-[700px] relative z-10 pl-5 ">
                    <RiDoubleQuotesL size={75} color='white' />
                    <p className=" font-sans font-light text-[27px] tracking-wide leading-[47px] text-[#d8d7d7] mt-6">
                        Momo is not just about sustenance, it's about bringing people together and creating memories.
                        At our restaurant, we strive to create a warm and inviting atmosphere where our guests can enjoy
                        delicious momo, great company, and unforgettable experiences.
                    </p>
                    <h2 className=" font-sans font-bold text-[45px] tracking-wide text-[#ffffff] mt-14">Marcus Schleifer</h2>
                    <h3 className="font-sans font-bold text-[31px] tracking-wide text-[#ffffff] mt-0 uppercase">CEO</h3>

                    {/* Arrow Buttons Below CEO */}
                    <div className="flex justify-end gap-4 mt-6">
                        <button className="bg-slate-600 text-white border-2 border-gray-800 rounded-full p-3 shadow-lg hover:bg-slate-700 transition-colors">
                            <FiArrowLeft size={24} />
                        </button>
                        <button className="bg-slate-600 text-white border-2 border-gray-800 rounded-full p-3 shadow-lg hover:bg-slate-700 transition-colors">
                            <FiArrowRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Right Side Image */}
                <div className="  relative  z-10 h-full flex items-center justify-end w-[600px]">
                    <img src={girl} alt="CEO" className="h-full w-auto object-cover rounded-lg shadow-lg " />
                </div>
            </div>
        </div>
    );
}

export default Fourth;
