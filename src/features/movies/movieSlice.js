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

export const fetchDetails = createAsyncThunk(
  'movies/fetchDetails',
  async (id) => {
    const response = await omdbAPI.get(`?apikey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  series: {},
  details: {},
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeSelectedMoviesOrShow: (state) => {
      state.removeMovieSerie = {}
    }
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

    [fetchDetails.fulfilled]: (state, { payload }) => {
      console.log('fetched succesfully');
      return { ...state, details: payload };
    },
  },
});

export const { removeSelectedMoviesOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getDetails = (state) => state.movies.details;
export default movieSlice.reducer;
