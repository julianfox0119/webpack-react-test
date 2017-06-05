import React, { Component } from 'react';
import { Button } from 'antd';
import { Menu, Icon } from 'antd';

import { Link } from 'react-router-dom'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

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
      <Menu onClick={this.handleClick.bind(this)}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <Link to="/"><Icon type="appstore" />Home</Link>
        </Menu.Item>
        <Menu.Item key="list">
          <Link to="/list"><Icon type="appstore" />List</Link>
        </Menu.Item>
        <Menu.Item key="single">
          <Link to="/single"><Icon type="appstore" />Single</Link>
        </Menu.Item>
        <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
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