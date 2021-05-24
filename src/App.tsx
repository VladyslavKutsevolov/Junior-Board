import React from 'react';
import Collections from './components/collections/Collections';
import NavBar from './components/nav/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto">
        <Collections />
      </div>
    </div>
  );
}

export default App;
