import React, { useState } from "react";
import HotelBook from "./HotelBook";
import us from "../../assets/images/us.jpg";
import Filter from "./Filter";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchDetail } from "../../Features/DetailSlice";
import { AiFillFilter } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
function HotelCard() {
  const data = useSelector((state) => state.hotel.data);
  const [filterToggle, setFilter] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      {filterToggle && (
        <div
          style={{ zIndex: "50" }}
          className="h-screen w-screen overflow-auto fixed inset-0 bg-white"
        >
          <div className="relative">
            <Filter />
            <RxCross2
              className="absolute top-6 right-6 text-xl"
              onClick={() => {
                setFilter((fil) => !fil);
              }}
            />
          </div>
        </div>
      )}
      <div
        className="  mb-3 shadow-lg text-center p-3 rounded-lg flex flex-row justify-center items-center gap-1 bg-yellow-400 text-blue-950 text-xl  md:hidden"
        onClick={() => {
          setFilter((filt) => !filt);
        }}
      >
        <AiFillFilter /> <p className="font-bold">Filter</p>
      </div>

      <div className="md:px-32 flex flex-row gap-2 ">
        <div className="hidden md:block">
          <Filter />
        </div>
        <div className="flex flex-col">
          {data &&
            data.map((item) => (
              <HotelBook key={item.id}>
                <div className="flex md:flex-row flex-col gap-2 ">
                  <img
                    src={us}
                    className="md:w-[40%] md:h-full w-full h-[50%] rounded-xl"
                  />
                  <div className="w-full">
                    <div className="flex md:flex-row flex-col md:justify-between md:items-center px-2 w-full flex-grow-1">
                      <h1 className="text-blue-600 font-bold md:text-2xl text-lg  ">
                        The Taj Hotel Mumbai
                      </h1>

                      <p className="font-bold text-red-900">
                        Good{" "}
                        <span className=" px-2  py-1 rounded-lg  font-bold md:text-2xl text-sm bg-blue-950 hover:bg-yellow-400 text-white">
                          7.8
                        </span>{" "}
                      </p>
                    </div>

                    <p className="text-blue-800 px-3 ">
                      Mumbai India{" "}
                      <span className="text-black ">
                        1 km away from marine drive
                      </span>
                    </p>
                    <p className="px-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Labore saepe laudantium beatae atque aliquid asperiores
                      consectetur corrupti totam libero natus unde quidem
                      excepturi perspiciatis voluptate, minima molestias eum
                      officiis expedita.
                    </p>
                  </div>
                </div>

                <button
                  className=" px-5 py-3 font-bold bg-blue-950 mt-2 rounded-xl text-white hover:bg-yellow-500"
                  onClick={() => {
                    dispatch(fetchDetail(item));
                  }}
                >
                  <NavLink to={"/description"}> BOOK NOW</NavLink>
                </button>
              </HotelBook>
            ))}
        </div>
      </div>
    </>
  );
}

export default HotelCard;
