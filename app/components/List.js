import React, { Component } from 'react';
import { Button } from 'antd';

import Header from './common/Header';
import Nav from './common/Nav';

class ListView extends React.Component {

  render() {
    return (
        <div className = "App">
            <Header />
            <Nav />
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                <li>Instagram</li>
                <li>WhatsApp</li>
                <li>Oculus</li>
                </ul>
                <Button type="primary">Primary</Button>
            </div>
        </div>
    );
  }
}

export default ListView;