import React from "react";
import FormCard from "../FormCard";
import { useDispatch } from "react-redux";
import { resetState } from "../../Features/SearchHotelSlice";
import { resetflight } from "../../Features/searchFlightSlice";
import { searchTransport } from "../../Features/TransportationSlice";
import { useForm } from 'react-hook-form';
import { useSelector } from "react-redux";

function Transportation() {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { isFetching } = useSelector((state) => state.transport)
  const formSubmit = (data) => {
    dispatch(resetflight());
    dispatch(resetState());
    dispatch(searchTransport(data));
    
  };

  return (
    <FormCard>
      <div className="lg:px-36 mx-auto text-center text-white">
        <h1 className="text-3xl font-bold">
          Experience unforgettable travel memories on bus, train, or transport!
        </h1>
        <p className="text-xl font-bold">
          Discover unbeatable deals on Transportation.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="flex flex-row justify-evenly items-center flex-wrap mt-8 border-white border-4 py-8 rounded-xl md:gap-4 gap-8 md:px-1 px-5"
      >
        <div className="flex flex-col justify-center w-full md:w-auto">
          <label
            htmlFor="pickup"
            className="font-bold text-lg ml-1 text-blue-950"
          >
            Pick-up
          </label>
          <input
            type="text"
            id="pickup"
            {...register('pickup', { required: true })}
            className="py-2 rounded-md px-5 mt-1 md:w-72 text-xl font-semibold w-full"
          />
          {errors.pickup && <span>This field is required</span>}
        </div>
        <div className="flex flex-col justify-center w-full md:w-auto ">
          <label
            htmlFor="drop"
            className="font-bold text-lg ml-1 text-blue-950"
          >
            Drop
          </label>
          <input
            type="text"
            id="drop"
            {...register('drop', { required: true })}
            className="py-2 rounded-md px-5 mt-1 md:w-72 text-xl font-semibold w-full"
          />
          {errors.drop && <span>This field is required</span>}
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
            {...register('date', { required: true })}
            className="py-2 rounded-md px-5 mt-1 md:w-72 text-xl font-semibold w-full  "
          />
          {errors.date && <span>This field is required</span>}
        </div>
      
        <div className="flex flex-col justify-center w-full md:w-auto items-center ">
          <button
            className="bg-blue-950 text-white px-8 text-center py-3 rounded-xl md:mt-6 text-xl w-full"
            type="submit"
          >
             {isFetching ? "Loading..." : "Find Vechile"}    
          </button>
        </div>
      </form>
    </FormCard>
  );
}

export default Transportation;
