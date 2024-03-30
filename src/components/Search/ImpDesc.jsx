import React from 'react'

function ImpDesc({ children }) {
  return (
    <div className='border-black border-2  h-26 bg-white text-black px-6 py-3  flex flex-row justify-center items-center gap-2   text-lg'>
      {children}
    </div>
  )
}

export default ImpDesc
