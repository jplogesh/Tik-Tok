import React from 'react';
import './App.css';
import "./Video";
function App() {
  return (
    <div className="app">
     <h2>let's build our own tiktok hahaha</h2>
    <div className="app__videos">
      <Video />
      <Video/>
      <Video/>
      <Video/>
    </div>
    </div>
  );
}

export default App;
