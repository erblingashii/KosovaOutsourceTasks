import React, { useState } from 'react';
import TabsComponent from './components/TabsComponent';
import CardList from './components/CardList';
import './App.css';
import cardData from './Data.json';

const App = () => {
  const [selectedTab, setSelectedTab] = useState('Domains');

  return (
    <div>
      <TabsComponent tabs={Object.keys(cardData)} onSelect={index => setSelectedTab(Object.keys(cardData)[index])} />
      <CardList cards={cardData[selectedTab]} />
    </div>
  );
};

export default App;
