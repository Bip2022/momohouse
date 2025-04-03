import { GoArrowRight } from "react-icons/go";
import { NavLink } from "react-router-dom";

function ServiceBtn({ title }) {
  return (
    <div>
      <NavLink
        to="/services"
        className="bg-green-800 sm:text-[8px] md:text-[14px] flex rounded-2xl justify-center items-center mt-5 h-10 px-5 text-white"
        style={({ isActive }) =>
          isActive
            ? { backgroundColor: "#065f46" } // Highlight active link
            : {}
        }
      >
        {title} <GoArrowRight className="ml-2" />
      </NavLink>
    </div>
  );
}

export default ServiceBtn;
