import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
class NextPage extends Component {
  clickPage = () => {
    this.props.chooseItem()
  }
  render() {
    return (
      <span className="nextPage" onClick={this.clickPage}>
        <Link to={this.props.url}>下一页</Link>
      </span>
    );
  }
}

export default NextPage;