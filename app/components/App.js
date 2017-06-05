import React, { Component } from 'react';
import { Button } from 'antd';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/list">List</Link></li>
            <li><Link to="/single">Single</Link></li>
        </ul>
      </div>
    );
  }
}

export default App;
