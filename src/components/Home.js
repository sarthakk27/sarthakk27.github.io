import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [linuxTheme, setLinuxTheme] = useState(false);
  const [selectedLink, setSelectedLink] = useState(0);
  const [showBackButton, setShowBackButton] = useState(false);
  // const fullText = "print('hey there, iamsarthak')";
  const fullText = ">> Hello, i am sarthak.";
  
  const links = [
    { href: 'https://github.com/sarthakk27', text: 'github', external: true },
    { href: '/art', text: 'Art', external: false },
    { href: '/movies', text: 'Interest in movies', external: false },
    { href: '/projects', text: 'Projects', external: false },
    { href: '/blog', text: 'Blog', external: false }
  ];
  
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
    // Check if there's navigation history
    const hasHistory = window.history.length > 1;
    setShowBackButton(hasHistory);

    // Listen for navigation events
    const handleNavigation = () => {
      setShowBackButton(window.history.length > 1);
    };

    window.addEventListener('popstate', handleNavigation);
    return () => window.removeEventListener('popstate', handleNavigation);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'l' || e.key === 'L') {
        setLinuxTheme(prev => !prev);
      }
      
      // Backspace to go back
      if (e.key === 'Backspace' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        window.history.back();
      }
      
      // Arrow key navigation in Linux theme
      if (linuxTheme) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedLink(prev => (prev + 1) % links.length);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedLink(prev => (prev - 1 + links.length) % links.length);
        } else if (e.key === 'Enter') {
          e.preventDefault();
          const link = links[selectedLink];
          if (link.external) {
            window.open(link.href, '_blank');
          } else {
            window.location.href = link.href;
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [linuxTheme, selectedLink]);

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
      {showBackButton && (
        <button className="back-button" onClick={() => window.history.back()} title="Go back (or press Backspace)">
          ← Back
        </button>
      )}
      <div className="hint-text">
        Press the s key on the keyboard <br/> Press L for Linux theme <br/>
        {linuxTheme && 'Use ↑↓ arrows to navigate, Enter to select <br/>'}
        {showBackButton && 'Press Backspace to go back'}
      </div>
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
      {links.map((link, index) => (
        <React.Fragment key={link.href}>
          <a
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className={linuxTheme && selectedLink === index ? 'selected-link' : ''}
          >
            {linuxTheme && selectedLink === index && '> '}
            {link.text}
          </a>
          <br />
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Home;
