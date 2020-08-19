import React, { Component } from 'react';
import { Layout, Menu } from 'antd'
import {
  Link
} from 'react-router-dom'
import { connect } from 'react-redux'
import logo from '../logo.svg';
import { changePage } from '../store/actions/changePageAction'
const { Header } = Layout;
@connect()
class MainHeader extends Component {
  clickNode = () => {
    this.props.dispatch(changePage(['1']))
  }
  render() {
    return (
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', color: '#fff'}}>
        <p style={{position: 'absolute'}}><Link to={'/'}>首页</Link></p>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" onClick={this.clickNode}>
            <Link to={'/node'}>node</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={'/myblog'}>blog</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to={'/mydreams'}>睡不着的胡思乱想</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to={'/mydesign'}>我的渣ps技能</Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default MainHeader;