import * as React from 'react';
import Pallette from './Pallette';
import './style.css';

export default function App() {
  const lightModeBackround = '#f5f5f5';
  const lightModeForeground = {
    black: '#3b404a',
    neutralDark: '#4f5561',
    neutralPrimary: '#282c34',
    neutralPrimaryAlt: '#7b818d',
    neutralSecondary: '#9398a4',
    neutralTertiary: '#abb0ba',
  };

  const darkModeBackground = '#282c34';
  const darkModeForeground = {
    black: '#1d1d1d',
    neutralDark: '#373737',
    neutralPrimary: '#f1f1f1',
    neutralPrimaryAlt: '#6c6c6c',
    neutralSecondary: '#878787',
    neutralTertiary: '#a1a1a1',
  };
  return (
    <div className="app-container">
      <Pallette
        colors={lightModeForeground}
        background={lightModeBackround}
        colorScheme="light"
      />
      <Pallette
        colors={darkModeForeground}
        background={darkModeBackground}
        colorScheme="dark"
      />
    </div>
  );
}
