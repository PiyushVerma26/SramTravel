import React, { useEffect, useState } from 'react'
import LabelInput from '../../../../components/LabelInput'
import Dropdown from '../../../../atoms/Dropdown'
import { Calendar, DateRangePicker } from 'react-date-range'
import { getMonth } from '../../utils/getMonth'
import { addDays } from 'date-fns'

// react-date-range requirement
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

export default function DatePicker({
  isRangeSelector,
  containerStyles,
  labelStyles,
  dropdownStyles,
  labelText,
  inputPlaceholder,
  inputStyles,
  onPickDate,
}) {
  const [dateInput, setDateInput] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [date, setDate] = useState(null)
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: 'selection',
    },
  ])

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  useEffect(() => {
    if (!date || isRangeSelector) return
    const selectedDate = new Date(date)
    const formattedDate = `${selectedDate.getDate()}/${selectedDate.getMonth()}/${selectedDate.getFullYear()}`
    onPickDate([date])
    setDateInput(formattedDate)
    setIsDropdownOpen(false)
  }, [date, isRangeSelector])

  useEffect(() => {
    if (!isRangeSelector) return
    const startDate = new Date(range[0].startDate)
    const endDate = new Date(range[0].endDate)
    const startMonth = getMonth(startDate.getMonth(), true)
    const endMonth = getMonth(endDate.getMonth(), true)
    const formattedDate = `${startDate.getDate()} ${startMonth} - ${endDate.getDate()} ${endMonth}`
    onPickDate([range[0].startDate, range[0].endDate])
    setDateInput(formattedDate)
  }, [range, isRangeSelector])

  return (
    <div className={containerStyles ? containerStyles : ''}>
      <LabelInput
        isReadOnly={true}
        labelText={labelText}
        inputPlaceholder={inputPlaceholder}
        labelStyles={labelStyles}
        inputStyles={inputStyles}
        onClick={toggleDropdown}
        input={dateInput}
      />
      <Dropdown isOpen={isDropdownOpen} setOpen={setIsDropdownOpen} styles={dropdownStyles ? dropdownStyles : ''}>
        {isRangeSelector ? (
          <DateRangePicker
            ranges={range}
            onChange={(range) => setRange([range.selection])}
            minDate={new Date()}
            months={1}
          />
        ) : (
          <Calendar onChange={(date) => setDate(date)} date={date ? date : new Date()} minDate={new Date()} />
        )}
      </Dropdown>
    </div>
  )
}
