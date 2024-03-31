import React from 'react'
import { NavLink } from 'react-router-dom'

function FlightCard() {
  return (
    <div className='flex md:ml-48 h-52'>
      <div className='sm:h-48 h-24 flex sm:w-[840px] items-center sm:ml-60 ml-2 shadow-xl m-2 border border-white-900 rounded-md'>
        <div className='flex md:gap-2 gap-0 md:flex-row flex-col'>
          <img
            className='bg-contain md:h-[39px] md:w-[39px] h-[10px] w-[30px] flex-nowrap'
            style={{
              backgroundImage:
                'url(' + 'https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=18' + ')',
              // height: '50px',
              // width: '50px',
            }}
          />
          <div className='flex md:flex-col'>
            <h1 className='text-lg md:px-0 px-14 font-semibold'>Indigo</h1>
            <p className='text-gray-500 text-sm md:visible invisible'>6E 415</p>
          </div>
          <div className='flex md:py-0 py-5'>
            <div className=''>
              <h1 className='md:px-24 font-bold md:text-2xl text-lg'>1:30</h1>
              <p className='md:px-24 md:text-xs text-[9px] mr-6'>New Delhi</p>
            </div>
            <div className='text-xs flex flex-col text-nowrap items-center'>
              <h1 className='mr-2'>2h</h1>
              <h2 className='mr-22'>-------{'>'}</h2>
              <h2 className='text-[9px]'>Non Stop</h2>
            </div>
            <div>
              <h1 className='md:px-24 font-bold md:text-2xl text-lg ml-4'>4:00</h1>
              <p className='md:px-24 text-xs ml-4'>Bengaluru</p>
            </div>
          </div>
        </div>
        <div className='mb-8'>
          <h1 className='mb-4 bg-yellow-300 p-4 px-8 rounded-b-lg cursor-pointer font-semibold md:text-2xl text-lg text-nowrap'>
            ₹ 4,950
          </h1>
          <p className='md:text-sm px-4 text-[9px] text-nowrap'>Baggage Upto 23kg</p>
          <p className='md:text-sm px-4 text-[9px] text-nowrap'>Seats left</p>
          <p className='md:text-sm px-4 text-[9px] text-nowrap'>Total flight time</p>
          <p className='md:text-sm px-4 text-[9px] text-nowrap'>Flight</p>
        </div>
        {/* <NavLink to='/flight'> */}
        {/*   <button className='ml-3 md:px-10 py-3 border-2 border-blue-800 rounded-2xl bg-cyan-200 text-blue-700 font-semibold md:visible invisible'> */}
        {/*     BOOK NOW */}
        {/*   </button> */}
        {/* </NavLink> */}
      </div>
    </div>
  )
}

export default FlightCard
