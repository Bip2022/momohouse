import recpie from "../../assets/recpie.png";
import WatchBtn from "../../Components/WatchBtn"; // Assuming you have this component for the button

function Second() {
  return (
    <div className=" w-full h-auto pt-6 mb-4 bg-gray-50">
      <div
        className=" w-full h-[640px] sm:h-[720px] lg:h-[800px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${recpie})` }}
      >
        <div className="absolute top-[500px] left-0 w-full px-24">
          <p className="text-2xl text-white sm:text-4xl font-bold mb-2">Dine With Us</p>
          <p className="text-lg text-white sm:text-xl mb-3">Enjoy our momos in the comfort of your own home with our delivery services</p>

          {/* Watch Button Positioned Below Text */}
          <div className="mt-6">
            <WatchBtn title="Watch the Video" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Second;
