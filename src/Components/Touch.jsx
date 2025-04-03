import { useNavigate } from "react-router-dom";

function Touch({ title }) {
  const Navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center m-auto">
        <button onClick={() => {
          Navigate("/contact");
        }} className="bg-[#0C6967] text-white px-14 py-4 flex items-center gap-2 
        rounded-[45px] hover:bg-[#0C6967] text-[20px] font-Poppins tracking-[1px] lg:mt-16 cursor-pointer">
          {title}
        </button>
      </div>
    </>
  );
}
export default Touch;