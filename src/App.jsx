import Footer from "./Footer";
import AppHeader from "./AppHeader";
import RestaurantCard from "./RestaurantCard";

import { useState, useEffect } from "react";
import { ShimmerList } from "./utils/ShimmerUI";
import { API_RESTAURANTS } from "./utils/Endpoints";

export default function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("");

  const filters = [
    "Budget Friendly",
    "Premium Dining",
    "Fast Delivery",
    "Rating 4.5+",
    "Pure Veg",
    "Non Veg",
  ];

  useEffect(() => {
    getRestaurantData();
  }, []);

  const getRestaurantData = async () => {
    const response = await fetch(API_RESTAURANTS);
    const data = await response.json();

    const resData =
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setRestaurants(resData);
  };

  const toggleFilter = (filter) => {
    setActiveFilter(activeFilter === filter ? "" : filter);
  };

  const getFilteredRestaurants = () => {
    let result = [...restaurants];

    // ✅ Apply search first
    if (searchQuery) {
      result = result.filter(
        (res) =>
          res.info.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          res.info.cuisines
            .join(", ")
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
      );
    }

    // ✅ Then apply active filter
    if (!activeFilter) return result;

    switch (activeFilter) {
      case "Rating 4.5+":
        return result.filter((res) => Number(res.info.avgRating) >= 4.5);

      case "Pure Veg":
        return result.filter((res) => res.info.veg === true);

      case "Non Veg":
        return result.filter((res) => res.info.veg === false);

      case "Fast Delivery":
        return result.filter((res) => Number(res.info.sla.deliveryTime) <= 30);

      case "Budget Friendly":
        return result.filter((res) => {
          const cost = parseInt(res.info.costForTwo?.replace(/[^\d]/g, ""), 10);
          return cost && cost <= 300;
        });

      case "Premium Dining":
        return result.filter((res) => {
          const cost = parseInt(res.info.costForTwo?.replace(/[^\d]/g, ""), 10);
          return cost && cost >= 800;
        });

      default:
        return result;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <AppHeader onSearch={setSearchQuery} />

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
          {restaurants.length === 0 ? (
            <ShimmerList />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredRestaurants().map((res, index) => (
                <RestaurantCard key={index} {...res} />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
