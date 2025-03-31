import qr from "../assets/QR.png";
import { MdOutlinePhoneIphone } from "react-icons/md";

function Qr() {
  return (
    <div className=" w-auto h-[400px] flex justify-center items-center ">
      <div className=" w-[90%] bg-[#F5F6F7]  max-w-[1128px] h-[442px] flex flex-col items-center gap-6 p-6 rounded-lg ">
        <h3 className="text-[#0C6967] font-bold text-[1.5rem]">Scan the QR code</h3>
        <p className="text-[#444] text-[0.9rem] text-center leading-[1.4] max-w-[280px]">
          You can also check the allergy advices using your phone as well
        </p>
        <div className="p-3 bg-white rounded-xl shadow-md">
          <img src={qr} alt="QR Code" className="w-[160px] h-[160px] border-4 border-black rounded-lg" />
        </div>
        <div className="flex items-center gap-2 font-bold text-[1.4rem]">
          <span className="text-[#C45A29]">SCAN</span> ME!
          <MdOutlinePhoneIphone className="text-[1.6rem]" />
        </div>
      </div>
    </div>
  );
}

export default Qr;
