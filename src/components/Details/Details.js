import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { FaStar, FaThumbsUp, FaFilm, FaCalendar } from 'react-icons/fa';
import { fetchDetails, getDetails } from '../../features/movies/movieSlice';
import './Details.scss';

export default function Details() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getDetails);
  console.log(data);
  useEffect(() => {
    dispatch(fetchDetails(imdbID));
  }, [dispatch, imdbID]);

  return (
    <div className='movie--section'>
      <div className='description'>
        <div className='movie--title'>{data.Title}</div>
        <div className='movie--rating'>
          <span>
            IMDb Rating <FaStar color='#ff9e00' /> : {data.imdbRating}
          </span>
          <span>
            IMDb Votes <FaThumbsUp color='#fafafa' /> : {data.imdbVotes}
          </span>
          <span>
            Runtime <FaFilm color='#BFD5D6' /> : {data.Runtime}
          </span>
          <span>
            Year <FaCalendar color='#FFE5B4' /> : {data.Year}
          </span>
        </div>
        <div className='movie--plot'>{data.Plot}</div>
        <div className='movie--info'>
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Generes</span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Language</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className='description--img'>
        <img src={data.Poster} alt={data.Title} />
      </div>
    </div>
  );
}
