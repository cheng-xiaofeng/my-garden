import React, { Component } from 'react'
import './index.less'
import {Layout } from 'antd'
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'
import MainHeader from '../../header'

// import Love from './pages/love'
export default class Index extends Component {
  render() {
    return (
      <Layout className='topLayout' style={{height: '100%', paddingTop: 64}}>
        <Router>
          <MainHeader />
          <Switch>
            {/* <Route path='/index*' exact component={Love}/> */}
            {/* <Route path='/my-garden' exact component={HomePage}/>
            <Route path="/node*" exact component={NodeContent}/>
            <Route path="/myblog*" exact component={BlogContent}/>
            <Route path="/love*" exact component={Love}/> */}
          </Switch>
        </Router>
      </Layout>
    )
  }
}
