import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  countriesArray: [],
  countryDetails: [],
  isLoading: true,
  error: '',
  searchField: '',
};

const url = 'https://restcountries.com/v3.1/all';

export const getCountriesData = createAsyncThunk(
  'countries/getCountriesData',
  async (thunkAPI) => {
    try {
      const response = await fetch(url);
      const data = response.json();
      return data;
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
      const response = await fetch(countryUrl);
      const data = response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    searchCountry: (state, action) => {
      state.searchField = action.payload;
    },
  },
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

export const { searchCountry } = countriesSlice.actions;
export default countriesSlice.reducer;
