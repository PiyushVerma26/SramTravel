import React from 'react'
import { CgDanger as DangerIcon } from 'react-icons/cg'

const InputError = ({ name, styles }) => {
  const errorStyles = `flex flex-row items-center gap-2 p-2 text-black text-black bg-yellow-400 w-full   ${styles}`
  return (
    <div className={errorStyles}>
      <DangerIcon className='text-xl' />
      <p>{name} is required</p>
    </div>
  )
}

export default InputError
