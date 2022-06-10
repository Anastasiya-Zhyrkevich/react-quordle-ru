import React from 'react';

export default class WordRow extends React.Component {
  render() {
    return (
      <div className="WordRow">
        {this.props.word}
      </div>
    );
  }
}