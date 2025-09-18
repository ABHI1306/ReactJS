export default function RestaurantCard({
  image,
  name,
  cuisine,
  location,
  rating,
  price,
  time,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
      {/* Image */}
      <img src={image} alt={name} className="h-48 w-full object-cover" />

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
            ⭐ {rating}
          </span>
        </div>

        <p className="text-sm text-gray-600">
          {cuisine} • {location}
        </p>

        <div className="flex items-center justify-between mt-3 text-sm text-gray-700">
          <span>💰 {price} for two</span>
          <span>🕛 {time} mins</span>
        </div>
      </div>
    </div>
  );
}
