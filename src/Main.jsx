import "../index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import RestaurantMenu from "./RestaurantMenu";

import { SignUp, Login } from "./Auth";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/restaurant/:id",
    element: <RestaurantMenu />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
