"use client";

import { CartContext } from "@/Context/CartContext";
import { useContext, useReducer } from "react";

const Cart = () => {

  const {state, handleCart} = useContext(CartContext)

  const Products = [
    { id: 1, name: "Mc Donald Happy", price: 25.99, quantity: 15 },
    { id: 2, name: "Handbag", price: 45.0, quantity: 10 },
    { id: 3, name: "Ladies shoe", price: 199.99, quantity: 7 },
    { id: 4, name: "t shirt", price: 9.99, quantity: 50 },
    { id: 5, name: "Television", price: 29.99, quantity: 20 },
    { id: 6, name: "Webcam", price: 69.99, quantity: 8 },
    { id: 7, name: "Speaker", price: 39.99, quantity: 12 },
    { id: 8, name: "Car", price: 89.99, quantity: 30 },
  ];

  const getImage = (id) =>
    `https://via.placeholder.com/200x150.png?text=Item+${id}`;



  const total = state.cart.reduce((accumulator,cartitem ) =>{

    return accumulator += (cartitem.price * cartitem.quantity)

  }, 0 )



  // single helper for both add & remove
 
  return (
    <div className="flex flex-wrap md:flex-nowrap p-8 gap-8">
      {/* Product List */}
      <div className="w-full md:w-3/4">
        <h1 className="text-2xl font-bold mb-4">Welcome to Nifemi Ecommerce Store</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white text-black rounded-2xl">
          {Products.map(item => (
            <div key={item.id} className="p-4 shadow rounded-3xl border m-2">
              <h2 className="text-lg font-semibold">Item: {item.name}</h2>
              <img src={getImage(item.id)} alt={item.name} className="mb-4 rounded" />
              <p className="text-gray-600">Price: ${item.price}</p>
              <p className="text-gray-600">Stock: {item.quantity}</p>
              <div className="grid grid-cols-2 gap-3 py-2">
                <button
                  className="px-4 py-2 border-2 rounded hover:bg-green-100 hover:text-black"
                  onClick={() => handleCart("ADD_ITEM", item)}
                >
                  Add to Cart
                </button>
                <button
                  className="px-4 py-2 border-2 rounded hover:bg-red-100 hover:text-black"
                  onClick={() => handleCart("REMOVE_ITEM", item)} >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Summary */}
      <div className="w-full md:w-1/4 sticky top-0 self-start mt-12">
        <h1 className="text-xl font-bold mb-2">Cart Summary:</h1>
        {state.cart.length === 0 ? (
          <p className="text-gray-600">No items yet</p>
        ) : (
          <ul className="text-white">
            {state.cart.map(i => (
              <li key={i.id} className="mb-2">
                {i.name} × {i.quantity} — ${(i.price * i.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
        )}

        <h1>Cart Total : ${total.toFixed(2)} </h1>

        <button 
       className="px-4 py-2 border-2 rounded hover:bg-red-100 hover:text-black"
        onClick={() => handleCart("CLEAR_CART")}>Clear Cart </button>
      </div>

    
    </div>
  );
};

export default Cart;