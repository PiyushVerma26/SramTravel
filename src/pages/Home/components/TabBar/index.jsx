import { NavLink } from 'react-router-dom'
import { RiHotelLine as HotelIcon } from 'react-icons/ri'
import { TbPlaneInflight as FlightIcon } from 'react-icons/tb'
import { IoIosCar as TransportationIcon } from 'react-icons/io'

function TabBar() {
  const base = 'flex flex-row items-center text-md text-center gap-1 py-1 px-2 rounded-3xl'
  const active = ' border border-transparent bg-blue-700 text-white'
  const nonActive = 'text-white hover:border-white border border-gray-400'

  return (
    <div className='flex md:flex-row  items-center flex-wrap gap-1  md:gap-3 py-2  z-10'>
      <NavLink
        to={'/hotel'}
        className={({ isActive }) => {
          return `${base} ${isActive ? active : nonActive}`
        }}
      >
        <HotelIcon className='text-md' /> Hotels
      </NavLink>

      <NavLink
        to={'/flight'}
        className={({ isActive }) => {
          return `${base} ${isActive ? active : nonActive}`
        }}
      >
        <FlightIcon className='text-md' /> Flights
      </NavLink>

      <NavLink
        to={'/transportation'}
        className={({ isActive }) => {
          return `${base} ${isActive ? active : nonActive}`
        }}
      >
        <TransportationIcon className='text-md' />
        Transportation
      </NavLink>
    </div>
  )
}

export default TabBar
