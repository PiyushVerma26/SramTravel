import React from "react";
import TabBar from "../TabBar/TabBar";
import { Outlet } from "react-router-dom";
import Trending from "../Destinations/Trending";
import HotelSearch from "../Search/HoelSearch"; 
import { useSelector } from "react-redux"; 
import FlightCard from "../FlightSearch/FlightCard";

function Dashboard() {
  const { dataFetched: hotelData } = useSelector((state) => state.hotel);
  const { dataFetched: flightData } = useSelector((state) => state.flight);

  return (
    <>
      <div className="bg-slate-200 pb-11">
        <div className="lg:px-52 px-1 py-2 block  ">
          <TabBar />
        </div>
        <div className="md:px-12 px-2">
          <Outlet />
        </div>
      </div>
      <div className="md:pt-10 pt-4 bg-slate-50 px-4 pb-4">
        {flightData && <FlightCard />}
        {hotelData ? <HotelSearch /> : <Trending />}
      </div>
    </>
  );
}

export default Dashboard;
