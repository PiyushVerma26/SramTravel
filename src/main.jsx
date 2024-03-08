import React from "react";
import ReactDOM from "react-dom/client";
import store from "./Store/Store.js";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Login from "./components/Register-And-Login/Login.jsx";
import Register from "./components/Register-And-Login/Register.jsx";
import { Provider } from "react-redux";
import Train from "./components/Trains/Train.jsx";
import Hotel from "./components/Hotel/Hotel.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Flight from "./components/flights/Flight.jsx";
import Car from "./components/Car/Car.jsx";
import Holiday from "./components/Holiday/Holiday.jsx";
import HomeVillas from "./components/HomeVillas/HomeVillas.jsx";
import HotelDetail from "./components/Search/HotelDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        children: [
          {
            path: "/",
            element: <Hotel />,
          },
          {
            path: "/hotel",
            element: <Hotel />,
          },
          {
            path: "/flight",
            element: <Flight />,
          },
          {
            path: "/train",
            element: <Train />,
          },
          {
            path: "/car",
            element: <Car />,
          },
          {
            path: "/holiday",
            element: <Holiday />,
          },
          {
            path: "/homeStays",
            element: <HomeVillas />,
          },
        ],
      },
      {
        path: "/description",
        element: <HotelDetail />,
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/sign-up",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
