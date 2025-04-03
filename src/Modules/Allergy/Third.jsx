import line from "../../assets/allergy/line.png";
import "@fontsource/chela-one";
import Qr from "../../Components/Qr";

function Third() {
  return (
    <>
      <div className=" lg:mt-10 relative w-full  flex flex-col items-center justify-center px-4 sm:px-6 py-18  mt-8 sm:py-10 md:py-12 lg:py-16">
        {/* Section Title */}
        <h1 className="  relative inline-flex items-center justify-center gap-2 sm:gap-4 mt-6 sm:mt-8 md:mt-10 lg:mt-6 z-10 text-[28px] sm:text-[36px] md:text-[40px] leading-tight">
          <img src={line} alt="decorative line" className="w-16 sm:w-20 md:w-24 h-1" />
          <span className="text-orange-500 font-chela-one">Allergy</span>
          <span className="text-[#101828] font-chela-one">Advice</span>
          <img src={line} alt="decorative line" className="w-16 sm:w-20 md:w-24 h-1" />
        </h1>

        <div className="w-full   mt-4 sm:mt-6 md:mt-8 lg:mt-14 px-4 sm:px-6 md:px-8 xl:px-32">
          {[
            "Lorem ipsum dolor sit amet consectetur. Feugiat lectus sit est blandit in gravida. Nisl facilisis luctus sit porttitor placerat purus tincidunt. Cursus nascetur a mauris odio quis sociis pretium nisl. In viverra diam dis montes orci congue vulputate magna ullamcorper.",
            "Feugiat orci feugiat cursus risus tincidunt. Aliquet nam iaculis bibendum tortor varius sit. Volutpat nunc nisl quisque elit. Ac est ultricies risus et sed.",
            "Augue leo eget ut vitae maecenas ac. Metus massa nunc tristique donec dignissim aenean congue justo et. Parturient elit adipiscing non vitae mattis.",
            "Sed elit ornare senectus dignissim diam dolor sed dictum. Faucibus mauris senectus odio blandit diam nunc. Urna volutpat ut potenti ut mus orci neque sem.",
            "Quam ipsum viverra ac laoreet platea in praesent. Mattis molestie arcu nulla convallis interdum proin dui ut porta. Amet potenti praesent pulvinar scelerisque vitae habitant eget."
          ].map((text, index) => (
            <p key={index} className="font-sans font-inter text-[14px] sm:text-[16px] md:text-[16px]  lg:text-[20px] text-[#414040] tracking-wide leading-[26px] sm:leading-[32px] mb-4 sm:mb-5 md:mb-6 lg:mb-7">
              {text}
            </p>
          ))}
        </div>
      </div>

      {/* QR Section */}
      <div className=" sm:px-6 mt-4 sm:mt-6 md:mt-2 lg:mt-1 flex justify-center">
        <Qr />
      </div>
    </>
  );
}

export default Third;
