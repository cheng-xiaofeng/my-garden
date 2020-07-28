import React, { Component } from 'react';

class StatusNumber extends Component {
  render() {
    return (
      <span className="statusNumber">
        {this.props.words}
      </span>
    );
  }
}

export default StatusNumber;