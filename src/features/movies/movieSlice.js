import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import omdbAPI from '../../common/API/API';
import { APIKey } from '../../common/API/APIKey';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const movieSearch = 'harry';
  const response = await omdbAPI.get(
    `?apikey=${APIKey}&s=${movieSearch}&type=movie`
  );
  return response.data;
});

export const fetchSeries = createAsyncThunk('movies/fetchSeries', async () => {
  const seriesSearch = 'Game';
  const response = await omdbAPI.get(
    `?apikey=${APIKey}&s=${seriesSearch}&type=series`
  );
  return response.data;
});

const initialState = {
  movies: {},
  series: {}, 
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  }, 
  extraReducers: {
    [fetchMovies.pending]: () => {
      console.log('pending');
    },
    [fetchMovies.fulfilled]: (state, { payload }) => {
      console.log('fetched succesfully');
      return { ...state, movies: payload };
    },
    [fetchMovies.rejected]: () => {
      console.log('rejected');
    },
    [fetchSeries.fulfilled]: (state, { payload }) => {
      console.log('fetched succesfully');
      return { ...state, series: payload };
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export default movieSlice.reducer;
