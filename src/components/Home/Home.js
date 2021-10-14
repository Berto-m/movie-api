import React, { useEffect } from 'react';
import Listing from '../Listing/Listing';
import omdbAPI from '../../common/API/API';
import { APIKey } from '../../common/API/APIKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

export default function Home() {
  const movieSearch = 'harry';
  const dispatch = useDispatch();

  useEffect(() => {
    // if [], run once when commponent loads, and don't run it again.
    const getData = async () => {
      const response = await omdbAPI
        .get(`?apikey=${APIKey}&s=${movieSearch}&type=movie`)
        .catch((error) => {
          console.log('error', error);
        });
      dispatch(addMovies(response.data));
    };
    getData();
  }, []);

  return (
    <div>
      <div className='banner'></div>
      <Listing />
    </div>
  );
}
