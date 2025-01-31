import orange from "../../assets/orange.png";
import momoplate from "../../assets/momoplate.png";
import halfcircle from "../../assets/halfcircle.png";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";

function First() {
  const Navigate = useNavigate();
  return (
    <div className="flex flex-nowrap text-black md:px-16 lg:px-32 drop-shadow-md">
      {/* Left Section */}
      <div className="pt-[120px] w-1/2">
        <p className="text-gray-500 font-semibold">RESTAURANT</p>
        <h1 className="text-7xl font-bold leading-light">
          The{" "}
          <span
            className="relative inline-block text-white"
            style={{
              backgroundImage: `url(${orange})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              padding: "0.5rem 2rem",
            }}
          >
            #One
          </span>
          <span className="block">
            Momo <span className="text-orange-500">Restaurant</span>
          </span>

        </h1>
        <p className="text-gray-700 text-lg">
          More than <span className="text-orange-500 font-semibold">20+ Varieties</span>{" "}
          of momo available for you
        </p>
        <Button title="Explore Food Menu" />
      </div>

      {/* Right Section */}

      <div className="w-1/2 p-32 h-[650px] overflow-hidden relative flex  justify-end left-32">
        <img
          src={momoplate}
          alt=""
          className=" w-7/12 flex flex-norap absolute z-10 top-[120px] right-40"
        />
        <img
          src={halfcircle}
          alt=""
          className="flex flex-norap w-6/12 right-1 h-[720px] absolute bottom-16"
        />
      </div>
    </div>
  );
}

export default First;
