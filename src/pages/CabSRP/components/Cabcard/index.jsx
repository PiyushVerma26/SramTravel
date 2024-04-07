import React from 'react'
import { RiUserFill as User } from 'react-icons/ri'
import { BsFillLuggageFill as Luggage } from 'react-icons/bs'
import { GiCoolSpices as Cool } from 'react-icons/gi'
import { TbAutomaticGearbox as Type } from 'react-icons/tb'
import { BiCurrentLocation as Location } from 'react-icons/bi'
import { FaCarRear as Cab } from 'react-icons/fa6'

function Cabcard({
  name,
  door,
  classes,
  user,
  luggage,
  cooling,
  type,
  location,
  img,
  dealCount,
  basePrice,
  finalPrice,
  cancellationType,
}) {
  const base =
    'flex flex-col sm:flex-row justify-center h-auto bg-white shadow-lg border-2 border-gray-300 rounded-xl divide-y sm:divide-x divide-gray-300 w-full sm:w-auto'
  const features = 'bg-slate-300 px-3 text-md text-black flex items-center flex-row rounded-md gap-1'
  return (
    <div className={`${base}`}>
      <div className='flex flex-col justify-between p-4  md:w-1/3'>
        <div>
          <p className='font-bold text-xl tracking-wide'>{name}</p>
          <p>
            or similar . {door} doors .{classes}
          </p>
        </div>
        <div className='flex flex-wrap gap-1 md:w-56 w-full'>
          <span className={`${features}`}>
            <User /> {user}
          </span>
          <span className={`${features}`}>
            <Luggage /> {luggage}
          </span>
          <span className={`${features}`}>
            <Cool /> {cooling}
          </span>
          <span className={`${features}`}>
            <Type /> {type}
          </span>
        </div>
        <p className='flex gap-2 items-center'>
          <Location />
          {location}
        </p>
      </div>

      <div className='w-full sm:w-auto'>
        <img src={img} alt='car' className='h-auto w-full object-contain sm:h-full sm:w-full' />
      </div>

      <div className='flex flex-col justify-between px-6 py-3 md:w-1/3'>
        <div>
          <p className='font-bold text-md tracking-wide text-slate-600 mb-3'>{dealCount} deal</p>
          <s className='text-md'>{basePrice}</s>
          <p className='font-semibold text-lg'>
            {finalPrice} <sub>total</sub>
          </p>
          <span className='text-md flex items-center gap-2'>
            <Cab /> {cancellationType}
          </span>
        </div>
        <button className='bg-blue-950 text-white p-3 mt-2 rounded-lg text-sm sm:text-md font-semibold'>
          View Details
        </button>
      </div>
    </div>
  )
}

export default Cabcard
