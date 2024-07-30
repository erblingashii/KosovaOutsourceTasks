import React, { useState, useEffect } from 'react';
import './PopUp.css';

const Popup = ({ handleClose, saveColors, initialColors }) => {
  const [colors, setColors] = useState(initialColors);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setColors((prevColors) => ({
      ...prevColors,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    saveColors(colors);
    handleClose();
  };

  useEffect(() => {
    const backdrop = document.querySelector('.popup-backdrop');
    const content = document.querySelector('.popup-content');
    backdrop.classList.add('show');
    content.classList.add('show');
  }, []);

  return (
    <div className="popup-backdrop" onClick={handleClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h2>Theme Color</h2>
        <form onSubmit={handleSave}>
          <div>
            <label>Font Color</label>
            <input
              type="color"
              name="fontColor"
              value={colors.fontColor}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Background Color</label>
            <input
              type="color"
              name="backgroundColor"
              value={colors.backgroundColor}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Button Color</label>
            <input
              type="color"
              name="buttonColor"
              value={colors.buttonColor}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Button Border Color</label>
            <input
              type="color"
              name="buttonBorderColor"
              value={colors.buttonBorderColor}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Buttons Mouseover Color</label>
            <input
              type="color"
              name="buttonsMouseoverColor"
              value={colors.buttonsMouseoverColor}
              onChange={handleChange}
            />
          </div>
          <div className="popup-actions">
            <button type="button" onClick={handleClose}>
              Cancel
            </button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
