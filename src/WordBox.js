import React from 'react';

export default class WordBox extends React.Component {
  render() {
    return (
      <div>
        {this.props.word}
      </div>
    );
  }
}