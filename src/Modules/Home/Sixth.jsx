import girl from "../../assets/girl.png";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";

function Sixth() {
  return (
    <div className="  max-w-[1440px] mx-auto px-4 flex items-center justify-between mt-20">
      {/* Left Section */}
      <div className="max-w-lg space-y-4">
        <h3
          className="text-orange-500"
          style={{
            fontFamily: "Proxima Nova, sans-serif",
            fontWeight: 700,
            fontSize: "39px",
            lineHeight: "46.8px",
          }}
        >
          <span className="text-black">200+</span> <span className="text-orange-500">Happy Customers</span>
        </h3>
        <p
          className="text-base text-gray-600"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "38.4px",
            fontStyle: "italic",
          }}
        >
          “Only the best momo you can find in the market. Different varieties of
          momo to choose from. Will be visiting again soon”
        </p>
        <h4
          style={{
            fontFamily: "Proxima Nova, sans-serif",
            fontWeight: 700,
            fontSize: "31px",
            lineHeight: "37.2px",
          }}
        >
          Livia Dias
        </h4>
        <div className="flex space-x-4">
          {/* Left Arrow Button */}
          <button className="bg-white text-black border-2 border-gray-400 rounded-full p-3 shadow-lg">
            <FiArrowLeft />
          </button>
          {/* Right Arrow Button */}
          <button className="bg-white text-black border-2 border-gray-400 rounded-full p-3 shadow-lg">
            <FiArrowRight />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div>
        <img
          src={girl}
          alt="Happy Customer"
          className="object-cover"
          style={{ width: "456px", height: "576px" }}
        />
      </div>
    </div>
  );
}

export default Sixth;
