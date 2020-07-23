import React, { Component } from 'react';
import { Layout } from 'antd'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import MainHeader from './header'
import MainContent from './content'
import { routers } from './constants'

class Index extends Component {
  render() {
    return (
      <Layout style={{height: '100%'}}>
        <Router>
          <MainHeader />
          <MainContent />
        </Router>
      </Layout>
    );
  }
}

export default Index;