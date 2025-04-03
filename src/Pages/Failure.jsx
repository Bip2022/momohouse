import { NavLink } from "react-router-dom"
import fail from '../assets/failure.png';

function Failure() {
    return(
        <>
         <div className="py-14 text-center font-primary-head">
            <img src={fail} alt="payment-fail" className="w-[25%] m-auto"/>
            <h2 className="font-bold text-[23px] text-[#F64742] tracking-wider mb-1.5">Payment Fail</h2>
            <p className="font-semibold text-[25px]">Your Payment has Failed. 
                <NavLink to="/payment"><span className="text-[#0C6967] cursor-pointer text-[21px]"> Proceed Again</span> </NavLink> </p>
        </div>
        </>
    );
}
export default Failure;