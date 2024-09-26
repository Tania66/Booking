import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:5000";

export const getHotel = createAsyncThunk(
  "hotel/getHotel",
  async (city, { rejectWithValue }) => {
    try {
      const response = await axios.get(`hotels?city=${city}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
