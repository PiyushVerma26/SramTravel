import React from 'react';
import Hotels from '../../../../assets/images/Hotels.webp'
import { NavLink } from 'react-router-dom';

function Hotelcard({hotelName ,rating ,star,location,ratingCount,totalPrice ,basePrice ,tax,off}) {
  const base='bg-white flex justify-between px-2 mt-1'
  const semiTitle='text-gray-600 text-sm  '
  const boldTitle='text-md font-bold'
  return (
    <NavLink to={'http://localhost:5173/hotel'} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="relative">
        <img src={Hotels} className="w-full h-64 rounded-xl object-cover" alt="Hotel" />
      </div>
      <div className= {`${base}`} >
        <p className= {`${boldTitle}`}>{hotelName}</p>
        <p className="text-gray-600 bg-slate-200 px-3 rounded-lg font-bold">{rating}</p>
      </div>
      <div className= {`${base}`} >
         <p className= {`${semiTitle}`}>{star}-star hotel .<span>{location}</span></p>
         <p className={`${semiTitle}`} >{ratingCount}+ ratings </p>
      </div>

      <div className="px-2">
          <span className={boldTitle}>{basePrice}</span>
           <span className={`${semiTitle}`}> + {tax} tax</span>
           <span className={semiTitle}> /night</span>
     </div>
      
     <div className="px-2">
          <span className={semiTitle}><s>{totalPrice}</s></span>
          <span className={`${semiTitle}`}> {off} % off</span>
          <span className="text-sm"> + Additional bank discounts </span>
     </div>
       
    </NavLink>
  );
}
export default Hotelcard;
