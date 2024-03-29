import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='bg-blue-800 text-white text-lg font-customFont'>
        <div className='flex md:gap-96 md:px-32 px-2 py-8 gap-4 flex-wrap md:flex-row flex-col'>
          <h1 className='font-semibold  md:px-24 text-2xl px-16 text-nowrap'>Sram Travels</h1>
          <div className='flex flex-col gap-2 tracking-wide'>
            <p className='cursor-pointer hover:underline'>Help</p>
            <p className='cursor-pointer hover:underline'>Privacy Settings</p>
            <p className='cursor-pointer hover:underline'>Log In</p>
          </div>
          <div className='flex flex-col gap-2 tracking-wide'>
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
      </div>
    </>
  )
}

export default Footer
