"use client";

import { CartContext } from "@/Context/CartContext";
import { useContext } from "react";

const Cart = () => {
  const { state, handleCart } = useContext(CartContext);

  const Products = [
    {
      id: 1,
      name: "Mc Donald Happy",
      price: 25.99,
      quantity: 15,
      image:
        "https://plus.unsplash.com/premium_photo-1684923610122-028894099cdd?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    { id: 2, 
      name: "Handbag", 
      price: 45.0, 
      quantity: 10,
      image:
      "https://images.unsplash.com/photo-1705909237050-7a7625b47fac?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", },
    { id: 3, 
      name: "Ladies shoe", 
      price: 25.99, 
      quantity: 7,
      image : "https://plus.unsplash.com/premium_photo-1671028365097-104512e9c1a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGxhZGllcyUyMHNob2V8ZW58MHx8MHx8fDA%3D", },
    { id: 4, 
      name: "T-shirt", 
      price: 9.99, 
      quantity: 50,
      image:"https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VCUyMHNoaXJ0fGVufDB8fDB8fHww", },
    { id: 5, 
      name: "Television", 
      price: 29.99, 
      quantity: 20,
      image: "https://images.unsplash.com/photo-1746184841588-ac267cce5e97?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHNhbXN1bmclMjB0diUyMHNhbGVzJTIwZGlzcGxheXxlbnwwfHwwfHx8MA%3D%3D", },
    { id: 6, 
      name: "Webcam", 
      price: 69.99, 
      quantity: 8,
      image: "https://images.unsplash.com/photo-1636569826709-8e07f6104992?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", },
    { id: 7, 
      name: "Speaker", 
      price: 39.99, 
      quantity: 12,
      image: "https://images.unsplash.com/photo-1645537335722-01e6205ca0a4?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",},
    { id: 8, 
      name: "Sneakers", 
      price: 29.99, 
      quantity: 30,
      image:"https://images.unsplash.com/photo-1509913841876-b8a297b4e240?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", },
  ];
  const getImage = (id) =>
    `https://via.placeholder.com/200x150.png?text=Item+${id}`;

  const total = state.cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col md:flex-row p-6 gap-8 bg-gray-100 min-h-screen">
      {/* Product List */}
      <div className="w-full md:w-3/4">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Welcome to Nifemi Ecommerce Store
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {Products.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
              <div className="mt-4 flex gap-3">
                <button
                  className="flex-1 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                  onClick={() => handleCart("ADD_ITEM", item)}
                >
                  Add to Cart
                </button>
                <button
                  className="flex-1 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                  onClick={() => handleCart("REMOVE_ITEM", item)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Summary */}
      <div className="w-full md:w-1/4 sticky top-8 self-start bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Cart Summary</h2>
        {state.cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <ul className="divide-y divide-gray-300 mb-4">
            {state.cart.map((i) => (
              <li key={i.id} className="py-2 text-gray-700">
                {i.name} × {i.quantity} — $
                {(i.price * i.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
        )}
        <div className="border-t pt-4 mt-4">
          <p className="text-lg font-semibold text-gray-800">
            Total: ${total.toFixed(2)}
          </p>
        </div>
        <button
          className="mt-4 w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          onClick={() => handleCart("CLEAR_CART")}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;