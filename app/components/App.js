import React, { Component } from 'react';
import { Button } from 'antd';

import Header from './Header';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>       
      </div>
    );
  }
}

export default App;
