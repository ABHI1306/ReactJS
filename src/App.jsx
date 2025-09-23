import Footer from "./Footer";
import { useState } from "react";
import AppHeader from "./AppHeader";
import RestaurantCard from "./RestaurantCard";

export default function App() {
  const restaurants = [
    {
      image:
        "https://b.zmtcdn.com/data/pictures/2/6508002/3ff38e7519a70bb09157e1b8aa522d4f_featured_v2.jpg?output-format=webp",
      name: "Biryani House",
      cuisine: "Biryani, North Indian",
      location: "Baner, Pune",
      rating: "4.3",
      price: "₹600",
      time: "35",
      isVeg: "False",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/3/20821553/74461a58dfdefc4e04dba223f88a5349_featured_v2.jpg?output-format=webp",
      name: "Pizza Palace",
      cuisine: "Italian, Fast Food",
      location: "Kothrud, Pune",
      rating: "2.1",
      price: "₹500",
      time: "30",
      isVeg: "True",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/5/19111915/90ea8c89cfedbfbcaf0dd9bdb46cbb45_featured_v2.jpg?output-format=webp",
      name: "Masaledar",
      cuisine: "Biryani, North Indian",
      location: "Baner, Pune",
      rating: "4.5",
      price: "₹600",
      time: "35",
      isVeg: "False",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/9/21771689/8014450dff30a03161be9d0ee61a2c3c_featured_v2.jpg?output-format=webp",
      name: "Pizza Plater",
      cuisine: "Italian, Fast Food",
      location: "Camp, Pune",
      rating: "3.1",
      price: "₹500",
      time: "38",
      isVeg: "True",
    },
  ];

  const filters = [
    "Filter",
    "Sort By",
    "Fast Delivery",
    "Rating 4.5+",
    "Pure Veg",
    "Non Veg",
  ];

  // ✅ Store only one active filter
  const [activeFilter, setActiveFilter] = useState("");

  // ✅ Handle toggle
  const toggleFilter = (filter) => {
    if (activeFilter === filter) {
      setActiveFilter(""); // deselect
    } else {
      setActiveFilter(filter); // select new filter
    }
  };

  // ✅ Filter restaurants based on single active filter
  const getFilteredRestaurants = () => {
    if (!activeFilter) return restaurants; // no filter selected

    switch (activeFilter) {
      case "Rating 4.5+":
        return restaurants.filter((res) => Number(res.rating) >= 4.5);
      case "Pure Veg":
        return restaurants.filter((res) => res.isVeg === "True");
      case "Non Veg":
        return restaurants.filter((res) => res.isVeg === "False");
      case "Fast Delivery":
        return restaurants.filter((res) => Number(res.time) <= 30);
      default:
        return restaurants;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <AppHeader />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto p-6">
          {/* Filters */}
          <div className="flex gap-3 overflow-x-auto px-4 py-3 bg-white shadow-sm border-b mb-6 rounded-lg">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => toggleFilter(filter)}
                className={`px-4 py-2 rounded-full border text-sm font-medium whitespace-nowrap transition
                  ${
                    activeFilter === filter
                      ? "bg-red-500 text-white border-red-500"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredRestaurants().map((res, index) => (
              <RestaurantCard key={index} {...res} />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
