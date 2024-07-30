import React from 'react';
import TabsComponent from './TabsComponent';
import './App.css';  // Ensure you have this file for global styles if needed

const App = () => {
  const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];  // Example tabs
  const handleSelect = (index) => {
    console.log(`Selected tab index: ${index}`);
  };

  return (
    <div className="app">
      <TabsComponent tabs={tabs} onSelect={handleSelect} />
    </div>
  );
};

export default App;
