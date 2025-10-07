import "../index.css";
import ReactDOM from "react-dom/client";
import { CartProvider } from "./CartContext";
import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout";

const App = lazy(() => import("./App"));
const RestaurantMenu = lazy(() => import("./RestaurantMenu"));
const SignUp = lazy(() =>
  import("./Auth").then((m) => ({ default: m.SignUp }))
);
const Login = lazy(() => import("./Auth").then((m) => ({ default: m.Login })));

const Loading = () => (
  <div className="flex justify-center items-center h-screen text-xl">
    Loading...
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <App />
          </Suspense>
        ),
      },
      {
        path: "restaurant/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/signup",
    element: (
      <Suspense fallback={<Loading />}>
        <SignUp />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <RouterProvider router={appRouter} />
  </CartProvider>
);
