import { useState } from 'react'
import Dropdown from '../Dropdown'
import { RiArrowDropDownLine as DropdownIcon } from 'react-icons/ri'

function Option({ opt, onSelect, isSelected }) {
  return (
    <li
      className={`px-2 py-3 cursor-pointer ${isSelected ? 'bg-gray-200' : ''}`}
      role='option'
      aria-selected={isSelected}
      onClick={() => {
        onSelect(opt)
      }}
    >
      {opt}
    </li>
  )
}

export default function OptionDropdown({ labelText, selected, options, onSelect, containerStyles, labelStyles }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  function toggleDropdown(e) {
    setIsDropdownOpen(!isDropdownOpen)
  }

  function onOptionSelect(opt) {
    onSelect(opt)
    setIsDropdownOpen(false)
  }

  return (
    <div className={`py-6 ${containerStyles ? containerStyles : ''}`}>
      <div className='flex flex-col gap-2 cursor-pointer'>
        <h1>{labelText}</h1>
        <button
          type='button'
          className='border rounded-lg w-full flex justify-between items-center p-2 text-gray-700'
          aria-haspopup='listbox'
          aria-expanded={isDropdownOpen}
          onClick={toggleDropdown}
        >
          <h2 className={`${labelStyles ? labelStyles : ''}`}>{selected}</h2>
          <DropdownIcon />
        </button>
      </div>
      <Dropdown isOpen={isDropdownOpen} setOpen={setIsDropdownOpen} styles='w-full'>
        <ul role='listbox'>
          {options.map((opt) => {
            return <Option opt={opt} onSelect={onOptionSelect} isSelected={opt === selected} key={opt} />
          })}
        </ul>
      </Dropdown>
    </div>
  )
}
