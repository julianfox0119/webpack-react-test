import React, { Component } from 'react';
import { Button } from 'antd';

class ListView extends React.Component {

  render() {
    return (
     
        <div className="shopping-list">
            <h1>Shopping List for {this.props.name}</h1>
            <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
            </ul>
            <Button type="primary">Primary</Button>
        </div>
        
    );
  }
}

export default ListView;