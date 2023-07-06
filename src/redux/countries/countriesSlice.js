import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  countriesArray: [],
  countryDetails: {},
  isLoading: true,
  error: '',
};

const url = 'https://restcountries.com/v3.1/all';

export const getCountriesData = createAsyncThunk(
  'countries/getCountriesData',
  async (thunkAPI) => {
    try {
      const response = await axios(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

export const getCountryDetails = createAsyncThunk(
  'countries/getCountryDetails',
  async (cca3, thunkAPI) => {
    const countryUrl = `https://restcountries.com/v3.1/alpha/${cca3}`;
    try {
      const response = await axios(countryUrl);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: {
    [getCountriesData.pending]: (state) => {
      state.isLoading = true;
    },
    [getCountriesData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.countriesArray = action.payload;
    },
    [getCountriesData.rejected]: (state) => {
      state.isLoading = false;
      state.countriesArray = [];
    },
    [getCountryDetails.pending]: (state) => {
      state.isLoading = true;
    },
    [getCountryDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.countryDetails = action.payload;
    },
    [getCountryDetails.rejected]: (state) => {
      state.isLoading = false;
      state.countryDetails = [];
    },
  },
});

export default countriesSlice.reducer;
