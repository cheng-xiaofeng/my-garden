import React, { Component } from 'react';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { connect } from 'react-redux'
import { Layout, Menu   } from 'antd'
import { routers } from '../../constants'
import { changePage } from '../../../store/actions/changePageAction'

const { Sider, Content } =  Layout
@connect(state => {
  return {
    itemKey: state.changePageReducer.itemKey
  }
})
class NodeContent extends Component {
  chooseItem =(key) => {
    this.props.dispatch(changePage([key]))
  }
  clickItem = ({item, key}) => {
    this.props.dispatch(changePage([key]))
  }
  render() {
    return (
      <Layout className='commonHeader'>
        <Sider style={{height: '100%'}}>
          <Menu onClick={this.clickItem} selectable={true} selectedKeys={this.props.itemKey} theme="dark" mode="vertical" style={{height: '100%', overflow: 'auto'}}>
            {routers.map(item => {
              return (<Menu.Item key={item.index}>
                        <Link to={item.to}>{item.name}</Link>
                      </Menu.Item>)
            })}
          </Menu>
        </Sider>
        <Content>
          <div className='mycontent'>
            <Switch>
              {routers.map((item, index) => {
                return <Route key={index} path={item.path} exact render={(props) => <item.component chooseItem={this.chooseItem} {...props}/>} />
              })}
            </Switch>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default NodeContent;