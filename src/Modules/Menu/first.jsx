import "@fontsource/allura"; // Importing the Allura font
import Qr from "../../Components/Qr"; // Ensure the correct path

function First() {
  return (
    <>
      <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 lg:px-14 py-6 sm:py-8 md:py-10 lg:py-12 font-primary-head">
        <div className="text-center">
          <h2 className="text-[32px] texxt-left sm:text-[39px] md:text-[39px] lg:text-[56px] text-[#0C6967] font-allura mb-4">
            Our Menu
          </h2>
          <h3 className="text-[22px] sm:text-[27px] md:text-[27px] lg:text-[31px] text-[#D95103] font-semibold">
            Our menu is more than just momos,
          </h3>
          <h3 className="text-[22px] sm:text-[27px] md:text-[27px] lg:text-[31px] font-semibold mb-7">
            with a variety of dishes to cater to all tastes and preferences.
          </h3>
        </div>
      </div>

      {/* Ensuring proper alignment and spacing for the QR section across all devices */}
      <div className="px-4 sm:px-6 -mt-10 sm:-mt-12 md:-mt-16 flex justify-center">
        <Qr />
      </div>
    </>
  );
}

export default First;