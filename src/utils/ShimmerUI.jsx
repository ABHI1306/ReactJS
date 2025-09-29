export function ShimmerCard() {
  return (
    <div
      className="bg-white rounded-2xl shadow-md overflow-hidden
                 animate-pulse cursor-pointer"
    >
      {/* Image Skeleton */}
      <div className="relative">
        <div className="h-48 w-full bg-gray-200"></div>
      </div>

      {/* Content Skeleton */}
      <div className="p-4 space-y-3">
        {/* Title + Rating */}
        <div className="flex items-center justify-between">
          <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
          <div className="h-5 w-10 bg-gray-200 rounded-lg"></div>
        </div>

        {/* Cuisine + Area */}
        <div className="h-3 w-4/5 bg-gray-200 rounded"></div>

        {/* Price + Delivery */}
        <div className="flex items-center justify-between mt-3">
          <div className="h-3 w-16 bg-gray-200 rounded"></div>
          <div className="h-3 w-12 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export function ShimmerList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {Array(6)
        .fill("")
        .map((_, index) => (
          <ShimmerCard key={index} />
        ))}
    </div>
  );
}
