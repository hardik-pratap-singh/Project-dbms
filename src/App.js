import React from 'react'
import FreshItems from './components/FreshItems';
import Heading from './components/Heading';
import Navbar from './components/Navbar';
import Sell from './components/Sell';


function App() {
  return (
    <div>
      <Navbar />
      <Sell />
      <Heading/>
      <FreshItems/>
    </div>
  );
}

export default App;