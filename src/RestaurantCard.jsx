import { Link } from "react-router-dom";
import { RESTAURANT_IMG } from "./utils/Endpoints";

export default function RestaurantCard({ info }) {
  const {
    id,
    name,
    cuisines,
    areaName,
    avgRating,
    costForTwo,
    sla,
    cloudinaryImageId,
  } = info;

  return (
    <Link to={`/restaurant/${id}`}>
      <div
        className="bg-white rounded-2xl shadow-md overflow-hidden
                 hover:shadow-2xl hover:scale-105 hover:-translate-y-1
                 transition-all duration-300 ease-in-out cursor-pointer"
      >
        {/* Image */}
        <div className="relative">
          <img
            src={RESTAURANT_IMG + cloudinaryImageId}
            alt={name}
            className="h-48 w-full object-cover transform hover:brightness-90 transition duration-300"
          />
          <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition duration-300"></div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
              ⭐ {avgRating}
            </span>
          </div>

          <p className="text-sm text-gray-600">
            {cuisines.join(", ")} • <b>{areaName}</b>
          </p>

          <div className="flex items-center justify-between mt-3 text-sm text-gray-700">
            <span>💰 {costForTwo}</span>
            <span>🕛 {sla.deliveryTime} mins</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
