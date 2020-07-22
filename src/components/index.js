import React, { Component } from 'react';
import { Layout, Menu   } from 'antd'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { routers } from './constants'
const { Header, Sider, Content } = Layout;
class Index extends Component {
  render() {
    return (
      <Layout style={{height: '100%'}}>
        <Router>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%', color: '#fff'}}>
            Header
          </Header>
          <Layout style={{boxSizing: 'border-box', height: '100%', paddingTop: 64 }}>
            <Sider>
              <Menu mode="vertical">
                {routers.map(item => {
                  return (<Menu.Item key={item.index}>
                            <Link to={item.to}>{item.name}</Link>
                          </Menu.Item>)
                })}
                  
              </Menu>
            </Sider>
            <Content>
              <Switch>
                {routers.map(item => {
                  return <Route path={item.path} component={item.component}/>
                })}
              </Switch>
            </Content>
          </Layout>
        </Router>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.getName.name
  };
}

export default Index;