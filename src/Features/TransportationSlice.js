import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const searchTransport = createAsyncThunk('fetchTransport', async (data) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  return response.json()
})

const initialState = {
  isFetching: false,
  data: null,
  error: '',
  dataFetched: false,
}

const transportSlice = createSlice({
  name: 'transport',
  initialState,
  reducers: {
    resetTransport: (state) => {
      ;(state.isFetching = false), (state.error = ''), (state.data = null), (state.dataFetched = false)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchTransport.pending, (state) => {
      state.dataFetched = false
      state.isFetching = true
      state.error = ''
    })
    builder.addCase(searchTransport.fulfilled, (state, action) => {
      state.data = action.payload
      state.dataFetched = true
      state.error = ''
      state.isFetching = false
    })
    builder.addCase(searchTransport.rejected, (state, action) => {
      state.error = action.payload
      state.dataFetched = false
      state.isFetching = false
    })
  },
})

export const { resetTransport } = transportSlice.actions
export default transportSlice.reducer
