import React, { Component } from 'react';
import { Layout } from 'antd'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import MainHeader from './header'
import NodeContent from './pages/node'
import HomePage from './HomePage';
import BlogContent from './pages/blog'
class PagesIndex extends Component {
  render() {
    return (
      <Layout className='topLayout' style={{height: '100%'}}>
        <Router>
          <MainHeader />
          <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/my-garden' exact component={HomePage}/>
            <Route path="/node*" exact component={NodeContent}/>
            <Route path="/myblog*" exact component={BlogContent}/>
          </Switch>
        </Router>
      </Layout>
    );
  }
}

export default PagesIndex;