import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { cartContext } from "../Context/CartProvider";
import momo from '../assets/momo.png';
import { FaFacebookF, FaTiktok, FaInstagram, FaCartArrowDown, FaRegUserCircle } from "react-icons/fa";

function NavBar() {
  const { user, isAuthenticated, logout } = useAuth0();
  const { state } = useContext(cartContext);
  const totalItems = state.cartItems.reduce((acc, item) => acc + item.qty, 0);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const handleLogout = () => {
    logout({ 
      logoutParams: {
        returnTo: window.location.origin
      }
    });
    closeMenu();
  };

  return (
    <div className="border-b-2 border-gray-500 overflow-x-hidden">
      <div className="w-full m-auto px-4 sm:px-4 md:px-4 lg:px-5 xl:px-14 2xl:px-14">
        <div className="flex justify-between items-center my-5 pb-2 pt-2 font-primary-head">

          {/* Logo Section */}
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center gap-x-3 mt-1.5">
              <img src={momo} alt="momo_snap" className="h-9" />
              <h1 className="text-[25px] text-green-700 font-bold ml-1">momos</h1>
            </NavLink>
          </div>

          {/* Mobile Menu Trigger with Cart + Profile */}
          <div className="xl:hidden flex items-center gap-x-3">
            <NavLink to="/cart" className="relative">
              <span className="absolute -top-2.5 -right-3 text-[#D95103]">{totalItems}</span>
              <FaCartArrowDown 
                size={25} 
                className={totalItems > 0 ? "text-green-800" : "text-red-600"}
              />
            </NavLink>
            
            {isAuthenticated && user?.picture ? (
              <NavLink className="rounded-full flex justify-center items-center" to="/profile">
                <img className="h-8 rounded-full" src={user.picture} alt="User Profile" />
              </NavLink>
            ) : (
              <NavLink to="/login">
                <FaRegUserCircle color="#0C6967" size={25} />
              </NavLink>
            )}
            
            <button className="text-[#0C6967] p-2" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="font-bold text-2xl">&#9776;</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center justify-center gap-x-5 text-[#6B788E] font-medium text-[14px]">
            <NavLink to="/about" className="hover:text-green-600">About Us</NavLink>
            <NavLink to="/menu" className="hover:text-green-600">Our Menu</NavLink>
            <NavLink to="/services" className="hover:text-green-600">Our Services</NavLink>
            <NavLink to="/allergyadvice" className="hover:text-green-600">Allergy Advice</NavLink>

            {isAuthenticated ? (
              <button onClick={handleLogout} className="hover:text-red-600">
                LogOut
              </button>
            ) : (
              <div className="space-x-3">
                <NavLink to="/login" className="hover:text-green-600">Login</NavLink>
                <NavLink to="/signUp" className="hover:text-green-600">Sign Up</NavLink>
              </div>
            )}

            <NavLink to="/cart" className="relative">
              <span className="absolute -top-2.5 -right-3 text-[#D95103]">{totalItems}</span>
              <FaCartArrowDown 
                size={25} 
                className={totalItems > 0 ? "text-green-800" : "text-red-600"}
              />
            </NavLink>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden xl:flex items-center gap-x-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF size={34} color="white" className="rounded-full bg-[#A6AEBB] p-2" />
            </a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" aria-label="TikTok">
              <FaTiktok size={34} color="white" className="rounded-full bg-[#A6AEBB] p-2" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram size={34} color="white" className="rounded-full bg-[#A6AEBB] p-2" />
            </a>
            <NavLink 
              className="bg-[#D95103] rounded-3xl text-[14px] p-3 w-32 flex justify-center items-center text-white hover:bg-[#D95103]" 
              to="/contact"
            >
              Contact Us
            </NavLink>
            
            {isAuthenticated && (
              <NavLink to="/profile">
                <img className="h-8 rounded-full" src={user.picture} alt="User Profile" />
              </NavLink>
            )}
          </div>
        </div>

        {/* Mobile Menu Content */}
        <div className={`xl:hidden ${menuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full z-50 mt-10 bg-[#F7F9FC] shadow-lg`}>
          <div className="flex flex-col items-center gap-y-4 py-5 ml-4 w-full">
            <NavLink to="/about" className="text-lg font-medium hover:text-green-600" onClick={closeMenu}>About Us</NavLink>
            <NavLink to="/menu" className="text-lg font-medium hover:text-green-600" onClick={closeMenu}>Our Menu</NavLink>
            <NavLink to="/services" className="text-lg font-medium hover:text-green-600" onClick={closeMenu}>Our Services</NavLink>
            <NavLink to="/allergyadvice" className="text-lg font-medium hover:text-green-600" onClick={closeMenu}>Allergy Advice</NavLink>
            <NavLink to="/contact" className="text-lg font-medium hover:text-green-600" onClick={closeMenu}>Contact Us</NavLink>

            {isAuthenticated ? (
              <button onClick={handleLogout} className="text-lg text-red-600">
                LogOut
              </button>
            ) : (
              <div className="space-y-3">
                <NavLink to="/login" className="text-lg font-medium text-green-800 hover:text-green-600" onClick={closeMenu}>Login</NavLink>
                <NavLink to="/signUp" className="text-lg font-medium text-green-800 hover:text-green-600" onClick={closeMenu}>Sign Up</NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;