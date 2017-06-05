import React, { Component } from 'react';
import { Button } from 'antd';
import { Menu, Icon } from 'antd';

import { Link } from 'react-router-dom'

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {current: "home"};
  }

  handleClick(e) {
    console.log('click ', e.key);
    this.setState({
      current: e.key
    });
  }

  render() {
  
    return (
      <Menu 
        mode="horizontal"
      >
        <Menu.Item key="home">
          <Icon type="appstore" /><Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="list">
          <Icon type="appstore" /><Link to="/list">List</Link>
        </Menu.Item>
        <Menu.Item key="single">
          <Icon type="appstore" /><Link to="/single">Single</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

// const Nav = React.createClass({
//   getInitialState() {
//     return {
//       current: 'home',
//     };
//   },
//   handleClick(e) {
//     console.log('click ', e);
//     this.setState({
//       current: e.key,
//     });
//   },
//   render() {
//     return (
//       <Menu onClick={this.handleClick}
//         selectedKeys={[this.state.current]}
//         mode="horizontal"
//       >
//         <Menu.Item key="home">
//           <Icon type="appstore" /><Link to="/">Home</Link>
//         </Menu.Item>
//         <Menu.Item key="list">
//           <Icon type="appstore" /><Link to="/list">List</Link>
//         </Menu.Item>
//         <Menu.Item key="single">
//           <Icon type="appstore" /><Link to="/single">Single</Link>
//         </Menu.Item>
//       </Menu>
//     );
//   },
// });

export default Nav;