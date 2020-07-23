import React, { Component } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom'
import NodeContent from './pages/node'
import BlogContent from './pages/blog'
class MainContent extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={NodeContent}/>
        <Route path="/a" exact component={BlogContent}/>
      </Switch>
    );
  }
}

export default MainContent;