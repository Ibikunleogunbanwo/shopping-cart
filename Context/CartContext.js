"use client";

import { initialState, manageCart } from "@/libs/cartReducer";
import React, { createContext, useReducer } from "react";



export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(manageCart, initialState);

  const handleCart = (type, item) => {
    dispatch({ type, payload: item });
  };

  
  return <CartContext.Provider
  value={{
    state,
    handleCart
  }}
  
  >{children}</CartContext.Provider>;
};


export default CartProvider;
