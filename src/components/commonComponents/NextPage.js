import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link
} from 'react-router-dom'
class NextPage extends Component {
  render() {
    return (
      <span className="nextPage">
        <Router>
          <Link to={this.props.url}>下一页</Link>
        </Router>
      </span>
    );
  }
}

export default NextPage;