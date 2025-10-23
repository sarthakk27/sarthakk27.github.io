import React, { useEffect } from 'react';
import './Welcome.css';

const Welcome = () => {
  useEffect(() => {
    // Initialize Unicorn Studio if not already loaded
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js';
      script.onload = function() {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      (document.head || document.body).appendChild(script);
    } else if (window.UnicornStudio && window.UnicornStudio.init && !window.UnicornStudio.isInitialized) {
      window.UnicornStudio.init();
      window.UnicornStudio.isInitialized = true;
    }
  }, []);

  return (
    <div className="welcome-container">
      <div 
        data-us-project="yd3THhHguz0S5UNpllE7" 
        style={{ width: '1440px', height: '900px' }}
      ></div>
    </div>
  );
};

export default Welcome;
