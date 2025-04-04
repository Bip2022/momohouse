import { useContext, useEffect } from "react";
import { cartContext } from "../Context/CartProvider";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
import cart from '../assets/cart.png';

function Cart() {
  const { state, dispatch } = useContext(cartContext);

  // Calculate total price
  const calculateTotal = () => {
    return state.cartItems.reduce(
      (total, item) => total + item.caloriesPerServing * item.qty,
      0
    );
  };

  // Calculate total items
  const totalItems = state.cartItems.reduce((sum, item) => sum + item.qty, 0);

  // Clear items with quantity 0
  const clearZeroQuantityItems = () => {
    state.cartItems.forEach((item) => {
      if (item.qty === 0) {
        dispatch({
          type: "Delete",
          payload: { id: item.id },
        });
      }
    });
  };

  // Trigger clearZeroQuantityItems on initial render or cart update
  useEffect(() => {
    clearZeroQuantityItems();
  }, [state.cartItems, dispatch]);

  // Total amount (calculate total and add shipping charge)
  const totalAmount = calculateTotal();
  const shippingCharge = 120;

  return (
    <>
      <div>
        {state.cartItems.length > 0 ? (
          <div className="w-full m-auto px-4 sm:px-4 md:px-4 lg:px-14 py-7 sm:py-7 md:py-7 lg:py-16 flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center">
            {/* Cart Items List */}
            <div className="w-full sm:w-full md:w-full lg:w-2/3 p-5 bg-[#fafafa] font-primary-head">
              {state.cartItems.map((Item) => (
                <div key={Item.id} className="w-full m-auto flex flex-col sm:flex-row md:flex-row lg:flex-row bg-white p-5 shadow-md mb-5">
                  <div className="w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/4">
                    <img className="w-full shadow-md border-2 border-white" src={Item.image} alt={Item.name} />
                  </div>
                  <div className="w-full flex flex-col sm:flex-row md:flex-row pl-0 sm:pl-6 md:pl-6">
                    <div className="w-full sm:w-full md:w-3/4 lg:w-3/4 mt-5">
                      <p className="font-semibold text-sm sm:text-md md:text-lg lg:text-lg">{Item.name}</p>
                      <p className="font-semibold text-lg">
                        Rs. <span className="text-[#0C6967]">{Item.caloriesPerServing}</span>
                      </p>
                      <button
                        onClick={() => {
                          dispatch({ type: "Delete", payload: { id: Item.id } });
                        }}
                        aria-label="Delete item"
                        className="mt-2 -ml-1"
                      >
                        <MdDelete size={25} color="#D95103" />
                      </button>
                    </div>
                    <div className="w-full sm:w-full md:w-full lg:w-1/3 mt-5 space-x-3">
                      <button
                        onClick={() => {
                          dispatch({ type: "Increment", payload: { id: Item.id } });
                        }}
                        className="bg-[#0C6967] w-8 h-8 text-white"
                        aria-label="Increment quantity"
                      >
                        +
                      </button>
                      <span className="text-lg">{Item.qty}</span>
                      <button
                        onClick={() => {
                          dispatch({ type: "Decrement", payload: { id: Item.id } });
                        }}
                        className="bg-[#0C6967] w-8 h-8 text-white"
                        aria-label="Decrement quantity"
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <button
                onClick={() => {
                  dispatch({ type: "Clear" });
                }}
                className="bg-[#D95103] font-light p-2 text-white rounded w-36 py-3 cursor-pointer"
              >
                Clear Cart
              </button>
            </div>

            {/* Order Summary */}
            <div className="w-full sm:w-full md:w-full lg:w-1/3 bg-[#f1efef] p-4 sm:p-4 md:p-12 lg:p-8 flex flex-col font-primary-head">
              <h1 className="font-semibold text-lg mb-3">Order Summary</h1>
              <p className="font-normal text-lg mb-1">Shipping Charge: Rs. {shippingCharge}</p>
              <p className="font-bold text-lg mb-6">
                Total: <span className="font-semibold">Rs. {totalAmount + shippingCharge}</span>
              </p>
              <button className="w-64 p-3 bg-[#D95103] text-white">
                <NavLink to="/payment">Proceed To Checkout ({totalItems})</NavLink>
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-lg mx-auto py-10 sm:py-16 md:py-20 lg:py-24 xl:py-28 text-center">
          <NavLink to="/menu">
            <img
              className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-[75%] xl:w-[75%] mx-auto"
              src={cart}
              alt="Empty Cart"
            />
          </NavLink>
          <p className="font-semibold text-lg sm:text-xl md:text-2xl mt-4 sm:mt-5">
            Empty Cart{" "}
            <NavLink to="/menu" className="underline text-red-500">
              Shop Now
            </NavLink>
          </p>
        </div>
        
        )}
      </div>
    </>
  );
}

export default Cart;
