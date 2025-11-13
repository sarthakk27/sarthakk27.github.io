import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Movies from './components/Movies';
import Art from './components/Art';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import confetti from "canvas-confetti";

function App() {
  const SECRET = "s";
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const handleKeyPress = (e) => {
      const char = e.key.toLowerCase();

      // only a–z
      if (/^[a-z]$/.test(char)) {
        setTyped((prev) => {
          const updated = (prev + char).slice(-SECRET.length);

          if (updated === SECRET) {
            triggerSecretAnimation();
          }

          return updated;
        });
      }
    };

    window.addEventListener("keypress", handleKeyPress);

    return () => window.removeEventListener("keypress", handleKeyPress);
  }, []);

  const triggerSecretAnimation = () => {
    confetti({
      particleCount: 200,
      spread: 360,
      startVelocity: 50,
      // origin: { y: 0.0   }
      origin: { x: 0.5, y: 0.5 }
    });
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/art" element={<Art />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
