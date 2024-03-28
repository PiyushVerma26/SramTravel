import { NavLink, useLocation } from 'react-router-dom'
import { IoIosBed, IoIosJet, IoIosCar } from 'react-icons/io'

function TabBar() {
  const location = useLocation()

  return (
    <div className='flex md:flex-row  items-center flex-wrap gap-1  md:gap-3 py-2  z-10'>
      <NavLink
        to={'/hotel'}
        className={`flex flex-row items-center text-md text-center gap-1 md:p-3 py-2 px-1 ${
          location.pathname === '/hotel' || location.pathname === '/'
            ? 'font-bold  border-black  bg-white text-black rounded-xl md:py-3.5 py-2.5'
            : 'text-white  hover:border-white  border-2  rounded-lg border-gray-400'
        }`}
      >
        <IoIosBed className='text-md' /> Hotels
      </NavLink>

      <NavLink
        to={'/flight'}
        className={({ isActive }) =>
          ` flex flex-row items-center text-md text-center gap-1 md:p-3 p-2 ${
            isActive
              ? 'font-bold  border-black  bg-white text-black rounded-xl md:py-3.5 py-2.5'
              : 'text-white  hover:border-white  border-2  rounded-lg border-gray-400'
          }`
        }
      >
        <IoIosJet className='text-md' /> Flights
      </NavLink>

      <NavLink
        to={'/transportation'}
        className={({ isActive }) =>
          ` flex flex-row items-center text-md text-center gap-1 md:p-3 p-2 ${
            isActive
              ? 'font-bold  border-black  bg-white text-black rounded-xl md:py-3.5 py-2.5 px-1'
              : 'text-white  hover:border-white  border-2  rounded-lg border-gray-400'
          }`
        }
      >
        <IoIosCar className='text-md' />
        Transportation
      </NavLink>
    </div>
  )
}

export default TabBar
