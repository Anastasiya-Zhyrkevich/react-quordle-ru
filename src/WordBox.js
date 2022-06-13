import React from 'react';
import WordRow from './WordRow.js';
import './WordBox.css';

export default class WordBox extends React.Component {
  render() {
    // console.log("WordBox", this.props.attempt_words);

    let valid_attempt_cnt = this.props.attempt_words.length;
    let additional_attempt_words = this.props.attempt_words.concat(
      Array(this.props.attempt_cnt - valid_attempt_cnt).fill('')
    );

    return (
      <div className="WordBox">
        {
          additional_attempt_words.map(
            (attempt_word, i) =>
              <WordRow key={i} word={attempt_word} base_word={this.props.base_word}/>
          )
        }
      </div>
    );
  }
}