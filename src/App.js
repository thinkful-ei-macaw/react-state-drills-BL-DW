import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Hello, World</h3>
        <HelloWorld />
      </div>
    );
  }
}

export default App;
