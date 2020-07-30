import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link
} from 'react-router-dom'
class ForwardPage extends Component {
  clickPage = () => {
    this.props.chooseItem()
  }
  render() {
    return (
      <div onClick={this.clickPage}>
        <Link to={this.props.url}>上一页</Link>
      </div>
    );
  }
}

export default ForwardPage;