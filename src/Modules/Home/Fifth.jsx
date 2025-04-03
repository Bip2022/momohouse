import quality from "../../assets/qualitylogo.png";
import privat from "../../assets/privacylogo.png";
import categring from "../../assets/categring.png";
import ServiceBtn from "../../Components/ServiceBtn";

function Fifth() {
  return (
    <div className="max-w-[100%] mx-auto px-4 mt-10 lg:mt-32">
      {/* Items Section */}
      <div className="flex flex-col sm:flex-col md:flex-row md:justify-between lg:justify-center">
        {/* First Item */}
        <div className="flex flex-col items-center text-center md:w-[32%] lg:w-[360px] mb-6 md:mb-0">
          <img
            src={quality}
            alt="Quality Food"
            className="w-32 h-32 p-2 object-contain mb-4"
          />
          <h1 className="text-xl font-bold mb-2">Quality Food</h1>
          <p className="text-sm w-[280px] sm:w-full h-[52px] overflow-hidden">
            Only the best food with top quality products and ingredients
          </p>
        </div>

        {/* Second Item */}
        <div className="flex flex-col items-center text-center md:w-[32%] lg:w-[360px] mb-6 md:mb-0">
          <img
            src={privat}
            alt="Private Party"
            className="w-32 h-32 p-2 object-contain mb-4"
          />
          <h1 className="text-xl font-bold mb-2">Private Party</h1>
          <p className="text-sm w-[280px] sm:w-full h-[52px] overflow-hidden">
            Get the best food for all your private parties and gatherings
          </p>
        </div>

        {/* Third Item */}
        <div className="flex flex-col items-center text-center md:w-[32%] lg:w-[360px]">
          <img
            src={categring}
            alt="Catering"
            className="w-32 h-32 p-2 object-contain mb-4"
          />
          <h1 className="text-xl font-bold mb-2">Catering</h1>
          <p className="text-sm w-[280px]sm:w-full h-[52px] overflow-hidden">
            Get the best food for all your private parties and gatherings
          </p>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex justify-center items-center md:mt-4 mt-10 lg:mt-16">
        <ServiceBtn title="Express Our Services" />
      </div>
    </div>
  );
}

export default Fifth;