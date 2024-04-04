import { useEffect, useRef, useState } from 'react'
import LocationInput from '../../common/LocationInput'
import { GoArrowSwitch as ArrowIcons } from 'react-icons/go'
import DatePicker from '../../common/DatePicker'
import Switch from '../../../../atoms/Switch'
import Travellers from './components/Travellers'
import FlightList from './components/FlightList'

export default function FlightSearchForm() {
  const [isOneway, setIsOneway] = useState(true)
  const [selectedDestinations, setSelectedDestinations] = useState({ from: null, to: null })
  const [dates, setDates] = useState()
  const [travellers, setTravellers] = useState({
    cabinClass: 'Economy',
    travellersCount: {
      adults: 1,
      children: 0,
      infant: 0,
    },
  })

  const [destErrors, setDestErrors] = useState({ from: null, to: null })

  const swapIconRef = useRef()
  function onFromCitySelect(dest) {
    const newRoutes = { ...selectedDestinations, from: dest }
    setSelectedDestinations(newRoutes)
  }

  function onToCitySelect(dest) {
    const newRoutes = { ...selectedDestinations, to: dest }
    setSelectedDestinations(newRoutes)
  }

  function onSwap() {
    const newRoutes = { from: selectedDestinations.to, to: selectedDestinations.from }
    setSelectedDestinations(newRoutes)
    swapIconRef.current.classList.toggle('rotate-180')
  }

  function onSwitch() {
    setIsOneway((isOneway) => {
      return !isOneway
    })
  }

  function onPickDate(dates) {
    setDates(dates)
  }

  // Todo: add in constants
  const URL =
    'https://www.abengines.com/wp-content/plugins/adivaha/apps/modules/adivaha-fly-smart/apiflight_update_rates.php?action=getLocations&limit=5&locale=en&term='
  async function getFlightDestinations(input) {
    const response = await fetch(`${URL}${input}`)
    const data = await response.json()
    return data
  }

  function renderFlightList(dest, onLocationPick) {
    return <FlightList key={dest.code} dest={dest} onLocationPick={onLocationPick} />
  }

  function onSubmit() {
    if (!selectedDestinations.from) {
      setDestErrors((destErrors) => {
        return { ...destErrors, from: 'This field is required' }
      })
    }
    if (!selectedDestinations.to) {
      setDestErrors((destErrors) => {
        return { ...destErrors, to: 'This field is required' }
      })
    }
    if (selectedDestinations.from && selectedDestinations.to) {
      console.log({ isOneway, selectedDestinations, dates, travellers })
    }
  }

  useEffect(() => {
    if (destErrors.from && selectedDestinations.from) {
      setDestErrors((destErrors) => {
        return { ...destErrors, from: null }
      })
    }
    if (destErrors.to && selectedDestinations.to) {
      setDestErrors((destErrors) => {
        return { ...destErrors, to: null }
      })
    }
  }, [selectedDestinations])

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-2 text-white'>
        <span>One Way</span>
        <Switch onSwitch={onSwitch} />
        <span>Return</span>
      </div>
      <div className='flex rounded-2xl w-full h-max flex-col gap-1 lg:flex-row'>
        <div className='relative w-full'>
          <LocationInput
            intialSelectedDestination={selectedDestinations.from}
            error={destErrors.from}
            labelText={'From'}
            inputPlaceholder={'Country, city or Airport'}
            labelStyles='rounded-tl-2xl rounded-tr-2xl lg:rounded-bl-2xl lg:rounded-tr-none'
            containerStyles='w-full'
            dropdownStyles='min-w-full max-w-full'
            getResponse={getFlightDestinations}
            onLocationSelect={onFromCitySelect}
            renderList={renderFlightList}
          />
          <div
            ref={swapIconRef}
            className='absolute w-12 h-12 right-6 bg-white border-2 border-blue-950 flex justify-center items-center rounded-full -translate-y-2/4 transition-all duration-500 lg:left-full lg:top-0 lg:-translate-x-2/4 lg:translate-y-2/4 lg:w-9 lg:h-9 lg:border'
          >
            <ArrowIcons className='text-blue-950 text-xl cursor-pointer lg:text-base' onClick={onSwap} />
          </div>
        </div>
        <LocationInput
          intialSelectedDestination={selectedDestinations.to}
          error={destErrors.to}
          labelText={'To'}
          inputPlaceholder={'Country, city or Airport'}
          containerStyles='w-full'
          dropdownStyles='min-w-full max-w-full'
          getResponse={getFlightDestinations}
          onLocationSelect={onToCitySelect}
          renderList={renderFlightList}
        />
        <div className='flex gap-1 max-w-full'>
          <DatePicker
            isRangeSelector={isOneway ? false : true}
            inputStyles='cursor-pointer'
            labelText={isOneway ? 'Depart' : 'Depart - Return'}
            labelStyles='text-nowrap rounded-bl-2xl lg:rounded-bl-none'
            inputPlaceholder={`Add Date${isOneway ? '' : 's'}`}
            containerStyles='w-[calc(50%-2px)]'
            dropdownStyles=''
            onPickDate={onPickDate}
          />
          <Travellers
            labelText='Travellers'
            labelStyles='rounded-br-2xl lg:rounded-tr-2xl'
            containerStyles='w-[calc(50%-2px)]'
            dropdownStyles='-translate-x-[20%] w-[125%] sm:-translate-x-0 sm:w-full'
            onTravellersChange={setTravellers}
          />
        </div>
        <button
          onClick={onSubmit}
          className='w-full min-w-24 bg-blue-700 text-white py-2 rounded-lg text-xl font-bold mt-10 self-center lg:mt-0 lg:h-16 lg:font-semibold lg:text-base lg:max-w-24 xl:ml-2'
        >
          Search
        </button>
      </div>
    </div>
  )
}
