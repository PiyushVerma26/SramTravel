import React, { useEffect, useState } from 'react'
import Dropdown from '/src/atoms/Dropdown'
import LabelInput from '../../../../components/LabelInput'

export default function LocationInput({
  intialSelectedDestination,
  error,
  containerStyles,
  labelStyles,
  dropdownStyles,
  labelText,
  inputPlaceholder,
  getResponse,
  onLocationSelect,
  renderList,
}) {
  const [response, setResponse] = useState()
  const [input, setInput] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedDestination, setSelectedDestination] = useState(null)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  useEffect(() => {
    if (!input) return
    async function getData() {
      const data = await getResponse(input)
      setResponse(data.airports)
    }
    const timeout = setTimeout(() => {
      getData()
    }, 250)
    return () => {
      clearTimeout(timeout)
    }
  }, [input])

  useEffect(() => {
    if (!selectedDestination) {
      setInput('')
      return
    }
    setInput(`${selectedDestination.city_fullname} (${selectedDestination.CityCode})`)
  }, [selectedDestination])

  useEffect(() => {
    setSelectedDestination(intialSelectedDestination)
  }, [intialSelectedDestination])

  function onUserInput(e) {
    setInput(e.target.value)
  }

  function onLocationPick(dest) {
    onLocationSelect(dest)
    setIsDropdownOpen(false)
    setSelectedDestination(dest)
  }

  return (
    <div className={`${containerStyles}`}>
      <LabelInput
        input={input}
        error={error}
        onChange={onUserInput}
        onClick={toggleDropdown}
        labelStyles={labelStyles}
        labelText={labelText}
        inputPlaceholder={inputPlaceholder}
      />
      <Dropdown isOpen={isDropdownOpen} setOpen={setIsDropdownOpen} styles={dropdownStyles}>
        {response && <ul className={`py-4`}>{response && response.map((dest) => renderList(dest, onLocationPick))}</ul>}
      </Dropdown>
    </div>
  )
}
