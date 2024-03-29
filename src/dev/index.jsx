import { NavLink } from 'react-router-dom'
import { devRoutes } from './devRoutes'

export default function Dev() {
  return (
    <div className='flex gap-4 p-6'>
      {devRoutes.map((route) => {
        return (
          <NavLink to={route.name} key={route.name} className='bg-black text-white rounded-lg px-4'>
            {route.name}
          </NavLink>
        )
      })}
    </div>
  )
}
