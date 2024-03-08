import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '.././Features/LoginSlice';  
import hotelReducer from '../Features/SearchHotelSlice'
import detailReducer from '../Features/DetailSlice'
const store = configureStore({
  reducer: {
    login: loginReducer,
    hotel:hotelReducer,
    detail:detailReducer,
  }
});

export default store;