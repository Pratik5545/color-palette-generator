import React, { useState } from 'react';
import './ColorBox.css'; // Hum yeh file abhi banayenge

// Yeh component ek single color box dikhayega
// Yeh 'color' ko as a prop (property) le raha hai App.js se
function ColorBox({ color }) {
  const [copied, setCopied] = useState(false);

  // Hex code ko clipboard par copy kerne ka function
  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);

    // 2 second ke baad "Copied!" message hata dega
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={copyToClipboard}
    >
      <div className="color-info">
        <h3>{copied ? 'Copied!' : color}</h3>
      </div>
    </div>
  );
}

export default ColorBox;