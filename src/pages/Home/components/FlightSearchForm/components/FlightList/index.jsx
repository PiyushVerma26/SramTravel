import React from 'react'
import { TbPlaneInflight as FlightIcon } from 'react-icons/tb'

export default function FlightList({ dest, onLocationPick }) {
  return (
    <li className='px-4 py-2 cursor-pointer' onClick={() => onLocationPick(dest)}>
      <div className='flex w-full gap-4'>
        <div className='self-center text-2xl'>
          <FlightIcon />
        </div>
        <h1>
          {dest.city_fullname} ({dest.CityCode})
        </h1>
      </div>
    </li>
  )
}
