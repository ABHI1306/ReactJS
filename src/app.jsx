import AppHeader from "./AppHeader";
import RestaurantCard from "./RestaurantCard";
import Footer from "./Footer";

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
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/3/20821553/74461a58dfdefc4e04dba223f88a5349_featured_v2.jpg?output-format=webp",
      name: "Pizza Palace",
      cuisine: "Italian, Fast Food",
      location: "Kothrud, Pune",
      rating: "4.1",
      price: "₹500",
      time: "30",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/5/19111915/90ea8c89cfedbfbcaf0dd9bdb46cbb45_featured_v2.jpg?output-format=webp",
      name: "Biryani House",
      cuisine: "Biryani, North Indian",
      location: "Baner, Pune",
      rating: "4.3",
      price: "₹600",
      time: "35",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/9/21771689/8014450dff30a03161be9d0ee61a2c3c_featured_v2.jpg?output-format=webp",
      name: "Pizza Palace",
      cuisine: "Italian, Fast Food",
      location: "Kothrud, Pune",
      rating: "4.1",
      price: "₹500",
      time: "30",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <AppHeader />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((res, index) => (
              <RestaurantCard key={index} {...res} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
