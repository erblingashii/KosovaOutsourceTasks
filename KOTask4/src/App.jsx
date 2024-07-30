import React from 'react';
import CollapsibleSection from './components/CollapsibleSection';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <CollapsibleSection
        title="Why park a domain name in Parkname?"
        content="Parkname is the leading industry standard for domain name parking and monetization services. We offer a wide variety of services to help you achieve success."
      />
    </div>
  );
};

export default App;
