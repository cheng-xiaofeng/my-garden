import React, { Component } from 'react';
import { Layout, Button } from 'antd'
import {getdata} from '../service/index'
class HomePage extends Component {
  click = () => {
    getdata().then(data => {
      console.log('222', data)
    })
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