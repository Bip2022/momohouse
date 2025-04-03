import qr from "../assets/QR.png";
import { MdOutlinePhoneIphone } from "react-icons/md";

function Qr() {
  return (
    <div className="w-full flex justify-center items-center px-4   md:py-2">
      <div className="w-full max-w-[1128px] bg-[#F5F6F7] flex flex-col items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-lg shadow-md">
        <h3 className="text-[#0C6967] font-bold text-[1.2rem] sm:text-[1.5rem] text-center">
          Scan the QR code
        </h3>
        <p className="text-[#444] text-[0.8rem] sm:text-[0.9rem] text-center leading-[1.4] max-w-[280px]">
          You can also check the allergy advices using your phone as well
        </p>
        <div className="p-2 sm:p-3 bg-white rounded-xl shadow-md">
          <img
            src={qr}
            alt="QR Code"
            className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] border-4 border-black rounded-lg"
          />
        </div>
        <div className="flex items-center gap-1 sm:gap-2 font-bold text-[1.2rem] sm:text-[1.4rem]">
          <span className="text-[#C45A29]">SCAN</span> ME!
          <MdOutlinePhoneIphone className="text-[1.4rem] sm:text-[1.6rem]" />
        </div>
      </div>
    </div>
  );
}

export default Qr;