import React, { useEffect } from 'react';
import Listing from '../Listing/Listing';
import { useDispatch } from 'react-redux';
import { fetchMovies, fetchSeries } from '../../features/movies/movieSlice';

export default function Home() {
  const dispatch = useDispatch();
  const movieSearch = 'furious'
  const seriesSearch = 'game'
  useEffect(() => {
    // call the async function from createSlice when the component loads
    dispatch(fetchMovies(movieSearch));
    dispatch(fetchSeries(seriesSearch));
  }, [dispatch]);

  return (
    <div>
      <div className='banner'></div>
      <Listing />
    </div>
  );
}
 