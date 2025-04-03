import recpie from "../../assets/recpie.png";
import WatchBtn from "../../Components/WatchBtn"; // Assuming you have this component for the button

function Second() {
  return (
    <div className=" px-4 w-full h-auto pt-6 mb-4 bg-gray-50">
      <div
        className="w-full h-[480px] sm:h-[640px] md:h-[720px] lg:h-[800px] bg-cover bg-center relative flex items-end"
        style={{ backgroundImage: `url(${recpie})` }}
      >
        <div className="absolute bottom-10 left-4 sm:left-8 md:left-16 lg:left-24 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] lg:text-center md:text-left">
          <p className="text-xl  lg:text-left sm:text-2xl md:text-4xl text-white font-bold mb-2">
            Dine With Us
          </p>
          <p className="text-base lg:text-left sm:text-lg md:text-xl text-white mb-3">
            Enjoy our momos in the comfort of your own home with our delivery services
          </p>

          {/* Watch Button Positioned Below Text */}
          <div className="mt-4 sm:mt-6">
            <WatchBtn title="Watch the Video" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Second;