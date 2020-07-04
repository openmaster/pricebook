import React from 'react';
import './App.css';
//import Header from './components/Header';
import PriceList from './components/PriceList';
import AddItem from './components/AddItem';
import Filters from './components/Filters';
import BatchPriceChange from './components/BatchPriceChange';

function App() {
  return (
    <div className="App container">
      <div className="banner">
        <Filters/>
        <BatchPriceChange/>
      </div>
      <PriceList/>
      <AddItem/>
    </div>
  );
}

export default App;
