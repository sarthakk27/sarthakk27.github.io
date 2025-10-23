import React from 'react';
import './Art.css';
import glitchArt from '../Art/glitch-art.jpg';
import eyeImg from '../Art/eye.avif';
import stuckImg from '../Art/i-am-stuck.avif';

const Art = () => {
  return (
    <div className="art-container">
      <p id="description">
        these are some digital arts i liked while browsing the internet.
        <br />
        <span style={{ fontSize: '15px' }}>
          also gave credit to the accounts where i saw the art.
        </span>
      </p>
      <img
        id="glitch"
        src={glitchArt}
        alt="glitch"
      />
      <br />
      <img
        id="eye"
        src={eyeImg}
        alt="eye"
      />
      <img
        id="stuck"
        src={stuckImg}
        alt="i am stuck"
      />
    </div>
  );
};

export default Art;
