import shafeg from "../../assets/shafegirl.png";
import "@fontsource/allura";

function First() {
  return (
    <section className="  px-4 flex flex-col md:flex-row justify-between items-center  sm:px-6 md:px-12 lg:px-24 py-8 md:py-16 bg-gray-50">
      <div className=" w-full md:w-1/2 mb-6 md:mb-0 text-left md:text-left">
        <h1 className="text-[30px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-allura text-teal-700 mb-4 lg:mb-6">
          About Us
        </h1>
        <p className="text-[14px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-proxima font-[300] text-gray-600 mb-4 leading-[1.5] tracking-wide">
          WE PRIDE OURSELF ON
        </p>

        <p className="text-orange-500 text-[18px] sm:text-[22px] md:text-[25px] lg:text-[28px] font-proxima font-[700]   md:px-0 leading-[1.4]">
          Our authentic momo recipes
        </p>

        <p className="text-gray-600 text-[20px] sm:text-[22px] md:text-[25px] lg:text-[28px] font-proxima font-[700] mb-4  md:px-0 leading-[1.4]">
          passed down through generations
        </p>
      </div>

      <div className=" w-full md:w-1/2 flex justify-center items-center">
        <img
          src={shafeg}
          alt="Chef Image"
          className="w-[90%] max-w-[400px] sm:max-w-[450px] md:max-w-[500px] h-auto object-cover"
        />
      </div>
    </section>
  );
}

export default First;