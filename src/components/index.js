import React, { Component } from 'react';
import { Layout, Menu   } from 'antd'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import MainHeader from './header'
import Content from './content.js'
class Index extends Component {
  render() {
    return (
      <Layout style={{height: '100%'}}>
        <Router>
          <MainHeader />
          <Content />
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