import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '.././Features/LoginSlice'
import hotelReducer from '../Features/SearchHotelSlice'
import flightReducer from '../Features/searchFlightSlice'
import transportReducer from '../Features/TransportationSlice'
import detailReducer from '../Features/DetailSlice'
const store = configureStore({
  reducer: {
    login: loginReducer,
    hotel: hotelReducer,
    detail: detailReducer,
    flight: flightReducer,
    transport: transportReducer,
  },
})

export default store
