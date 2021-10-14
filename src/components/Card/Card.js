import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

export default function Card({ data }) {
  console.log(data);
  return (
    <div className='card--item'>
      <Link to={`/movie/${data.imdbID}`}>
        <div className='inner--card'>
          <div className='top--card'>
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className='bottom--card'>
            <div className='info--card'>
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
