import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className='bg-blue-950 text-white text-lg  font-customFont'>
      <div className='flex  md:px-32 px-2 py-8 gap-8 md:flex-row flex-col justify-around'>
        <div className='flex flex-col  lg:ml-52 gap-2 text-nowrap'>
          <p className='cursor-pointer hover:underline'>Help</p>
          <p className='cursor-pointer hover:underline'>Privacy Settings</p>
          <p className='cursor-pointer hover:underline'>Log In</p>
        </div>
        <div className='flex flex-col  gap-2 tracking-wide text-nowrap'>
          <p className='cursor-pointer hover:underline'>Cookie Policy</p>
          <p className='cursor-pointer hover:underline'>Privacy Policy</p>
          <p className='cursor-pointer hover:underline'>Terms of Service</p>
          <p className='cursor-pointer hover:underline'>Company Details</p>
        </div>
      </div>
      <div className='flex flex-col md:items-center text-sm px-2 py-2'>
        <p>Cheap flight booking from anywhere, to everywhere</p>
        <p> © Sram Travels Limited 2024</p>
      </div>
    </footer>
  )
}

export default Footer
