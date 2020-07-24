import React, { Component } from 'react';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { Layout, Menu   } from 'antd'
import { routers } from '../../constants'
const { Sider, Content } =  Layout
class NodeContent extends Component {
  render() {
    return (
      <Layout style={{boxSizing: 'border-box', height: '100%', paddingTop: 64 }}>
        <Sider style={{height: '100%'}}>
          <Menu theme="dark" mode="vertical" style={{height: '100%', overflow: 'auto'}}>
            {routers.map(item => {
              return (<Menu.Item key={item.index}>
                        <Link to={item.to}>{item.name}</Link>
                      </Menu.Item>)
            })}
              
          </Menu>
        </Sider>
        <Content>
          <Switch>
            {routers.map((item, index) => {
              return <Route key={index} path={item.path} exact component={item.component}/>
            })}
          </Switch>
        </Content>
      </Layout>
    );
  }
}

export default NodeContent;