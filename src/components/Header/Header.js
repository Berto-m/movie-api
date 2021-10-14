import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFilm, FaUserCircle, FaSearch } from 'react-icons/fa';
import './Header.scss';
import { useDispatch } from 'react-redux';
import { fetchMovies, fetchSeries } from '../../features/movies/movieSlice';

export default function Header() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchMovies(search));
    dispatch(fetchSeries(search));
    setSearch('');
  };

  return (
    <div className='header'>
      <Link to='/'>
        <div className='logo'>
          <FaFilm size='2em' color='#E50914' />
          <div className='logo--name'>Berto IMDb</div>
        </div>
      </Link>
      <div className='search--bar'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={search}
            placeholder='Search'
            onChange={(event) => setSearch(event.target.value)}
          />
          <button type='submit'>
            <FaSearch />
          </button>
        </form>
      </div>
      <div className='user-image'>
        <FaUserCircle size='2em' color='white' />
      </div>
    </div>
  );
}
