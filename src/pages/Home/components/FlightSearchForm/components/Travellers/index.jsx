import { useEffect, useState } from 'react'
import Dropdown from '../../../../../../atoms/Dropdown'
import OptionDropdown from '../../../../../../atoms/OptionDropdown'
import LabelInput from '../../../../../../components/LabelInput'
import { FaPlus as PlusIcon } from 'react-icons/fa'
import { FaMinus as MinusIcon } from 'react-icons/fa'

function TravellersCount({ traveller, count, onCountChange }) {
  function addTraveller() {
    onCountChange((count) => {
      if (count < 9) return count + 1
      return count
    })
  }

  function removeTraveller() {
    onCountChange((count) => {
      if (count > 0) return count - 1
      return count
    })
  }

  return (
    <div className='flex justify-between px-2 py-3'>
      <h1>{traveller}</h1>
      <div className='flex gap-2 items-center'>
        <MinusIcon className='cursor-pointer' onClick={removeTraveller} />
        <span className='bg-black w-6 rounded-lg text-white text-center text-lg'>{count}</span>
        <PlusIcon className='cursor-pointer' onClick={addTraveller} />
      </div>
    </div>
  )
}

export default function Travellers({ labelText, labelStyles, onTravellersChange, containerStyles }) {
  // Todo: add in constants
  const CabinClassOption = ['Economy', 'Premium Economy', 'Business Class', 'First Class']

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedCabinClass, setSelectedCabinClass] = useState(CabinClassOption[0])
  const [adultCount, setAdultCount] = useState(1)
  const [childrenCount, setChildrenCount] = useState(0)
  const [infantCount, setInfantCount] = useState(0)

  const totalTravellers = adultCount + childrenCount + infantCount
  const travellerInputText = `${totalTravellers} Traveller${totalTravellers > 1 ? 's' : ''}, ${selectedCabinClass} `
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  function onCabinClassSelect(option) {
    setSelectedCabinClass(option)
  }

  useEffect(() => {
    onTravellersChange({
      cabinClass: selectedCabinClass,
      travellersCount: {
        adults: adultCount,
        children: childrenCount,
        infant: infantCount,
      },
    })
  }, [selectedCabinClass, adultCount, childrenCount, infantCount])

  return (
    <div className={`${containerStyles ? containerStyles : ''}`}>
      <LabelInput
        input={travellerInputText}
        labelText={labelText}
        labelStyles={labelStyles}
        isReadOnly={true}
        inputStyles='cursor-pointer'
        onClick={toggleDropdown}
      />
      <Dropdown isOpen={isDropdownOpen} styles='w-full' setOpen={setIsDropdownOpen}>
        <OptionDropdown
          labelText='Cabin Class'
          selected={selectedCabinClass}
          options={CabinClassOption}
          onSelect={onCabinClassSelect}
        />
        <TravellersCount traveller='Adults' count={adultCount} onCountChange={setAdultCount} />
        <TravellersCount traveller='Children' count={childrenCount} onCountChange={setChildrenCount} />
        <TravellersCount traveller='Infants' count={infantCount} onCountChange={setInfantCount} />
      </Dropdown>
    </div>
  )
}
