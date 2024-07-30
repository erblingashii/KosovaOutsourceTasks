import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import './TabsComponent.css';

const TabsComponent = ({ tabs, onSelect }) => {
  return (
    <div className="tabs-container">
      <Tabs onSelect={onSelect}>
        <TabList className="react-tabs__tab-list">
          {tabs.map((tabName, index) => (
            <Tab key={index} className="react-tabs__tab">
              {tabName}
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </div>
  );
};

export default TabsComponent;
