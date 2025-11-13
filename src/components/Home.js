import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [linuxTheme, setLinuxTheme] = useState(false);
  // const fullText = "print('hey there, iamsarthak')";
  const fullText = ">> Hello, i am sarthak.";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'l' || e.key === 'L') {
        setLinuxTheme(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const renderTypedText = () => {
    const text = displayText;
    const printMatch = text.match(/^(print\()/);
    const quoteMatch = text.match(/^print\(('.*')\)$/);
    
    if (quoteMatch) {
      return (
        <>
          <span className="print-green">print(</span>
          <span className="black">{quoteMatch[1]}</span>
          <span className="print-green">)</span>
        </>
      );
    } else if (printMatch) {
      const remaining = text.slice(printMatch[1].length);
      return (
        <>
          <span className="print-green">{printMatch[1]}</span>
          <span className="black">{remaining}</span>
        </>
      );
    } else {
      return <span className="print-green">{text}</span>;
    }
  };

  return (
    <div className={`home-container ${linuxTheme ? 'linux-theme' : ''}`}>
      <div className="hint-text">Press the s key on the keyboard | Press L for Linux theme</div>
      <p id="greeting" className="terminal-text">
        {renderTypedText()}
        <span className={`cursor ${showCursor ? 'visible' : ''}`}>_</span>
      </p>
      <br />
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
