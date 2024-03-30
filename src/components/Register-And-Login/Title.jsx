import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
function Title({ title }) {
  return (
    <div className='flex flex-row   items-center justify-center font-bold text-2xl mb-7'>
      <FaUserCircle className='mr-2' />
      <h1>{title}</h1>
    </div>
  )
}

export default Title
