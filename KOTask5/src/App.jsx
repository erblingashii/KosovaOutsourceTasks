import React from 'react';
import CollapsibleSection from './components/CollapsibleSection';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <CollapsibleSection title="Main Section">
        <CollapsibleSection 
        title="Nested Section 1"
        content="This section has content but no nested sections."
        />
        <CollapsibleSection 
        title="Nested Section 2"
        content="This section has content but no nested sections."
        />
        <CollapsibleSection
          title="Nested Section 3"
          content="This section has content but no nested sections."
        />
      </CollapsibleSection>
    </div>
  );
};

export default App;
