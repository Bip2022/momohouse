import privat from "../../assets/privacylogo.png";
import party from "../../assets/service/party.png";
import qr from "../../assets/QR.png"; // Adjusted path
import categring from "../../assets/categring.png";

function Third() {
  return (
    <>
      {/* First Section: Private Party */}
      <div className="mt-10 px-8 ml-2 mr-2 py-8 text-gray-700 drop-shadow-md md:px-32 flex flex-col md:flex-row">
        {/* Left Side: Text and QR Code */}
        <div className="w-full md:w-[50%]">
          <img src={privat} alt="Privacy Logo" className="w-[15%]" />
          <h1 className="font-sans font-bold text-[37px] tracking-wide text-[#000000] mt-6">
            Private Party
          </h1>
          <p className="font-sans font-normal text-[20px] text-[#777676] tracking-wide leading-[37px] w-[80%] mt-6">
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.
          </p>

          <div className="shadow-lg rounded-lg mr-24 ml-10 mt-10 flex items-center">
            <div>
              <h2 className="font-sans font-bold text-[20px] text-[#0C6967]">
                Scan the QR code
              </h2>
              <p className="font-sans font-normal text-[16px] text-[#777676] mt-2">
                You can also check about the service
              </p>
            </div>
            <img src={qr} alt="QR Code" className="w-[120px] h-[110px] ml-24" />
          </div>
        </div>

        {/* Right Side: Party Image */}
        <div className="w-full md:w-[50%] flex justify-center items-center">
          <img src={party} alt="Party Image" className="ml-5 w-[552px] h-[448px] object-cover rounded-xl" />
        </div>
      </div>

      {/* Second Section: Categring */}
      <div className="mt-10 px-8 ml-2 mr-2 py-8 text-gray-700 drop-shadow-md md:px-32 flex flex-col md:flex-row-reverse">
        {/* Left Side: Categring Text and QR Code */}
        <div className="w-full md:w-[50%]">
          <img src={categring} alt="Categring Logo" className="w-[15%]" />
          <h1 className="font-sans font-bold text-[37px] tracking-wide text-[#000000] mt-6">
            Categring
          </h1>
          <p className="font-sans font-normal text-[20px] text-[#777676] tracking-wide leading-[37px] w-[80%] mt-6">
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.
          </p>

          <div className="shadow-md rounded-lg mr-24 ml-10 mt-10 flex items-center">
            <div>
              <h2 className="font-sans font-bold text-[20px] text-[#0C6967]">
                Scan the QR code
              </h2>
              <p className="font-sans font-normal text-[16px] text-[#777676] mt-2">
                You can also check about the service
              </p>
            </div>
            <img src={qr} alt="QR Code" className="w-[120px] h-[110px] ml-24" />
          </div>
        </div>

        {/* Right Side: Party Image */}
        <div className="w-full md:w-[50%] flex justify-center items-center">
          <img src={party} alt="Party Image" className="ml-5 w-[552px] h-[448px] object-cover rounded-xl" />
        </div>
      </div>
    </>
  );
}

export default Third;
