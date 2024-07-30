import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import './TabsComponent.css';

const TabsComponent = ({ tabs, onSelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <div className="tabs-container">
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <Tabs onSelect={onSelect}>
        <TabList className={`react-tabs__tab-list ${isMenuOpen ? 'open' : ''}`}>
          {tabs.map((tabName, index) => (
            <Tab key={index} className="react-tabs__tab">
              {tabName}
            </Tab>
          ))}
        </TabList>
        {tabs.map((tabName, index) => (
          <TabPanel key={index}>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default TabsComponent;
