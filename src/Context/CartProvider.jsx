import { createContext, useReducer } from "react";
import { ToastContainer, toast } from 'react-toastify';

// Creating context for the cart
export const cartContext = createContext();

// Initial state
const initialState = {
  cartItems: [],
};

// Reducer function for managing cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "AddToCart": {
      // Check if item is already in the cart
      const isExisting = state.cartItems.find((item) => item.id === action.payload.id);
      
      if (isExisting) {
        // If item exists, increment quantity
        const updatedCartItems = state.cartItems.map((item) =>{
          if(item.id === action.payload.id){
            return { ...item, qty: item.qty + 1 };
          }
          return item;
      });
      toast.info(`Increased quantity for ${action.payload.name}`);
        return {
          ...state,
          cartItems: updatedCartItem,
        };
      } else {
        // If item does not exist, add to cart with initial quantity
        const newCartItem = { ...action.payload, qty: 1 };

        const updatedCart = [...state.cartItems, newCartItem];
        
        // Optional: Show a message or use a toast notification instead of `alert()`
        toast.success(`Added to the cart ${newCartItem.name} to cart`);
        
        return {
          ...state,
          cartItems: updatedCart,
        };
      }
    }

    case "Increment": {
      const updatedCartItems = state.cartItems.map((item) =>{
       if(item.id === action.payload.id){
          return { ...item, qty: item.qty + 1 }
       }
       return item;
      });
      toast.info(`Increased quantity for ${
        state.cartItems.find(item => item.id === action.payload.id).name
      }`); 

      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }

    case "Decrement": {
      const updatedCartItems = state.cartItems.map((item) =>{
        if(item.id === action.payload.id){
          return item.qty > 1
            ? { ...item, qty: item.qty - 1 }
            : item
}
        return item;
    });
    toast.warning(`Decreased quantity for ${
      state.cartItems.find(item => item.id === action.payload.id).name
    }`);
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }

    case "Delete": {
      const deletedItem = state.cartItems.find(item => item.id === action.payload.id);
      const updatedCartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
      toast.error(`Removed ${deletedItem.name} from cart`);
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }

    case "Clear": {
     alert("Your cart is cleared");
      return {
        ...state,
        cartItems: [],
      };
    }

    default:
      return state;
  }
};


// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </cartContext.Provider>
  );
};
