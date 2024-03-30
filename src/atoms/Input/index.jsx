import React from 'react';
import InputError from '../InputError';
const FormInput = ({ name = '', label = '', register, errors = 'This Field is Required', styles }) => {
  const baseStyle = {
    fontSize: 'text-xl',
    labelColor: 'text-white',
    h: 'h-14',
    px: 'px-4',
    w: 'w-64',
    border: 'border-none',
    rounded: 'rounded-md',
    text: 'text-black',
    bg: 'bg-gray-200',
  };
  

  const Errorstyle={
    bg:'bg-green-200'
  }
  const inputStyles = { ...baseStyle, ...(styles || {}) };
  const inputClassNames = Object.values(inputStyles).join(' ');

  return (
    <div className="flex flex-col justify-center flex-1">
      <label className={`font-bold text-xl mb-3 ${inputStyles.labelColor}`} htmlFor={name}>
        {label}
      </label>
      {errors && <InputError errors={errors} styles={ Errorstyle} />}
      <input
        type="text"
        placeholder={`Enter ${label}`}
        {...(register ? register(name, { required: true }) : {})}
        className={inputClassNames}
      />
    </div>
  );
};

export default FormInput;
