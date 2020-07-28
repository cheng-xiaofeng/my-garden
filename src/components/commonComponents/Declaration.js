import React, { Component } from 'react';

class DeclarationConst extends Component {
  render() {
    return (
      <span className='declare'>
        const
      </span>
    );
  }
}
class DeclarationLet extends Component {
  render() {
    return (
      <span className='declare'>
        let
      </span>
    );
  }
}
export {
  DeclarationConst,
  DeclarationLet
};