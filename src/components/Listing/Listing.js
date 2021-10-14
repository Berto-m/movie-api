import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../features/movies/movieSlice';
import Card from '../Card/Card';
import './Listing.scss'

export default function Listing() {
  const movies = useSelector(getAllMovies);
  let renderedMovies = '';

  renderedMovies =
    movies.Response === 'True' ? (
      // if the reponse is True map through the object and render a card
      movies.Search.map((movie, index) => (
        <Card key={index} data={movie} />
      ))
    ) : (
      // if the response is not equal to True, deisplay the error
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
