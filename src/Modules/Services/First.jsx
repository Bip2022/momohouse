import shafe from "../../assets/shafe.png";
import "@fontsource/allura"; // Font loading

function First() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24 py-8 md:py-16 bg-gray-50">
      <div className="text-left w-full md:w-1/2 mb-6 md:mb-0">
        <h1
          className="text-[30px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-allura text-teal-700 mb-4 sm:mb-6"
        >
          Our Services
        </h1>
        <p className="text-[14px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-proxima font-[300] text-gray-600 mb-4 sm:mb-6 leading-[1.5] tracking-wide">
          KNOWING OUR CUSTOMERS' NEEDS
        </p>

        <p className="text-[20px] sm:text-[25px] md:text-[28px] lg:text-[31px] font-proxima font-[700] text-orange-500 mb-2 sm:mb-4 leading-[1.4]">
          We’re more than just momos.
        </p>

        <p className="text-[20px] sm:text-[25px] md:text-[28px] lg:text-[31px] font-proxima font-[700] text-gray-800 mb-2 sm:mb-4 leading-[1.4]">
          We’re a full-service dining experience.
        </p>
      </div>

      <div className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] py-4 flex justify-center items-center">
        <img
          src={shafe}
          alt="Chef Image"
          className="w-[90%] sm:w-[92%] md:w-full h-auto object-cover rounded-lg "
        />
      </div>
    </section>
  );
}

export default First;