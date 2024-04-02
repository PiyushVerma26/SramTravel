import React from 'react'

const FlightCardShimmer = () => {
  return (
    <>
      <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl'>
        <div className='px-6 py-4'>
          <div className='animate-pulse flex space-x-4'>
            <div className='h-20 w-20 bg-gray-200 rounded-full'></div>
            <div className='flex-1 space-y-4 py-1'>
              <div className='h-3 bg-gray-200 rounded w-5/6'></div>
              <div className='h-3 bg-gray-200 rounded w-4/6'></div>
              <div className='h-3 bg-gray-200 rounded w-3/6'></div>
              {/* <div className='h-4 bg-gray-200 rounded w-5/6'></div> */}
            </div>
            <div>
              <div className='h-14 mb-2 bg-gray-200 rounded w-[120px]'></div>
              <div className='h-4 bg-gray-200 rounded w-[120px]'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-md mx-auto mt-4 mb-4 bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl'>
        <div className='px-6 py-4'>
          <div className='animate-pulse flex space-x-4'>
            {/* <div className='h-20 w-20 bg-gray-200 rounded-full'></div> */}
            <div className='flex-1 space-y-4 py-1'>
              <div className='h-3 bg-gray-200 rounded w-5/6'></div>
              <div className='h-3 bg-gray-200 rounded w-4/6'></div>
              <div className='h-3 bg-gray-200 rounded w-3/6'></div>
              {/* <div className='h-4 bg-gray-200 rounded w-5/6'></div> */}
            </div>
            <div>
              <div className='h-14 mb-2 bg-gray-200 rounded w-[120px]'></div>
              <div className='h-4 bg-gray-200 rounded w-[120px]'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FlightCardShimmer
