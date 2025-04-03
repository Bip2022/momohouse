import shafe from "../../assets/shafe.png";
import "@fontsource/allura"; // Font loading

function First() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-8 md:py-12 bg-gray-50">
      <div className="text-left md:w-1/2 mb-6 md:mb-0 px-4">
        <h1 className="text-[32px] xl:text-[52px] md:text-[36px] font-allura text-teal-700 mb-4">
          Allergy Advice
        </h1>
        <p className="text-[16px] md:text-[18px] font-proxima font-light text-gray-600 mb-4 leading-[24px] tracking-wide">
          AT OUR RESTAURANT
        </p>
        <p className="text-gray-800 text-[20px] md:text-[22px] font-proxima font-semibold leading-[32px] md:leading-[34px] lg:whitespace-pre-line">
          We use the freshest and highest quality ingredients in all our dishes,<span className="text-orange-600 ">and offer transparency in our ingredient labeling.</span> 
        </p>
      </div>

      <div className="w-full max-w-xs md:max-w-sm flex justify-center items-center py-4">
        <img
          src={shafe}
          alt="Chef Image"
          className="w-[90%] h-auto object-cover rounded-lg"
        />
      </div>
    </section>
  );
}

export default First;