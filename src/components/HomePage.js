import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Layout, Button } from 'antd'
import { getdata1 } from '../store/actions/changePageAction'
@connect()
class HomePage extends Component {
  click = () => {
    this.props.dispatch(getdata1())
  }
  render() {
    return (
      <Layout className='commonHeader'>
        <Button onClick={this.click}>点击</Button>
      </Layout>
    );
  }
}

export default HomePage;