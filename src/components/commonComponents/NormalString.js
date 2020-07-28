import React, { Component } from 'react';

class NormalString extends Component {
  render() {
    return (
      <span className="normalString">
        '{this.props.words}'
      </span>
    );
  }
}

export default NormalString;