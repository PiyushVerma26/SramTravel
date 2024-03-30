import React from 'react';
import { CgDanger as DangerIcon } from 'react-icons/cg';  

const InputError = ({ errors='This Field is reuired', styles }) => {
  const defaultStyles = {
    container: 'flex flex-row items-center gap-2 p-2 text-black',
    color:'text-black',
    bg:'bg-yellow-400',
    w:'100%'
  }; 
  const errorStyles = { ...defaultStyles, ...(styles || {}) };

  const classNames = Object.keys(errorStyles)
    .map((key) => errorStyles[key])
    .join(' ');

  return (
    <div className={classNames}>
      <DangerIcon className="text-xl" />
      <p>{errors}</p>
    </div>
  );
};

export default InputError;
