import * as React from 'react';
import './style.css';

export default function App() {
  const colors = {
    black: '#3b404a',
    neutralDark: '#4f5561',
    neutralPrimary: '#282c34',
    neutralPrimaryAlt: '#7b818d',
    neutralSecondary: '#9398a4',
    neutralTertiary: '#abb0ba',
  };
  return (
    <div className="app-container">
      <div className="pallette">
        {Object.values(colors).map((c) => (
          <div className="pallette-color" style={{ background: c }}></div>
        ))}
      </div>
    </div>
  );
}
