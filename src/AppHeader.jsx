import Location from "./Location";
import { Search } from "lucide-react";

const AppHeader = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        {/* Left: Logo */}
        <div className="flex items-center gap-6">
          <img
            src="https://seeklogo.com/images/Z/zomato-logo-200607EC4C-seeklogo.com.png"
            alt="logo"
            className="h-12"
          />

          {/* Location */}
          <Location />
        </div>

        {/* Middle: Search bar */}
        <div className="flex-1 mx-8 relative">
          <input
            type="text"
            placeholder="Search for restaurant, cuisine or a dish"
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
        </div>

        {/* Right: Links */}
        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-700 font-medium hover:text-gray-900">
            Log In
          </a>
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-gray-900 border px-3 py-1 rounded-md"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
