import React, { useState, useEffect } from 'react';
import ColorBox from './components/ColorBox';
import './App.css';

function App() {
  const [colors, setColors] = useState([]);
  
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const generatePalette = () => {
    const newPalette = [];
    for (let i = 0; i < 5; i++) {
      newPalette.push(getRandomColor());
    }
    setColors(newPalette);
  };

  useEffect(() => {
    generatePalette();
  }, []);

  return (
    // 'App' ab humara main content card ban gaya hai
    <div className="App">
      <h1>Color Palette Generator</h1>
      
      {/* YEH NAYA SUBTITLE HAI */}
      <p className="subtitle">Click a color to copy its HEX code!</p>

      {/* BUTTON MEIN EMOJI ADD KIYA HAI */}
      <button className="generate-btn" onClick={generatePalette}>
        <span>🎨</span>
        Generate New Palette
      </button>

      <div className="palette-container">
        {colors.map((color, index) => (
          <ColorBox key={index} color={color} />
        ))}
      </div>
    </div>
  );
}

export default App;