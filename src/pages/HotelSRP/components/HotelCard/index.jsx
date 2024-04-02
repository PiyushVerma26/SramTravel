import React from 'react';
import Hotels from '../../../../assets/images/Hotels.webp';
import { NavLink } from 'react-router-dom';

function Cabcard({ origin, destination, departureDate, returnDate, imageUrl }) {
  return (
    <NavLink to={'http://localhost:5173/hotel'} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="relative">
        <img src={imageUrl} className="w-full h-64 rounded-xl object-cover" alt="Cab" />
      </div>
      <div className="bg-white flex flex-col justify-between px-2 mt-1 sm:flex-row">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{origin}</h2>
          <p className="text-gray-600">{destination}</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <p className="text-gray-600">Departure: {departureDate}</p>
          <p className="text-gray-600">Return: {returnDate}</p>
        </div>
      </div>
      <div className="px-2 sm:flex sm:justify-between">
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Book Now
        </button>
      </div>
    </NavLink>
  );
}

export default Cabcard;
