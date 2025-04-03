import shgcook from "../../assets/shgcook.png";
import WatchBtn from "../../Components/WatchBtn"; // Assuming you have this component

function Second() {
  return (
    <div className="px-4 sm:px-6 w-full h-auto bg-gray-50 pt-6 mb-4">
      {/* Background Image Container */}
      <div
        className="w-full min-h-[450px] sm:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px] 2xl:min-h-[900px] bg-cover bg-center bg-no-repeat flex items-end relative"
        style={{ backgroundImage: `url(${shgcook})` }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Content Box - Adjusted for large screens */}
        <div className="  absolute bottom-10 left-0 w-full px-4 sm:px-10 md:px-12 lg:px-10  xl:px-20 2xl:px-22 flex flex-col items-start z-10">
          <p className="text-lg sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white  ">
            Process Behind the Making
          </p>
          <p className="text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white sm:max-w-[70%] md:max-w-[50%] lg:max-w-[45%] mt-1 sm:mt-2 lg:mt-4">
            See how we make momo that you love, using only the best ingredients.
          </p>

          {/* Watch Button Positioned Below with larger size on big screens */}
          <div className="mt-4 sm:mt-1 lg:mt-6">
            <WatchBtn title="Watch the Video" className="text-sm sm:text-base lg:text-lg xl:text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Second;