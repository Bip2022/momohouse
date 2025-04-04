import { createContext, useReducer } from "react";
import { ToastContainer, toast } from 'react-toastify';

export const cartContext = createContext();

const initialState = {
  cartItems: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "AddToCart": {
      const isExisting = state.cartItems.find(item => item.id === action.payload.id);
      
      if (isExisting) {
        const updatedCartItems = state.cartItems.map(item => {
          if(item.id === action.payload.id) {
            return { ...item, qty: item.qty + 1 };
          }
          return item;
        });
        toast.info(`Increased quantity for ${action.payload.name}`);
        return { ...state, cartItems: updatedCartItems };
      } else {
        const newCartItem = { ...action.payload, qty: 1 };
        toast.success(`Added ${newCartItem.name} to cart`);
        return { ...state, cartItems: [...state.cartItems, newCartItem] };
      }
    }

    case "Increment": {
      const updatedCartItems = state.cartItems.map(item => {
        if(item.id === action.payload.id) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });
      toast.info(`Increased quantity for ${
        state.cartItems.find(item => item.id === action.payload.id)?.name
      }`);
      return { ...state, cartItems: updatedCartItems };
    }

    case "Decrement": {
      const updatedCartItems = state.cartItems.map(item => {
        if(item.id === action.payload.id) {
          return item.qty > 1 
            ? { ...item, qty: item.qty - 1 } 
            : item;
        }
        return item;
      });
      toast.warning(`Decreased quantity for ${
        state.cartItems.find(item => item.id === action.payload.id)?.name
      }`);
      return { ...state, cartItems: updatedCartItems };
    }

    case "Delete": {
      const deletedItem = state.cartItems.find(item => item.id === action.payload.id);
      const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload.id);
      toast.error(`Removed ${deletedItem?.name} from cart`);
      return { ...state, cartItems: updatedCartItems };
    }

    case "Clear": {
      toast.error("Cleared all items from cart");
      return { ...state, cartItems: [] };
    }

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
      <ToastContainer
        position="top-right"
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