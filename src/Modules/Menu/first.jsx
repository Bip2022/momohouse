import "@fontsource/allura"; // Importing the font
import Qr from "../../Components/Qr";

function First() {
  return (
    <>
      <div className="w-full max-h-screen flex justify-center items-start py-16">
        <div className="w-[1300px] px-4">
          <div className="text-center mb-6">
            <h1 className="text-[40px] sm:text-[48px] md:text-[56px] font-allura text-teal-700 mb-6 leading-[1]">
              Our Menu
            </h1>

            <p className="text-orange-700 text-[25px] sm:text-[28px] md:text-[31px] font-proxima font-[500] leading-[1.2]">
              Our menu is more than just momos,
            </p>
            <p className="text-gray-700 text-[25px] sm:text-[28px] md:text-[31px] font-proxima font-[500] leading-[1.2]">
              with a variety of dishes to cater to all tastes and preferences.
            </p>
          </div>
        </div>
      </div>

      {/* Adjusting margin to bring the QR section up */}
      <div className="-mt-16"> {/* Negative margin applied here */}
        <Qr />
      </div>
    </>
  );
}

export default First;
