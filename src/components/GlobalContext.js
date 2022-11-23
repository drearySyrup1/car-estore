import React, { useContext, useState, useReducer } from "react";
import { act } from "react-dom/test-utils";
import { carData } from "../cardata";

const AppContext = React.createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-item-to-cart": {
      const id = action.payload;

      for (let i = 0; i < state.cart.length; i++) {
        console.log(i);
        const item = state.cart[i];
        if (item.item.id === id) {
          item.quantity = item.quantity + 1;
          console.log(state.cart);
          return { ...state };
        }
      }

      const itemToAdd = state.cars.find((car) => car.id === id);

      const newCart = [
        ...state.cart,
        { item: itemToAdd, quantity: 1 },
      ];

      return { ...state, cart: newCart };
    }

    case "increase-quantity": {
      const id = action.payload;
      const item = state.cart.find((item) => item.item.id === id);
      item.quantity = item.quantity + 1;
      return { ...state };
    }
    case "decrease-quantity": {
      const id = action.payload.id;
      const item = state.cart.find((item) => item.item.id === id);
      item.quantity = item.quantity - 1;
      if (item.quantity <= 0) {
        action.payload.delete();
      }
      return { ...state };
    }
    case "delete-cart-item": {
      console.log("detet");
      const newCart = state.cart.filter((item) => {
        return item.item.id !== action.payload;
      });
      return { ...state, cart: newCart };
    }
    default:
      throw new Error("bad action");
  }
};

const initState = {
  cars: [...carData],
  cart: [],
  currencyPrefix: "£",
};

const GlobalContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((p) => !p);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const openNav = () => {
    setIsNavOpen(true);
  };
  const closeNav = () => {
    setIsNavOpen(false);
  };

  const toggleNightMode = () => {
    setIsNightMode((p) => !p);
  };

  return (
    <AppContext.Provider
      value={{
        isCartOpen,
        toggleCart,
        closeCart,
        state,
        dispatch,
        isNavOpen,
        openNav,
        closeNav,
        isNightMode,
        toggleNightMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default GlobalContext;

export const useGlobalContext = () => {
  return useContext(AppContext);
};
