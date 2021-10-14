import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../features/movies/movieSlice';
import Card from '../Card/Card';

export default function Listing() {
  const movies = useSelector(getAllMovies);
  let renderedMovies = '';

  renderedMovies =
    movies.Response === 'True' ? (
      movies.Search.map((movie, index) => {
        <Card key={index} data={movie} />;
      })
    ) : (
      <div className='movie--error'>
        <h3>{movies.Error}</h3>
      </div>
    );
  console.log(movies);
  return (
    <div className='movie--wrapper'>
      <div className='movie--list'>
        <h2>Movies</h2>
        <div className='movie--container'>{renderedMovies}</div>
      </div>
    </div>
  );
}
