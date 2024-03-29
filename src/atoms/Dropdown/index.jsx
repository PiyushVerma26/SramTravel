import { useState } from 'react'

const Dropdown = ({ children, Trigger, styles }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`relative inline-block text-left ${styles}`}>
      <button type='button' onClick={toggleDropdown} aria-haspopup='true' aria-expanded={isOpen}>
        <Trigger />
      </button>

      {isOpen && (
        <div className={`absolute rounded-md shadow-lg bg-white ${styles}`} role='menu' aria-orientation='vertical'>
          {children}
        </div>
      )}
    </div>
  )
}

export default Dropdown
