import React, { Component } from 'react'

import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom'
import LoginPage from './pages/love/loginPage'
import SignIn from './pages/love/signin'
import GetPassWord from './pages/love/getPassword'
export default class LoveLogin extends Component {

  render() {
    return (
      <div className="loginPage">
        <Router>
          <Switch>
            <Route path='/*' component={LoginPage} />
            <Route path='/signin' component={SignIn} />
            <Route path='/getPassword' component={GetPassWord} />
          </Switch>
        </Router>
      </div>

    )
  }
}
