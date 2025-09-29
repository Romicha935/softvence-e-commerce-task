import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { ProductContext } from "../context/ContextProvider";

const CartPage = () => {
  const { cart, setCart } = useContext(ProductContext);

  const updateQty = (id, type) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc"
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearAll = () => setCart([]);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen px-4 md:px-10">
      {/* Header: My Cart + Select All + Clear All */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-3xl font-bold">My Cart ({cart.length})</h2>
        <div className="flex items-center gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4" />
            Select All
          </label>
          <button
            onClick={clearAll}
            className="text-red-500 hover:text-red-700 font-semibold"
          >
            Clear All
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-4">
          {cart.length === 0 && (
            <p className="text-gray-500 text-center mt-10">
              Your cart is empty.
            </p>
          )}
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow rounded-xl p-4 flex flex-col sm:flex-row items-center gap-4"
            >
              <img
                src={item.selectedColor?.image || item.mainImage}
                alt={item.title}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full">
                <div>
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-500">
                    Color: {item.selectedColor?.name || "N/A"}, Size:{" "}
                    {item.selectedSize || "N/A"}
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-lg font-bold text-green-600">
                      ৳{item.price}
                    </span>
                    <span className="text-sm line-through text-gray-400">
                      ৳{item.oldPrice}
                    </span>
                  </div>
                  {/* Quantity controls */}
                  <div className="flex my-3 items-center gap-2">
                    <button
                      onClick={() => updateQty(item.id, "dec")}
                      className="px-3 py-1 border rounded hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 border rounded">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQty(item.id, "inc")}
                      className="px-3 py-1 border rounded hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
                {/* Delete */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700 mt-2 sm:mt-0"
                >
                  <FaTrash size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white shadow rounded-xl w-full md:w-full p-6 h-fit">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="flex justify-between mb-2">
            <span>Price ({cart.length} items)</span>
            <span>৳{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping fee</span>
            <span className="text-blue-500">To be added</span>
          </div>

          {/* Coupon */}
          <div className="flex mb-4">
            <input
              type="text"
              placeholder="Store / Falcon coupon"
              className="flex-1 border rounded-l-lg px-3 py-2 text-sm outline-none"
            />
            <button className="bg-green-700 text-white px-4 rounded-r-lg hover:bg-green-600">
              Apply
            </button>
          </div>

          <div className="flex justify-between font-semibold text-lg mb-4">
            <span>Sub Total</span>
            <span>৳{subtotal.toFixed(2)}</span>
          </div>

          <button className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-600">
            Proceed to Checkout
          </button>

          <p className="text-xs text-gray-500 mt-3">
            ✅ I have read and agree to the Terms and Conditions, Privacy Policy
            and Refund and Return Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
