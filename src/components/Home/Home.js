import React, { useEffect } from 'react';
import Listing from '../Listing/Listing';
import omdbAPI from '../../common/API/API';
import { APIKey } from '../../common/API/APIKey';

export default function Home() {
  useEffect(() => {
    const movieSearch = 'harry';
    const getData = async () => {
      const response = await omdbAPI.get(`?apikey=${APIKey}&s=${movieSearch}`);
    };
  });

  return (
    <div>
      <div className='banner'></div>
      <Listing />
    </div>
  );
}
