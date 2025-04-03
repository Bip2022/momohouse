import React from "react";
import box from "../../assets/box.png";
import boy from "../../assets/boy.png";
import Button from "../../Components/Button";

function Second() {
  return (
    <div className=" flex flex-col md:flex-row items-center justify-between px-4 py-6 sm:py-10 md:px-14 lg:px-32 drop-shadow-md mt-4 sm:mt-24 lg:mt-10">

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center lg:justify-start mb-2 md:mb-0">
        <div
          className="relative inline-block w-[235px] sm:w-[350px] lg:w-[350px] xl:w-[400px] h-[350px] lg:h-[500px] xl:h-[520px] flex-shrink-0"
          style={{
            backgroundImage: `url(${box})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <img
            src={boy}
            alt="Customer"
            className="absolute lg:top-[-42px] sm:top-[-70px] xl:top-[-50px] left-1/2 transform -translate-x-1/2 w-[200px] sm:w-[280px] lg:w-[320px] xl:w-[350px] h-auto object-contain"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left px-4 ">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-black">
          Why Customers <span className="text-orange-500">Love Us</span>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
          Lorem ipsum dolor sit amet consectetur. Sed diam dolor vivamus nibh
          fermentum vulputate tortor. Egestas facilisi luctus turpis arcu
          dignissim. Amet neque enim etiam purus id. Tortor sit orci blandit
          cursus turpis.
        </p>
        <div className="flex justify-center md:justify-start">
          <Button title="Explore Our Story" />
        </div>
      </div>

    </div>
  );
}

export default Second;
