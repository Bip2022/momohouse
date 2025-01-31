import man from "../../assets/man.png";
import WatchBtn from "../../Components/WatchBtn";

function Fourth() {
  return (
    <>
      <div className="  pt-20 text-center">
        <h1 className="text-3xl font-bold mb-4">
          <span className="text-orange-500">We Offer People</span> The Service They Want
        </h1>
      </div>
      <div className=" w-full h-auto pt-6 mb-4"> {/* Adjusted margin-bottom */}
        <div
          className="w-full h-full sm:h-[640px] bg-cover bg-center"
          style={{ backgroundImage: `url(${man})` }}
        >
          <div className="flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50 text-white text-center px-4 sm:px-6 py-4 sm:py-10">
            <p className="text-2xl sm:text-4xl font-bold mb-2">Process behind the making</p>
            <p className="text-lg sm:text-xl mb-3">See how only chefs cook only the best momos</p>
            {/* Watch Button Positioned Below Text */}
            <div className="mt-6 sm:mt-10">
              <div className="px-6 py-3">
                <WatchBtn title="Watch the Video" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fourth;