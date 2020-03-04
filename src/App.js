import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld.js';
import Bomb from './Bomb';

class App extends Component {
  render() {
    return (
      <div className="bomb-state">
        <Bomb />
      </div>
    );
  }
}

export default App;
