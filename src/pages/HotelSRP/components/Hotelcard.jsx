import React from 'react';
import Hotels from '../../../assets/images/Hotels.webp';
import { NavLink } from 'react-router-dom';

function Hotelcard() {
  const base='bg-white flex justify-between px-2 mt-1'
  const semiTitle='text-gray-600 text-sm  '
  const boldTitle='text-md font-bold'
  return (
    <NavLink to={'https://www.google.com'} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 5 p-4">
      <div className="relative">
        <img src={Hotels} className="w-full h-64 rounded-xl" alt="Hotel" />
      </div>
      <div className= {`${base}`} >
        <p className= {`${boldTitle}`}>Zone Connect Calangute</p>
        <p className="text-gray-600 bg-slate-200 px-3 rounded-lg font-bold">3.9</p>
      </div>
      <div className= {`${base}`} >
         <p className= {`${semiTitle}`}>4-star hotel .<span>Saligao</span></p>
         <p className={`${semiTitle}`} >150+ ratings </p>
      </div>

      <div className="px-2">
          <span className={boldTitle}>4750</span>
           <span className={`${semiTitle}`}> + ₹ 1313 tax</span>
           <span className={semiTitle}> /night</span>
     </div>
      
     <div className="px-2">
          <span className={semiTitle}><s>4990</s></span>
          <span className={`${semiTitle}`}> 15 % off</span>
          <span className="text-sm"> + Additional bank discounts </span>
     </div>
       
    </NavLink>
  );
}
export default Hotelcard;
