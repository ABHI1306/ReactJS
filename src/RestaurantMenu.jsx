import { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import { useParams } from "react-router-dom";
import { FaStore } from "react-icons/fa";
import { LuTimer } from "react-icons/lu";
import { BsCurrencyRupee } from "react-icons/bs";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { RESTAURANT_MENU } from "./utils/Endpoints";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  // ✅ Use cart from context
  const { cart, addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(RESTAURANT_MENU + id);
        const data = await response.json();
        setRestaurantMenu(data?.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };
    fetchMenu();
  }, [id]);

  if (!restaurantMenu) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-96 h-60 bg-gray-200 animate-pulse rounded-lg"></div>
      </div>
    );
  }

  // Restaurant Info
  const info = restaurantMenu?.cards?.[2]?.card?.card?.info || {};
  const {
    name = "Unknown",
    cuisines = [],
    avgRating = "N/A",
    totalRatingsString = "",
    costForTwoMessage = "",
    sla = {},
    feeDetails = {},
  } = info;

  const {
    minDeliveryTime = 0,
    maxDeliveryTime = 0,
    lastMileTravelString = "",
  } = sla;
  const { totalFee = 0 } = feeDetails;

  // Menu Categories
  const restaurantMenus =
    restaurantMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const finalRestaurantMenus = restaurantMenus.filter(
    (restaurant) =>
      restaurant?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  // 🛒 Handle Add to Cart
  const handleAddToCart = (dish) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === dish.id);
      if (existingItem) {
        // Increment quantity if item already in cart
        return prevCart.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Add new item
        return [...prevCart, { ...dish, quantity: 1 }];
      }
    });
  };

  return (
    <div className="p-2 w-2/3 mx-auto my-4">
      {/* Header, Menu Categories */}
      {restaurantMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        .filter(
          (restaurant) =>
            restaurant?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
        .map((category, idx) => {
          const cat = category.card.card;
          return (
            <div key={idx} className="mb-6">
              <h2 className="font-bold text-xl mb-2 border-b pb-1">
                {cat.title}
              </h2>
              <div className="space-y-4">
                {cat.itemCards?.map((item, i) => {
                  const dish = item.card.info;
                  const dishPrice = dish.price / 100 || dish.defaultPrice / 100;
                  const inCart = cart.find((c) => c.id === dish.id);

                  return (
                    <div
                      key={dish.id || i}
                      className="flex justify-between items-start bg-white rounded-lg shadow p-4 hover:shadow-md transition"
                    >
                      {/* Dish Details */}
                      <div className="flex-1 pr-4">
                        <h3 className="font-semibold text-lg">{dish.name}</h3>
                        <p className="text-gray-600 text-sm">
                          {dish.description}
                        </p>
                        <p className="font-medium mt-1">₹{dishPrice}</p>
                      </div>

                      {/* Dish Image + Add Button */}
                      <div className="flex flex-col items-center">
                        {dish.imageId && (
                          <img
                            src={`https://media-assets.swiggy.com/${dish.imageId}`}
                            alt={dish.name}
                            className="w-24 h-24 object-cover rounded-lg mb-2"
                          />
                        )}
                        <button
                          onClick={() => addToCart(dish)}
                          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-1 rounded-lg"
                        >
                          {inCart ? `Add More (${inCart.quantity})` : "Add ➕"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default RestaurantMenu;
