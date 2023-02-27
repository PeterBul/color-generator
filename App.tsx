import * as React from 'react';
import Pallette, { IBackroundPallette, IForegroundPallette } from './Pallette';
import './style.css';

export default function App() {
  const lightModeBackround = '#f5f5f5';
  const lightModeForeground: IForegroundPallette = {
    type: 'fg',
    black: '#3b404a',
    neutralDark: '#4f5561',
    neutralPrimary: '#282c34',
    neutralPrimaryAlt: '#7b818d',
    neutralSecondary: '#9398a4',
    neutralTertiary: '#abb0ba',
  };

  const darkModeBackground = '#282c34';
  const darkModeForeground: IForegroundPallette = {
    type: 'fg',
    black: '#1d1d1d',
    neutralDark: '#373737',
    neutralPrimary: '#f1f1f1',
    neutralPrimaryAlt: '#6c6c6c',
    neutralSecondary: '#878787',
    neutralTertiary: '#a1a1a1',
  };

  const newDarkModeForeground: IForegroundPallette = {
    type: 'fg',
    black: '#d6d6d6',
    neutralDark: '#bcbcbc',
    neutralPrimary: '#f1f1f1',
    neutralPrimaryAlt: '#878787',
    neutralSecondary: '#6c6c6c',
    neutralTertiary: '#525252',
  };

  const darkModeBagroundPallette: IBackroundPallette = {
    type: 'bg',
    neutralTertiaryAlt: '#686f7b',
    neutralQuaternary: '#4f5460',
    neutralQuaternaryAlt: '#494e59',
    neutralLight: '#414751',
    neutralLighter: '#363b45',
    neutralLighterAlt: '#2f343d',
    white: '#282c34',
  };
  return (
    <div className="app-container">
      <Pallette
        name="Light Mode Foreground"
        colors={lightModeForeground}
        background={lightModeBackround}
      />
      <Pallette
        name="Dark Mode Foreground"
        colors={darkModeForeground}
        background={darkModeBackground}
      />
      <Pallette
        name="New Dark Mode Foreground"
        colors={newDarkModeForeground}
        background={darkModeBackground}
      />
      <Pallette
        name="Dark Mode Background"
        colors={darkModeBagroundPallette}
        background={darkModeBackground}
      />
    </div>
  );
}
