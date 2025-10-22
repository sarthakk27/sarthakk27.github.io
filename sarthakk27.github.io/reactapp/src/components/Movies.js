import React from 'react';
import './Movies.css';

const Movies = () => {
  return (
    <div className="movies-container">
      <p>movies i like</p>
      <p>
        also, here is my{' '}
        <span>
          <a
            href="https://letterboxd.com/sarthaakkk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            letterboxd
          </a>
        </span>{' '}
        account.
      </p>
    </div>
  );
};

export default Movies;
