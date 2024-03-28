import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='bg-blue-800 text-white text-lg font-customFont'>
        <div className='flex gap-10 px-32 py-8'>
          <h1 className='font-semibold mr-96 text-2xl'>Sram Travels</h1>
          <div className='flex flex-col gap-2 ml-64 tracking-wide'>
            <p className='cursor-pointer hover:underline'>Help</p>
            <p className='cursor-pointer hover:underline'>Privacy Settings</p>
            <p className='cursor-pointer hover:underline'>Log In</p>
          </div>
          <div className='flex flex-col gap-2 ml-64 tracking-wide'>
            <p className='cursor-pointer hover:underline'>Cookie Policy</p>
            <p className='cursor-pointer hover:underline'>Privacy Policy</p>
            <p className='cursor-pointer hover:underline'>Terms of Service</p>
            <p className='cursor-pointer hover:underline'>Company Details</p>
          </div>
        </div>
        <div className='flex flex-col items-center text-sm'>
          <p>Cheap flight booking from anywhere, to everywhere</p>
          <p>© Sram Travels Limited 2024</p>
        </div>
      </div>
    </>
  )
}

export default Footer
