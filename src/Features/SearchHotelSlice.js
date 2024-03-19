import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const searchHotel = createAsyncThunk('fetchHotels', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
});
const initialState = {
  isFetching: false,
  data: null,  
  error: '',
  dataFetched:false
};

const hotelSlice = createSlice({
  name: 'hotel', 
  initialState,
  reducers:{
resetState:(state )=>{
      state.isFetching = false;
      state.data = null;
      state.error = '';
      state.dataFetched = false;
}
  },
  extraReducers: (builder) => {
    builder.addCase(searchHotel.fulfilled, (state, action) => {
      state.isFetching = false;
      state.data = action.payload;
      state.error = '',
      state.dataFetched=true
    });
    builder.addCase(searchHotel.pending, (state) => {
      state.isFetching = true,
        state.dataFetched=false
    });
    builder.addCase(searchHotel.rejected, (state ,action ) => {
      state.isFetching = false,
      state.dataFetched=false,
      state.error = action.payload
    });
  }
});

export default hotelSlice.reducer;
export const { resetState } = hotelSlice.actions;