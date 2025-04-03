import { NavLink } from "react-router-dom";
import fail from "../assets/failure.jpg";

function Failure() {
  return (
    <div className="py-14 text-center font-primary-head">
      <img
        src={fail}
        alt="payment-fail"
        className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 mx-auto h-auto"
      />
      <h2 className="font-bold text-[23px] text-[#F64742] tracking-wider mb-1.5">
        Payment Failed
      </h2>
      <p className="font-semibold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]">
        Your payment has failed.{" "}
        <NavLink to="/payment">
          <span className="text-[#0C6967] cursor-pointer text-[18px] sm:text-[20px] md:text-[22px] lg:text-[23px]">
            Proceed Again
          </span>
        </NavLink>
      </p>
    </div>
  );
}

export default Failure;
