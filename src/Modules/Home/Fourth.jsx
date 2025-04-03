import man from "../../assets/man.png";
import WatchBtn from "../../Components/WatchBtn";

function Fourth() {
  return (
    <>
      <div className="  pt-10  lg:pt-20 text-center">
        <h1 className="lg:text-3xl px-4 font-bold mb-4">
          <span className="text-orange-500">We Offer People</span> The Service They Want
        </h1>
      </div>
      <div className=" px-4 w-full h-full  lg:pt-6 mb-4"> {/* Adjusted margin-bottom */}
        <div
          className="w-full h-[200px]  mt-10 sm:mt-10  sm:h-[400px] lg:h-[500px] xl:h-[600px]  bg-cover bg-center"
          style={{ backgroundImage: `url(${man})` }}
        >
          <div className="flex flex-col items-center justify-center lg:w-full  lg:h-full bg-black h-full bg-opacity-50 text-white text-center px-4 sm:px-6 py-4 sm:py-10">
            <p className="lg:text-2xl xl:text-3xl  sm:text-4xl font-bold lg:mb-2">Process behind the making</p>
            <p className="lg:text-lg text-sm sm:text-xl xl:text-2xl lg:mb-3 ">See how only chefs cook only the best momos</p>
            {/* Watch Button Positioned Below Text */}
            <div className="lg:mt-6  sm:mt-10">
              <div className=" lg:px-6 lg:py-3">
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