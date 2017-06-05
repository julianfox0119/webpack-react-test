import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (  
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/list">List</Link></li>
            <li><Link to="/single">Single</Link></li>
        </ul>
    );
  }
}

export default Nav;