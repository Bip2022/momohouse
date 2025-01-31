import shgcook from "../../assets/shgcook.png";
import WatchBtn from "../../Components/WatchBtn"; // Assuming you have this component for the button

function Second() {
  return (
    <div className=" w-full h-auto pt-6 mb-4 bg-gray-50">
      <div
        className=" w-full h-[640px] sm:h-[720px] lg:h-[800px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${shgcook})` }}
      >
        <div className="absolute top-[550px] left-0 w-full px-24">
          <p className="text-2xl text-white sm:text-4xl font-bold mb-2">Process Behind the making</p>
          <p className="text-lg text-white sm:text-xl mb-3">See how we make momo that you like from only the best ingredients</p>

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
