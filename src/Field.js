import React from 'react';
import WordBox from './WordBox.js';


export default class Field extends React.Component {
  render() {
    console.log('Field render');

    return (
      <div>
        {this.props.words.map(word => (<WordBox key={word} base_word={word} attempt_words={this.props.attempt_words} />))}
      </div>
    );
  }
}