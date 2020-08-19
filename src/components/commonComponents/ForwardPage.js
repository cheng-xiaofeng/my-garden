import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
class ForwardPage extends Component {
  clickPage = () => {
    this.props.chooseItem()
  }
  render() {
    return (
      <span onClick={this.clickPage}>
        <Link to={this.props.url}>上一页</Link>
      </span>
    );
  }
}

export default ForwardPage;