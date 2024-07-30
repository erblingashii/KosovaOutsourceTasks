import React, { useState } from 'react';
import './CollapsibleSection.css';
const CollapsibleSection = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible-section">
      <div className="collapsible-header" onClick={toggleSection}>
        <h3>{title}</h3>
        <button className={isOpen ? 'open' : ''}>{isOpen ? '▲' : '▼'}</button>
      </div>
      <div className={`collapsible-content ${isOpen ? 'open' : ''}`}>
        {content}
      </div>
    </div>
  );
};

export default CollapsibleSection;
