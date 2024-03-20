import React from "react";
import FormCard from "../FormCard";
import { useDispatch, useSelector } from "react-redux";
import { searchFlight } from "../../Features/searchFlightSlice";
import { resetState } from "../../Features/SearchHotelSlice"; 

function Flight() {
  const { isFetching } = useSelector((state) => state.flight)
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(resetState());
    dispatch(searchFlight()); 
  };
  return (
    <>
      <FormCard>
        <div className="lg:px-36 mx-auto text-center">
          <h1 className="text-3xl font-bold">
            Start an unforgettable journey, let's make lasting sky memories.
          </h1>

          <p className="text-xl font-bold">
            Unlock unbeatable flight deals and beyond your expectations.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-row justify-evenly items-center flex-wrap mt-8 border-white border-4 py-8 rounded-xl md:gap-4 gap-8 md:px-1 px-5"
        >
           <div className="flex flex-col justify-center w-full md:w-auto">
            <label
              htmlFor="From"
              className="font-bold text-lg ml-1 text-blue-950"
            >
              Where From
            </label>
            <input
              type="text"
              id="From"
              className="py-2 rounded-md px-5 mt-1 md:w-56 text-xl font-semibold w-full"
            />
          </div>
          <div className="flex flex-col justify-center w-full md:w-auto ">
            <label
              htmlFor="Where To"
              className="font-bold text-lg ml-1 text-blue-950"
            >
              Where To
            </label>
            <input
              type="text"
              id="To"
              className="py-2 rounded-md px-5 mt-1 md:w-56 text-xl font-semibold w-full"
            />
          </div>
          <div className="flex flex-col justify-center  w-full md:w-auto  ">
            <label
              htmlFor="Date"
              className="font-bold text-lg ml-1 text-blue-950"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              className="py-2 rounded-md px-5 mt-1 md:w-56 text-xl font-semibold w-full  "
            />
          </div>
          <div className="flex flex-col justify-center w-full md:w-56">
            <label
              htmlFor="Total Passenger"
              className="font-bold text-lg ml-1 text-blue-950"
            >
              Total Passenger
            </label>
            <select
              id="TotalPassenger"
              className="py-2 rounded-md px-1 mt-1 text-xl font-semibold w-full"
            >
              <option disabled value="">
                Adults+ Children+ Senoir Citizen
              </option>
              <option> Adults</option>
              <option> Children</option>
              <option> Senoir Citizen</option>
            </select>
          </div>
          <div className="flex flex-col justify-center w-full md:w-auto items-center ">
            <button
              className="bg-blue-950 text-white px-8 text-center py-3 rounded-xl md:mt-6 text-xl w-full"
              type="submit"
            >
            	{isFetching ? "Loading..." : "Check Flight Status"}
            </button>
          </div>
        </form>
      </FormCard>
    </>
  );
}

export default Flight;
