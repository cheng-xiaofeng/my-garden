import React, { Component } from 'react';

class Keyword extends Component {
  render() {
    return (
      <span className="keyword">
        {this.props.words}
      </span>
    );
  }
}

export default Keyword;