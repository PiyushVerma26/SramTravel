import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const searchFlight = createAsyncThunk('fetchFlights', async (data) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  return response.json()
})

const initialState = {
  isFetching: false,
  error: '',
  data: null,
  dataFetched: false,
}

const flightSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {
    resetflight: (state) => {
      ;(state.isFetching = false), (state.error = ''), (state.data = null), (state.dataFetched = false)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchFlight.fulfilled, (state, action) => {
      state.isFetching = false
      state.data = action.payload
      state.error = ''
      state.dataFetched = true
    })

    builder.addCase(searchFlight.pending, (state) => {
      state.isFetching = true
      state.dataFetched = false
      state.error = ''
    })

    builder.addCase(searchFlight.rejected, (state, action) => {
      state.error = action.payload
      state.dataFetched = false
      state.isFetching = false
    })
  },
})
export const { resetflight } = flightSlice.actions
export default flightSlice.reducer
