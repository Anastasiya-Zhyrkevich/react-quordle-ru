import React from 'react';
import WordBox from './WordBox.js';
import './Field.css';


export default class Field extends React.Component {
  render() {

    return (
      <div className='Field'>
        {this.props.words.map(word => (
          <WordBox
            key={word}
            base_word={word}
            attempt_words={this.props.attempt_words}
            attempt_cnt={this.props.attempt_cnt}
            current_word={this.props.current_word}
            is_current_word_valid={this.props.is_current_word_valid}
          />
        ))}
      </div>
    );
  }
}