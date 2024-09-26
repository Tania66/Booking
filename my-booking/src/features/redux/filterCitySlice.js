import { createSlice } from "@reduxjs/toolkit";
import { getHotel } from "./hotelOperation";

const hotelSlice = createSlice({
  name: "hotel",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    isRequest: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getHotel.pending, (state, action) => {
        state.isLoading = true;
        state.isRequest = false;
      })
      .addCase(getHotel.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.error = null;
        state.isLoading = false;
        state.isRequest = true;
      })
      .addCase(getHotel.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
        state.isRequest = false;
      });
  },
});

export const hotelReducer = hotelSlice.reducer;
