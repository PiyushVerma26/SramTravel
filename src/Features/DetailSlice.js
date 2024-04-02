import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isData: false,
  detailData: null,
}

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    fetchDetail: (state, action) => {
      state.isData = true
      state.detailData = action.payload
    },
  },
})
export default detailSlice.reducer
export const { fetchDetail } = detailSlice.actions
