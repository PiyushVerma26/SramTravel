import React from 'react'

const FlightCardShimmer = () => {
  return (
    <>
      <h1 className='text-center'>Flight Shimmer</h1>
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
      <h1 className='text-center'>Hotel Shimmer</h1>
      <div className='max-w-md mx-auto mt-4 mb-4 bg-white rounded-xl shadow-md overflow-hidden md:max-w-sm'>
        <div className='pl-10 py-4'>
          <div className='animate-pulse flex flex-col '>
            <div className='h-40 mb-4 bg-gray-200 rounded w-5/6'></div>
            <div className='h-4 mb-2 bg-gray-200 rounded w-5/6'></div>
            <div className='h-4 mb-2 bg-gray-200 rounded w-4/6'></div>
            <div className='h-4 mb-2 bg-gray-200 rounded w-3/6'></div>
          </div>
        </div>
      </div>

      <h1 className='text-center'>Cab Shimmer</h1>
      <div className='max-w-md mx-auto mt-4 mb-4 bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl'>
        <div className='px-6 py-4'>
          <div className='animate-pulse flex md:flex-row flex-col gap-4 md:space-x-4'>
            <div>
              <div className='h-6 mb-8 bg-gray-200 rounded  md:w-[250px]'></div>
              <div className='h-6 mb-8 bg-gray-200 rounded w-5/6'></div>
              <div className='h-6 mb-2 bg-gray-200 rounded w-4/6'></div>
            </div>
            <div className='h-40 mb-4 bg-gray-200 rounded md:w-[250px]'></div>
            <div>
              <div className='h-6 mb-8 bg-gray-200 rounded md:w-[250px]'></div>
              <div className='h-6 mb-8 bg-gray-200 rounded w-5/6'></div>
              <div className='h-6 mb-2 bg-gray-200 rounded w-4/6'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FlightCardShimmer
