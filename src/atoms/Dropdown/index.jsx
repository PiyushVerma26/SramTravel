import { useEffect, useRef } from 'react'

const Dropdown = ({ isOpen, setOpen, children, styles }) => {
  const dropdownRef = useRef(null)

  function handleOutsideClick(e) {
    if (isOpen && !dropdownRef.current?.contains(e.target)) {
      setOpen(false)
    }
  }

  useEffect(() => {
    if (isOpen) window.addEventListener('mousedown', handleOutsideClick)
    return () => {
      window.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isOpen])

  if (!isOpen) return null
  return (
    <div className={`relative text-left z-10 ${styles}`} ref={dropdownRef}>
      <div className={`absolute rounded-md shadow-lg bg-white ${styles}`} role='menu' aria-orientation='vertical'>
        {children}
      </div>
    </div>
  )
}

export default Dropdown
