import React, { useEffect, useState } from 'react'
import FilterResuable from './FilterResuable'
import {
  popularFilter,
  hotelType,
  Facilities,
  ratingType,
  bedPreference,
  reviewScore,
  roomFacilities,
  meals,
} from '../../JS_Objects/FilterOption.js'
import { useDispatch } from 'react-redux'
import { searchHotel } from '../../Features/SearchHotelSlice.js'

function Filter() {
  const [checkedItems, setCheckedItems] = useState([])

  const handleCheckboxChange = (value) => {
    if (checkedItems.includes(value)) {
      setCheckedItems(checkedItems.filter((item) => item !== value))
    } else {
      setCheckedItems([...checkedItems, value])
    }
  }

  const dispatch = useDispatch()
  useEffect(() => {
    console.log(checkedItems)
    dispatch(searchHotel(checkedItems))
  }, [setCheckedItems])

  return (
    <div className='flex flex-col border-2 p-2 px-4 border-grey h-auto min-w-72'>
      <h1 className='font-bold  my-2'>Popular Filters</h1>

      {popularFilter.map((option) => (
        <FilterResuable key={option.label}>
          <input
            type='checkbox'
            value={option.value}
            name={option.label}
            onChange={() => handleCheckboxChange(option.value)}
            checked={checkedItems.includes(option.value)}
          />
          <label htmlFor={option.label}>{option.label}</label>
        </FilterResuable>
      ))}
      <h1 className='font-bold  my-2'>Hotels Type</h1>
      {hotelType.map((option) => (
        <FilterResuable key={option.label}>
          <input
            type='checkbox'
            value={option.value}
            name={option.label}
            onChange={() => handleCheckboxChange(option.value)}
            checked={checkedItems.includes(option.value)}
          />
          <label htmlFor={option.label}>{option.label}</label>
        </FilterResuable>
      ))}

      <h1 className='font-bold  my-2'>Facilities</h1>
      {Facilities.map((option) => (
        <FilterResuable key={option.label}>
          <input
            type='checkbox'
            value={option.value}
            name={option.label}
            onChange={() => handleCheckboxChange(option.value)}
            checked={checkedItems.includes(option.value)}
          />
          <label htmlFor={option.label}>{option.label}</label>
        </FilterResuable>
      ))}
      <h1 className='font-bold  my-2'>Room Facilities</h1>
      {roomFacilities.map((option) => (
        <FilterResuable key={option.label}>
          <input
            type='checkbox'
            value={option.value}
            name={option.label}
            onChange={() => handleCheckboxChange(option.value)}
            checked={checkedItems.includes(option.value)}
          />
          <label htmlFor={option.label}>{option.label}</label>
        </FilterResuable>
      ))}
      <h1 className='font-bold  my-2'>Rating type</h1>
      {ratingType.map((option) => (
        <FilterResuable key={option.label}>
          <input
            type='checkbox'
            value={option.value}
            name={option.label}
            onChange={() => handleCheckboxChange(option.value)}
            checked={checkedItems.includes(option.value)}
          />
          <label htmlFor={option.label}>{option.label}</label>
        </FilterResuable>
      ))}

      <h1 className='font-bold  my-2'>Bed Preference</h1>
      {bedPreference.map((option) => (
        <FilterResuable key={option.label}>
          <input
            type='checkbox'
            value={option.value}
            name={option.label}
            onChange={() => handleCheckboxChange(option.value)}
            checked={checkedItems.includes(option.value)}
          />
          <label htmlFor={option.label}>{option.label}</label>
        </FilterResuable>
      ))}
      <h1 className='font-bold  my-2'>Meals</h1>
      {meals.map((option) => (
        <FilterResuable key={option.label}>
          <input
            type='checkbox'
            value={option.value}
            name={option.label}
            onChange={() => handleCheckboxChange(option.value)}
            checked={checkedItems.includes(option.value)}
          />
          <label htmlFor={option.label}>{option.label}</label>
        </FilterResuable>
      ))}
      <h1 className='font-bold  my-2'>Review score</h1>
      {reviewScore.map((option) => (
        <FilterResuable key={option.label}>
          <input
            type='checkbox'
            value={option.value}
            name={option.label}
            onChange={() => handleCheckboxChange(option.value)}
            checked={checkedItems.includes(option.value)}
          />
          <label htmlFor={option.label}>{option.label}</label>
        </FilterResuable>
      ))}
    </div>
  )
}

export default React.memo(Filter)
