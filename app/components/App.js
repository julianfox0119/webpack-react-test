import React, { Component } from 'react';
import { Button } from 'antd';

import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div >
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>  
        <Counter />     
      </div>     
    );
  }
}

export default App;
