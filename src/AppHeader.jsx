import { ShoppingCart, X } from "lucide-react";
import { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import Location from "./Location";
import { LOGO } from "./utils/Endpoints";

const AppHeader = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const { cart, removeFromCart } = useContext(CartContext); // ✅ get removeFromCart

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(query);
    }
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="bg-white shadow-md relative">
      <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        {/* Left: Logo + Location */}
        <div className="flex items-center gap-6">
          <img src={LOGO} alt="logo" className="h-12" />
          <Location />
        </div>

        {/* Middle: Search bar */}
        <div className="flex-1 mx-8 relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search for restaurant, cuisine or a dish"
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Right: Links + Cart */}
        <div className="flex items-center gap-6 relative">
          <Link
            to="/login"
            className="text-gray-700 font-medium hover:text-gray-900"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="text-gray-700 font-medium hover:text-gray-900 border px-3 py-1 rounded-md"
          >
            Sign Up
          </Link>

          {/* Cart Icon */}
          <div
            className="relative cursor-pointer"
            onClick={() => setCartOpen(!cartOpen)}
          >
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-gray-900" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}

            {/* Dropdown */}
            {cartOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white border shadow-lg rounded-lg z-50 p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-lg">Cart</h4>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                {cart.length === 0 ? (
                  <p className="text-gray-500 text-sm">Your cart is empty.</p>
                ) : (
                  <ul className="space-y-2 max-h-64 overflow-y-auto">
                    {cart.map((item) => (
                      <li
                        key={item.id}
                        className="flex justify-between items-center"
                      >
                        <span>
                          {item.name} x{item.quantity}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 text-sm"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
