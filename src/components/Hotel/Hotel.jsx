import React from 'react'
import FormCard from '../FormCard'
import { useDispatch } from 'react-redux'
import { searchHotel } from '../../Features/SearchHotelSlice'
import { resetflight } from '../../Features/searchFlightSlice'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { resetTransport } from '../../Features/TransportationSlice'

function Hotel() {
  const dispatch = useDispatch()
  const { isFetching } = useSelector((state) => state.hotel)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const formSubmit = async (data) => {
    dispatch(resetflight())
    dispatch(resetTransport())
    dispatch(searchHotel(data))
  }

  return (
    <FormCard>
      <div className='lg:px-36 mx-auto text-center text-white'>
        <h1 className='text-3xl font-bold'>Your perfect stay awaits, let's make memories together.</h1>
        <p className='text-xl font-bold'>Discover unbeatable deals on hotels, cozy homes, and much more.</p>
      </div>

      <form
        className='flex flex-row justify-evenly items-center flex-wrap mt-8 border-white border-4 py-8 rounded-xl md:gap-4 gap-8 md:px-1 px-5'
        onSubmit={handleSubmit(formSubmit)}
      >
        <div className='flex flex-col justify-center w-full md:w-auto'>
          <label htmlFor='destination' className='font-bold text-lg ml-1 text-blue-950'>
            Destination
          </label>
          <input
            type='text'
            id='destination'
            {...register('destination', { required: true })}
            placeholder='Enter Destination'
            className='py-2 rounded-md px-5 mt-1 md:w-56 text-xl font-semibold w-full'
          />
          {errors.destination && <span>This field is required</span>}
        </div>
        <div className='flex flex-col justify-center w-full md:w-auto '>
          <label htmlFor='checkInDate' className='font-bold text-lg ml-1 text-blue-950'>
            Check-in Date
          </label>
          <input
            type='date'
            id='checkInDate'
            {...register('checkInDate', { required: true })}
            className='py-2 rounded-md px-5 mt-1 md:w-56 text-xl font-semibold w-full'
          />
          {errors.checkInDate && <span>This field is required</span>}
        </div>
        <div className='flex flex-col justify-center  w-full md:w-auto  '>
          <label htmlFor='checkOutDate' className='font-bold text-lg ml-1 text-blue-950'>
            Check-out Date
          </label>
          <input
            type='date'
            id='checkOutDate'
            {...register('checkOutDate', { required: true })}
            className='py-2 rounded-md px-5 mt-1 md:w-56 text-xl font-semibold w-full  '
          />
          {errors.checkOutDate && <span>This field is required</span>}
        </div>
        <div className='flex flex-col justify-center w-full md:w-56'>
          <label htmlFor='roomsAndGuests' className='font-bold text-lg ml-1 text-blue-950'>
            Rooms and Guests
          </label>
          <select
            id='roomsAndGuests'
            {...register('roomsAndGuests', { required: true })}
            className='py-2 rounded-md px-1 mt-1 text-xl font-semibold w-full'
          >
            <option disabled value=''>
              &#x1F680; Adults+&#x1F9D2; Children+&#x1F6D2; Rooms
            </option>
            <option>&#x1F680; Adults</option>
            <option>&#x1F9D2; Children</option>
            <option>&#x1F6D2; Rooms</option>
          </select>
          {errors.roomsAndGuests && <span>This field is required</span>}
        </div>
        <div className='flex flex-col justify-center w-full md:w-auto items-center '>
          <button
            className='bg-blue-950 text-white px-8 text-center py-3 rounded-xl md:mt-6 text-xl w-full'
            type='submit'
          >
            {isFetching ? 'Loading...' : 'Check Availability'}
          </button>
        </div>
      </form>
    </FormCard>
  )
}

export default Hotel
