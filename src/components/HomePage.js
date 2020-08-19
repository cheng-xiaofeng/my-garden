import React, { Component } from 'react';
import { Layout, Button } from 'antd'
import {getdata} from '../service/index'
class HomePage extends Component {
  click = () => {
    getdata()
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