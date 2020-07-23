import React, { Component } from 'react';
import { Layout, Menu   } from 'antd'
import {
  Link
} from 'react-router-dom'
import logo from '../logo.svg';
const { Header } = Layout;
class MainHeader extends Component {
  render() {
    return (
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', color: '#fff'}}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to={'/'}>node</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={'/a'}>blog</Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default MainHeader;