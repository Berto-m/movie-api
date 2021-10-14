import React, { useEffect } from 'react';
import Listing from '../Listing/Listing';
import omdbAPI from '../../common/API/API';
import { APIKey } from '../../common/API/APIKey';

export default function Home() {
  useEffect(() => {
    // if [], run once when commponent loads, and don't run it again.
    const movieSearch = 'harry';
    const getData = async () => {
      const response = await omdbAPI
        .get(`?apikey=${APIKey}&s=${movieSearch}&type=movie`)
        .catch((error) => {
          console.log('error', error);
        });
      console.log('api res', response);
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
