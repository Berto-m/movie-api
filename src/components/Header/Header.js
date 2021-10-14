import React from 'react';
import { Link } from 'react-router-dom';
import { FaFilm, FaUserCircle } from 'react-icons/fa';
import './Header.scss';

export default function Header() {
  return (
    <div className='header'>
      <Link to='/'>
        <div className='logo'>
          <FaFilm size='2em' color='#E50914' />
          <div className='logo--name'>Berto IMDb</div>
        </div>
      </Link>
      <div className='user-image'>
        <FaUserCircle size='2em' color='white' />
      </div>
    </div>
  );
}
