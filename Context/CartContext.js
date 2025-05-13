"use client";

import { initialState, manageCart } from "@/libs/cartReducer";
import React, { createContext, useEffect, useReducer } from "react";



export const CartContext = createContext();


const loadState = () => {
 
  return initialState
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(manageCart, initialState);

  const handleCart = (type, item) => {
    dispatch({ type, payload: item });
  };

  useEffect(()=> {

    const storedcart = window.localStorage.getItem("cartstate")
    if (storedcart){
    const parsedData =JSON.parse(storedcart)

handleCartclear("INNIT",parsedData)
    }
    


  }, [] )



  useEffect(()=> {


  window.localStorage.setItem("cartstate", JSON.stringify(state))


  },[state])



  return <CartContext.Provider
  value={{
    state,
    handleCart
  }}
  
  >{children}</CartContext.Provider>;
};


export default CartProvider;
