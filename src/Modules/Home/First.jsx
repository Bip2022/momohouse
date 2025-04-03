import halfcircle from "../../assets/halfcircle.png";
import momoplate from "../../assets/momoplate.png";
import orange from "../../assets/orange.png";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";

function First() {
  const Navigate = useNavigate();
  return (
    <div className=" w-full m-auto px-4 sm:px-4 md:px-0 lg:px-6 py-8 sm:py-12 md:py-0 lg:py-0  xl:py-0 overflow-x-hidden">
      <div className="flex flex-col md:flex-row justify-around gap-5">
        {/* Left Section */}
        <div className=" relative h-auto mb-6 md:mb-0 md:pl-4 md:pt-20 xl:pl-14 xl:py-24 ">
          <h6 className="font-primary-head font-normal text-[#6B788E] text-[16px] tracking-[2px] uppercase">
            Restaurant
          </h6>
          <h2 className="text-[35px] sm:text-[35px] md:text-[45px] text-[#000000] font-primary-head font-bold mt-6">
            The
            <span
              style={{
                backgroundImage: `url(${orange})`,
                backgroundSize: "194px",
              }}
              className="absolute inline-block w-52 h-28 text-center bg-center bg-contain bg-no-repeat top-6 sm:top-6 md:top-[106px] xl:top-[123px]"
            >
              <h2 className="text-[40px] md:text-[51px] text-white pt-5 sm:pt-5 md:pt-4">#one</h2>
            </span>
          </h2>
          <h3 className="text-[45px]  text-[#000000] font-primary-head font-bold flex flex-wrap md:flex-nowrap">
            Momo <span className="text-[#D95103] ml-2">Restaurant</span>
          </h3>
          <p className="text-[16px] md:text-[18px] font-primary-head font-bold text-[#252D43] tracking-[1px] mt-4">
            More than <span className="text-[#D95103] text-[20px] md:text-[25px] font-bold">20+ Varieties</span> of momo available for you
          </p>
          <Button title="Explore Food Menu" />
        </div>

        {/* Right Section */}
        <div className="overflow-hidden relative flex justify-center md:justify-end items-center xl:items-center xl:py-24">
          <img
            src={momoplate}
            alt="Momo Image"
            className="max-w-full h-auto md:mr-16 lg:w-[75%] 2xl:mr-24 md:w-[75%] 2xl:w-[50%] z-40"
          />
          <img
            src={halfcircle}
            alt="Half Circle Background"
            className="absolute h-[214px] -right-0 md:top-[-33px] top-[-7px] lg:top-[-35px] xl:top-[-70px] 2xl:top-[-180px] sm:h-[420px] md:h-[450px] md:-right-[25px] lg:right-0 xl:h-[682px] "
          />
        </div>
      </div>
    </div>
  );
}

export default First;