import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function Button({ title }) {
  const Navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          Navigate("/menu");
        }}
        className="bg-green-800 flex  md:mt-8 sm:text-[12px] md:text-[14px] text-[8px] 
                  rounded-2xl justify-center items-center sm:mt-8  mt-5 h-10 px-5 text-white "
      >
        {title} <GoArrowRight className="ml-2" />
      </button>
    </div>
  );
}

export default Button;