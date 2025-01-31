import React from 'react';
import box from "../../assets/box.png";
import boy from "../../assets/boy.png";
import Button from '../../Components/Button';

function Second() {
  return (
    <div className="flex items-center justify-between px-4 py-4 text-black md:px-16 lg:px-32 drop-shadow-md">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start mb-6 lg:mb-0">
        <div
          className="relative inline-block w-[250px] lg:w-[350px] xl:w-[400px] h-[350px] lg:h-[450px] xl:h-[500px] flex-shrink-0"
          style={{
            backgroundImage: `url(${box})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <img
            src={boy}
            alt="Customer image"
            className="absolute top-[-60px] left-[48%] transform -translate-x-1/2 w-[150px] lg:w-[300px] xl:w-[350px] h-auto object-contain"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left px-4 lg:px-10">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black">
          Why Customers <span className="text-orange-500">Love Us</span>
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Sed diam dolor vivamus nibh
          fermentum vulputate tortor. Egestas facilisi luctus turpis arcu
          dignissim. Amet neque enim etiam purus id. Tortor sit orci blandit
          cursus turpis.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button title="Explore Our Story" />
        </div>
      </div>
    </div>
  );
}

export default Second;