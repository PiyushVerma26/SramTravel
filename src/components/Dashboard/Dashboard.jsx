import React from "react";
import TabBar from "../TabBar/TabBar";
import { Outlet } from "react-router-dom";
import Trending from "../Destinations/Trending";
import HotelSearch from "../Search/HoelSearch";
import { useSelector } from "react-redux";
import FlightCard from "../FlightSearch/FlightCard";
import TransportSearch from "../TransportSearch/TransportSearch";

function Dashboard() {
  const { dataFetched: hotelData } = useSelector((state) => state.hotel);
  const { dataFetched: flightData } = useSelector((state) => state.flight);
  const { dataFetched: transportData } = useSelector(
    (state) => state.transport,
  );

  return (
    <>
      <div className="bg-blue-950 pb-11">
        <div className="lg:px-52 px-1 py-2 block  ">
          <TabBar />
        </div>
        <div className="md:px-12 px-2">
          <Outlet />
        </div>
      </div>
      <div className="md:pt-10 pt-4 bg-slate-50 px-4 pb-4">
        {!flightData && !hotelData && !transportData && <Trending />}
        {flightData && <FlightCard />}
        {hotelData && <HotelSearch />}
        {transportData && <TransportSearch />}
      </div>
      <div className="flex flex-col items-center p-5 bg-blue-950 font-customFont text-white">
        <h1 className="text-3xl">Save time and money!</h1>
        <p>Sign up to get best deals...</p>
        <div className="flex md:flex-row flex-col gap-2 mt-4 font-customFont flex-wrap mb-3">
          <input
            className="px-5 py-2 rounded text-center md:min-w-[400px]"
            type="text"
            placeholder="Your email address"
          />
          <button className="px-12  bg-blue-700 rounded py-2">Subscribe</button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
