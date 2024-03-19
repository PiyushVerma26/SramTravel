import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import TabBar from "../TabBar/TabBar";
import { RxCross1 } from "react-icons/rx";
function Nav() {
  const [menu, setMenu] = useState(false);
  const handleMenuClick = () => {
    setMenu((menu) => !menu);
  };
  return (
    <>
      {/* {menu && (
        <div
          className="h-screen w-screen overflow-auto fixed inset-0 bg-white"
          style={{ zIndex: "60" }}
        >
          <div className="relative">
            <TabBar />
            <RxCross1
              className="absolute top-4 right-4"
              onClick={() => {
                setMenu((o) => !o);
              }}
            />
          </div>
        </div>
      )} */}
      <div className="bg-blue-800 w-full h-16 flex  justify-between items-center md:px-28 ps-2 font-bold tracking-normal text-white text-2xl sticky top-0 z-20">
        <div className="flex flex-row gap-2 sm:gap-5 items-center">
          {/* <CiMenuFries
            className="block md:hidden text-white"
            onClick={handleMenuClick}
          /> */}
          <p
            className="tracking-wide font-customFont"
            // style={{ fontFamily: "BlinkMacSystemFont" }}
          >
            TravelButler
          </p>
        </div>

        <div className="flex ">
          <NavLink
            className={({ isActive }) =>
              `  font-bold text-lg sm:mr-5 mr-3 ${
                isActive
                  ? "py-2 md:px-4 px-2 border-white rounded-full text-lg text-black bg-white"
                  : "text-white"
              }`
            }
            to={"/login"}
          >
            Login
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `  font-bold text-lg sm:mr-2 mr-1 md:block hidden ${
                isActive
                  ? "py-2 md:px-4 px-2 border-white rounded-full text-lg text-black bg-white"
                  : "text-white"
              }`
            }
            to={"/sign-up"}
          >
            Sign-up
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Nav;
