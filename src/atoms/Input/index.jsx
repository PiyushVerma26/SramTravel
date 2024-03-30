import React from 'react'
import InputError from '../InputError'

const FormInput = ({
  name = '',
  label = '',
  register,
  errors,
  styles,
  labelColor = 'text-white',
  errorBg = 'bg-green-200',
}) => {
  const baseStyle = `bg-gray-200 text-black rounded-md border-none w-64 px-4 h-14 text-black text-xl ${styles}`
  const Color = labelColor
  return (
    <div className='flex flex-col justify-center flex-1 max-w-64'>
      <label className={`font-bold text-xl mb-3 ${Color}`} htmlFor={name}>
        {label}
      </label>
      {errors[name] && <InputError name={name} styles={errorBg} />}
      <input
        type='text'
        placeholder={`Enter ${label}`}
        {...(register ? register(name, { required: true }) : {})}
        className={baseStyle}
      />
    </div>
  )
}

export default FormInput
