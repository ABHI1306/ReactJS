import { FaStore } from "react-icons/fa";
import { LuTimer } from "react-icons/lu";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsCurrencyRupee } from "react-icons/bs";
import { RESTAURANT_MENU } from "./utils/Endpoints";
import { MdOutlineDeliveryDining } from "react-icons/md";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantMenu, setRestaurantMenu] = useState(null);

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

  return (
    <div className="p-2 w-2/3 mx-auto my-4">
      {/* Header */}
      <div>
        <h1 className="font-bold text-black text-2xl p-2">{name}</h1>
        <div className="bg-neutral-300 rounded-2xl p-4">
          <div className="border-2 bg-neutral-100 p-4 rounded-2xl">
            <div className="font-semibold space-x-2">
              <span className="text-green-500">⭐</span>
              <span>
                {avgRating} ({totalRatingsString})
              </span>
              <span>{costForTwoMessage}</span>
            </div>
            <p className="text-orange-600 font-semibold mb-2">
              {cuisines.join(", ")}
            </p>
            <div className="space-y-2 font-semibold mb-2">
              <p className="flex items-center">
                <FaStore className="mr-2" /> Outlet
              </p>
              <p className="flex items-center">
                <LuTimer className="mr-2" /> {minDeliveryTime} -{" "}
                {maxDeliveryTime} mins
              </p>
            </div>
            <hr />
            <div className="mt-2 flex space-x-2">
              <MdOutlineDeliveryDining className="size-6" />
              <span>{lastMileTravelString}</span> &nbsp; |
              <span className="flex items-center">
                <BsCurrencyRupee /> {totalFee / 100} Delivery fee will apply
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="my-4">
        {finalRestaurantMenus.map((category, idx) => {
          const cat = category.card.card;
          return (
            <div key={idx} className="mb-6">
              {/* Category Title */}
              <h2 className="font-bold text-xl mb-2 border-b pb-1">
                {cat.title}
              </h2>

              {/* Dishes */}
              <div className="space-y-4">
                {cat.itemCards?.map((item, i) => {
                  const dish = item?.card?.info;
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
                        <p className="font-medium mt-1">
                          ₹{dish.price / 100 || dish.defaultPrice / 100}
                        </p>
                        {dish.ratings?.aggregatedRating?.rating && (
                          <p className="text-sm text-green-600">
                            ⭐ {dish.ratings.aggregatedRating.rating} (
                            {dish.ratings.aggregatedRating.ratingCount})
                          </p>
                        )}
                        {/* Addons */}
                        {dish.addons?.length > 0 && (
                          <div className="mt-2 text-sm">
                            <span className="font-semibold">
                              Available Addons:{" "}
                            </span>
                            {dish.addons.map((addon) => (
                              <span
                                key={addon.groupId}
                                className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded mr-2 mb-1"
                              >
                                {addon.groupName}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Dish Image */}
                      {dish.imageId && (
                        <img
                          src={`https://media-assets.swiggy.com/${dish.imageId}`}
                          alt={dish.name}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
