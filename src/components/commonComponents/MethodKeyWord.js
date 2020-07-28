import React, { Component } from 'react'

export default class MethodKeyWord extends Component {
  render() {
    return (
      <span className="methodKeyWord">
        {this.props.words}
      </span>
    )
  }
}
