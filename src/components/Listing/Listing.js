import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllSeries } from '../../features/movies/movieSlice';
import Card from '../Card/Card';
import './Listing.scss';

export default function Listing() {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);
  let renderedMovies,
    renderedSeries = '';

  renderedMovies =
    movies.Response === 'True' ? (
      // if the reponse is True map through the object and render a card
      movies.Search.map((movie, index) => <Card key={index} data={movie} />)
    ) : (
      // if the response is not equal to True, deisplay the error
      <div className='movie--error'>
        <h3>{movies.Error}</h3>
      </div>
    );

  renderedSeries =
    series.Response === 'True' ? (
      // if the reponse is True map through the object and render a card
      series.Search.map((serie, index) => <Card key={index} data={serie} />)
    ) : (
      // if the response is not equal to True, deisplay the error
      <div className='series--error'>
        <h3>{series.Error}</h3>
      </div>
    );
  //console.log(movies);
  return (
    <div className='movie--wrapper'>
      <div className='movie--list'>
        <h2>Movies</h2>
        <div className='movie--container'>{renderedMovies}</div>
      </div>
      <div className='serie--list'>
        <h2>Series</h2>
        <div className='movie--container'>{renderedSeries}</div>
      </div>
    </div>
  );
}
