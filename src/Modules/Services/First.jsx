import shafe from "../../assets/shafe.png";
import "@fontsource/allura"; // This import is fine to keep for font loading

function First() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center sm:px-12 md:px-16 lg:px-24 md:py-16 bg-gray-50">
      <div className="px-4 text-left md:w-1/2 mb-2 md:mb-0">
        <h1
          className="text-[40px] sm:text-[48px] md:text-[56px] font-allura text-teal-700 mb-6"
          style={{
            width: '245px',
            height: '67px',
          }}
        >
          Our Services
        </h1>
        <p className="text-[18px] sm:text-[20px] md:text-[24px] font-proxima font-[300] text-gray-600 mb-6 leading-[24px] tracking-[0.12em]">
          KNOWING OUR CUSTOMERS NEEDS
        </p>

        {/* Updated paragraph for "We’re more than just momos." */}
        <p className="text-[25px] sm:text-[28px] md:text-[31px] font-proxima font-[700] text-orange-500 mb-4 leading-[37.2px]">
          We’re more than just momos.
        </p>

        {/* Updated paragraph for "We’re a full-service dining experience." */}
        <p className="text-[25px] sm:text-[28px] md:text-[31px] font-proxima font-[700] text-gray-800 mb-4 leading-[37.2px]">
          We’re a full-service dining experience.
        </p>
      </div>

      <div className="  py-4 flex justify-end items-center" style={{ width: '500px', height: '520px' }}>
        {/* Enlarged shafe image */}
        <img
          src={shafe}
          alt="Chef Image"
          className="w-full h-full object-cover"
          style={{ width: '92%', height: '100%' }}
        />
      </div>
    </section>
  );
}

export default First;
