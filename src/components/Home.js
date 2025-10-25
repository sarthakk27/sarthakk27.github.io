import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <p id="greeting">
        <span className="print-green">print(</span>
        <span className="black">'hey there, iamsarthak'</span>
        <span className="print-green">)</span>
      </p>
      <span style={{ fontSize: 'larger' }}>i am a developer.</span>
      <br />
      <span style={{ fontSize: 'larger' }}>
        find me at{' '}
        <a
          style={{ fontSize: 'larger' }}
          href="https://linuxusers.in/sarthak"
          target="_blank"
          rel="noopener noreferrer"
        >
          @sarthak@linuxusers.in
        </a>
        .
      </span>
      <br />
      <br />
      <a
        href="https://github.com/sarthakk27"
        target="_blank"
        rel="noopener noreferrer"
      >
        github
      </a>
      <br />
      <br />
      <a href="/art">Art</a>
      <br />
      <br />
      <a href="/movies">Interest in movies</a>
      <br />
      <br />
      <a href="/projects">Projects</a>
    </div>
  );
};

export default Home;
