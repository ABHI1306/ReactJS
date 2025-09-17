import Location from "./location";

const Header = () => {
  return (
    <div className="flex items-center gap-10 p-6 bg-gray-100 shadow-md">
      <div className="flex-shrink-0">
        <img
          src="https://img.freepik.com/premium-vector/food-logo-vector-design-template_600323-3904.jpg"
          alt="logo"
          className="h-20 w-20 rounded-full object-cover"
        />
      </div>
      <Location />
      <input
        type="text"
        placeholder="Search..."
        className="ml-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
    </div>
  );
};

export default App;
