import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { cartContext } from "../Context/CartProvider";
import cart from '../assets/cart.png';

function Cart() {
  const { state, dispatch } = useContext(cartContext);
  const shippingCharge = 120;

  // Calculate totals
  const totalItems = state.cartItems.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = state.cartItems.reduce((sum, item) => sum + (item.caloriesPerServing * item.qty), 0);
  const totalAmount = subtotal + shippingCharge;

  // Cleanup effect
  useEffect(() => {
    state.cartItems.forEach(item => {
      if (item.qty === 0) {
        dispatch({ type: "Delete", payload: { id: item.id } });
      }
    });
  }, [state.cartItems, dispatch]);

  return (
    <div className="w-full min-h-screen">
      {state.cartItems.length > 0 ? (
        <div className="w-full px-4 py-16 lg:px-14 flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="w-full lg:w-2/3 space-y-6">
            {state.cartItems.map(item => (
              <div key={item.id} className="bg-white p-5 shadow-md flex flex-col md:flex-row gap-6">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-32 h-32 object-cover border-2 border-white"
                />
                <div className="flex-1 flex flex-col md:flex-row justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-[#0C6967] font-bold text-lg">
                      Rs. {item.caloriesPerServing}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-4 md:mt-0">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => dispatch({ type: "Decrement", payload: { id: item.id } })}
                        className="bg-[#0C6967] w-8 h-8 text-white rounded"
                      >
                        -
                      </button>
                      <span className="text-lg w-6 text-center">{item.qty}</span>
                      <button
                        onClick={() => dispatch({ type: "Increment", payload: { id: item.id } })}
                        className="bg-[#0C6967] w-8 h-8 text-white rounded"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => dispatch({ type: "Delete", payload: { id: item.id } })}
                      aria-label="Remove item"
                    >
                      <MdDelete size={25} className="text-[#D95103]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Cart Actions */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={() => dispatch({ type: "Clear" })}
                className="bg-[#D95103] text-white px-6 py-2 rounded"
              >
                Clear Cart
              </button>
              <NavLink to="/menu" className="bg-green-500 text-white px-6 py-2 rounded">
                Continue Shopping
              </NavLink>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3 bg-[#f1efef] p-6 h-fit">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Items ({totalItems}):</span>
                <span>Rs. {subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>Rs. {shippingCharge}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>Rs. {totalAmount}</span>
              </div>
            </div>
            <NavLink 
              to="/payment"
              className="block mt-8 bg-[#D95103] text-white text-center py-3 rounded hover:bg-[#b84503]"
            >
              Proceed to Checkout
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="w-full text-center py-24">
          <NavLink to="/menu">
            <img src={cart} alt="Empty cart" className="w-64 mx-auto opacity-75" />
          </NavLink>
          <p className="mt-8 text-xl">
            Your cart is empty!{" "}
            <NavLink to="/menu" className="text-[#D95103] underline">
              Start shopping
            </NavLink>
          </p>
        </div>
      )}
    </div>
  );
}

export default Cart;