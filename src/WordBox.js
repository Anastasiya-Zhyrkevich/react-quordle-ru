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
    let active_word_ind = -1;

    if (valid_attempt_cnt !== this.props.attempt_cnt) {
      let current_word = this.props.current_word;
      while (current_word.length !== this.props.base_word.length) {
        current_word += ' ';
      }
      additional_attempt_words[valid_attempt_cnt] = current_word;
      active_word_ind = valid_attempt_cnt;
    }

    return (
      <div className="WordBox">
        {
          additional_attempt_words.map(
            (attempt_word, i) =>
              <WordRow
                key={i}
                word={attempt_word}
                base_word={this.props.base_word}
                is_active={active_word_ind === i}
              />
          )
        }
      </div>
    );
  }
}