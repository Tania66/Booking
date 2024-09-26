import { createSlice } from "@reduxjs/toolkit";

const destinationSlice = createSlice({
  name: "destination",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchData: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchDataError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    fetchDataPending: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { fetchData, fetchDataError, fetchDataPending } =
  destinationSlice.actions;
export const destinationReducer = destinationSlice.reducer;
