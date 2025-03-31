import { createContext, useReducer } from "react";

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
        return {
          ...state,
          cartItems: updatedCartItem,
        };
      } else {
        // If item does not exist, add to cart with initial quantity
        const newCartItem = { ...action.payload, qty: 1 };

        const updatedCart = [...state.cartItems, newCartItem];
        
        // Optional: Show a message or use a toast notification instead of `alert()`
        alert(`Added to the cart ${newCartItem.name} `);
        
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
      })
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
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }

    case "Delete": {
      const updatedCartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
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
    </cartContext.Provider>
  );
};
