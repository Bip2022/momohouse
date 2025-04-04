import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { cartContext } from "../Context/CartProvider";

function Cart() {
  const { state, dispatch } = useContext(cartContext);
 

  // Calculate totals
  const totalItems = state.cartItems.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = state.cartItems.reduce((sum, item) => sum + (item.caloriesPerServing * item.qty), 0);
  const totalAmount = subtotal + shippingCharge;

  // Cleanup effect for zero quantity items
  useEffect(() => {
    state.cartItems.forEach(item => {
      if (item.qty < 1) {
        dispatch({ type: "Delete", payload: { id: item.id } });
      }
    });
  }, [state.cartItems, dispatch]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {state.cartItems.length > 0 ? (
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Cart Items Section */}
          <div className="flex-1 space-y-6">
            <h1 className="text-3xl font-bold">Your Cart ({totalItems})</h1>
            
            {state.cartItems.map(item => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow flex flex-col md:flex-row gap-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-lg text-[#0C6967] font-bold">
                      ₹{item.caloriesPerServing}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => dispatch({ type: "Decrement", payload: { id: item.id } })}
                        className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="text-xl w-8 text-center">{item.qty}</span>
                      <button
                        onClick={() => dispatch({ type: "Increment", payload: { id: item.id } })}
                        className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => dispatch({ type: "Delete", payload: { id: item.id } })}
                      className="text-red-600 hover:text-red-800"
                    >
                      <MdDelete size={28} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Cart Actions */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={() => dispatch({ type: "Clear" })}
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
              >
                Clear Cart
              </button>
              <NavLink
                to="/menu"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
              >
                Continue Shopping
              </NavLink>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-96 bg-white p-6 h-fit rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Items ({totalItems}):</span>
                <span>Rs:{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>₹{shippingCharge}</span>
              </div>
              <div className="flex justify-between border-t pt-4">
                <span className="font-bold">Total:</span>
                <span className="font-bold">₹{totalAmount}</span>
              </div>
            </div>
            <NavLink
              to="/payment"
              className="block mt-8 bg-[#0C6967] text-white text-center py-3 rounded-lg hover:bg-[#094b4a]"
            >
              Proceed to Checkout
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="text-6xl mb-6 text-gray-300">🛒</div>
          <h2 className="text-2xl mb-4">Your cart is empty</h2>
          <NavLink
            to="/menu"
            className="text-blue-600 hover:text-blue-800 text-lg"
          >
            Start shopping →
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Cart;