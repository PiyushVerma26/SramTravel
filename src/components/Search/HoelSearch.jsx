import React from 'react'
import { useSelector } from 'react-redux'
import Error from '../Search/Error'
import HotelCard from './HotelCard'
import Loading from '../Loading/Loading'

function HoelSearch() {
  const error = useSelector((state) => state.hotel.error)

  return <>{error ? <Error /> : <HotelCard />}</>
}

export default HoelSearch
