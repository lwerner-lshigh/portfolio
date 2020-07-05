import React from 'react';
import logo from './logo.svg';
import PortfolioPost from './PortfolioPost.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Lukas Werner's Portfolio</h1>
      </header>
      <div className="posts">
        <PortfolioPost name="React.js Portfolio" desc="This is a short test description." image="reactjs.png" imgFit="wide" />
        <PortfolioPost name="MMWD" desc="Things I made in Multimedia web design" image="water-tower.jpg" imgFit="wide" />
        <PortfolioPost name="Photos" desc="Here are some photos I took" image="trees.jpg" imgFit="wide" />
      </div>
    </div>
  );
}

export default App;
