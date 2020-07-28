import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link
} from 'react-router-dom'
class ForwardPage extends Component {
  render() {
    return (
      <div>
        <Router>
          <Link to={this.props.url}>上一页</Link>
        </Router>
      </div>
    );
  }
}

export default ForwardPage;