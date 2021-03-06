import React from "react";
import logo from "./logo.svg";
import PostView from "./views/PostView.js";
import posts from "./posts.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Lukas Werner's Portfolio</h1>
      </header>
      <div className="posts">
        {posts.map((post) => (
          <PostView
            name={post.name}
            desc={post.desc}
            image={post.image}
            imgFit={post.imgFit}
            content={post.content}
            key={post.name}
            type={post.type}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
