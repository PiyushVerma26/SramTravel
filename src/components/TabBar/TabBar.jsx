import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaJetFighter } from "react-icons/fa6";
import { LiaHotelSolid } from "react-icons/lia";
import { FaCarAlt } from "react-icons/fa";
function TabBar() {
  const location = useLocation();

  return (
    <div className="flex md:flex-row  justify-evenly min-h-28 items-center md:shadow-2xl w-full flex-wrap gap-10  px-5 py-2 md:rounded-2xl  bg-white  z-10">
      <NavLink
        to="/hotel"
        className={`flex flex-col items-center text-lg text-center md:w-30 w-20 mx-3 ${
          location.pathname === "/hotel" || location.pathname === "/"
            ? "scale-110 font-bold text-blue-800 border-black border-b-4"
            : "text-black"
        }`}
      >
        <LiaHotelSolid className="text-3xl mb-1" /> Hotels
      </NavLink>

      <NavLink
        to={"/flight"}
        className={({ isActive }) =>
          `  flex flex-col items-center text-lg text-center md:w-30 w-20 mx-3 ${
            isActive
              ? "scale-110 font-bold text-blue-800   border-b-4 border-black"
              : "text-black"
          }`
        }
      >
        <FaJetFighter className="text-3xl mb-1" /> Flights
      </NavLink>

      <NavLink
        to={"/transportation"}
        className={({ isActive }) =>
          `  flex flex-col items-center text-lg text-center md:w-30 w-20 mx-3 ${
            isActive
              ? "scale-110 font-bold text-blue-800   border-b-4 border-black"
              : "text-black"
          }`
        }
      >
        <FaCarAlt className="  text-3xl mb-1" />
        Transpotation
      </NavLink>
    </div>
  );
}

export default TabBar;
