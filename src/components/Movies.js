import React from 'react';
import './Movies.css';

const Movies = () => {
  return (
    <div className="movies-container">
      <p>i am a total movie junkie. i am all in for suspense, thrillers, action, and solid drama. throw in a good horror flick and i am hooked. just can’t stand those predictable ones or movies that start fire and end flat.</p>
      <p>
        also, here is my{' '}
        <span>
          <a
            href="https://letterboxd.com/sarthaakk/"
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
