import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const searchFlight = createAsyncThunk("fetchFlights", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
});

const initialState = {
  isFetching: false,
  error: "",
  data: null,
  dataFetched : false
};

const flightSlice = createSlice({
  name: 'flight',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(searchFlight.fulfilled, (state, action) => {
      state.isFetching = false;
      state.data = action.payload;
      state.error = "";
      dataFetched=true
    });

    builder.addCase(searchFlight.pending, (state) => {
      (state.isFetching = true),
      (state.dataFetched=false),
      (state.error = "");
    });
    builder.addCase(searchFlight.rejected, (state, action) => {
      (state.error = action.payload),
      (state.dataFetched=false),
      (state.isFetching = false);
    });
  },
});
export default flightSlice.reducer;