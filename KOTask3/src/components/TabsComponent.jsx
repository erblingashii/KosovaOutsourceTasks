import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import './TabsComponent.css';

const TabsComponent = ({ tabs, onSelect }) => (
  <Tabs onSelect={onSelect}>
    <TabList>
      {tabs.map((tabName, index) => (
        <Tab key={index}>{tabName}</Tab>
      ))}
    </TabList>
    {tabs.map((tabName, index) => (
      <TabPanel key={index}></TabPanel>
    ))}
  </Tabs>
);

export default TabsComponent;
