import React, { Component } from 'react';

class SpecialForm extends Component {
  render() {
    return (
      <span className="specialForm">
        {`\$\{${this.props.words}\}`}
      </span>
    );
  }
}

export default SpecialForm;