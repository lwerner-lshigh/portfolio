import React from 'react';
import logo from './logo.svg';
import PostView from './PostView.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Lukas Werner's Portfolio</h1>
      </header>
      <div className="posts">
        <PostView name="React.js Portfolio" desc="This is a short test description." image="reactjs.png" imgFit="wide" content="Hello World! this is a test post of the react portfolio system where this will now become a larger post and this portfolio was made using react which will be available from my github page."/>
        <PostView name="MMWD" desc="Things I made in Multimedia web design" image="water-tower.jpg" imgFit="wide" />
        <PostView name="Photos" desc="Here are some photos I took" image="trees.jpg" imgFit="wide" />
      </div>
    </div>
  );
}

export default App;
