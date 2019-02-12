import React, { Component } from 'react';
import logo from './logo.svg';
import Diglett from './games/Diglett';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Diglett/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
