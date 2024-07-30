import React, { useState, useEffect } from 'react';
import './App.css';
import Popup from './components/PopUp';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [colors, setColors] = useState({
    fontColor: '#444444',
    backgroundColor: '#FFFFFF',
    buttonColor: '#2077EF',
    buttonBorderColor: '#2077EF',
    buttonsMouseoverColor: '#0053D1',
  });

  useEffect(() => {
    document.documentElement.style.setProperty('--background-color', colors.backgroundColor);
  }, [colors.backgroundColor]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const saveColors = (newColors) => {
    setColors(newColors);
  };

  return (
    <div className="App">
      <button className="show-popup-button" onClick={togglePopup}>
        Show Popup
      </button>
      {isOpen && <Popup handleClose={togglePopup} saveColors={saveColors} initialColors={colors} />}
      <div className="color-display">
        <div className="color-circle" style={{ backgroundColor: colors.fontColor }}></div>
        <div className="color-circle" style={{ backgroundColor: colors.backgroundColor }}></div>
        <div className="color-circle" style={{ backgroundColor: colors.buttonColor }}></div>
        <div className="color-circle" style={{ backgroundColor: colors.buttonBorderColor }}></div>
        <div className="color-circle" style={{ backgroundColor: colors.buttonsMouseoverColor }}></div>
      </div>
    </div>
  );
}

export default App;
