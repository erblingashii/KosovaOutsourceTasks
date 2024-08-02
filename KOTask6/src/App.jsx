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

  const colorInfo = [
    { label: 'Font Color', value: colors.fontColor },
    { label: 'Background Color', value: colors.backgroundColor },
    { label: 'Button Color', value: colors.buttonColor },
    { label: 'Button Border Color', value: colors.buttonBorderColor },
    { label: 'Mouseover Color', value: colors.buttonsMouseoverColor },
  ];

  return (
    <div className="App">
      <button className="show-popup-button" onClick={togglePopup}>
        Show Popup
      </button>
      {isOpen && <Popup handleClose={togglePopup} saveColors={saveColors} initialColors={colors} />}
      <div className="color-display">
        {colorInfo.map((color, index) => (
          <div className="color-item" key={index}>
            <div className="color-circle" style={{ backgroundColor: color.value }}></div>
            <div className="color-info">
              <div className="color-label">{color.label}</div>
              <div className="color-hex">{color.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
