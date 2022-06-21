import React from 'react';
import WordRow from './WordRow.js';
import './WordBox.css';

const INVALID_IND = -1;


export default class WordBox extends React.Component {

  getCorrectInd(words, base_word) {
    for (let i = 0; i < words.length; i++) {
      if (words[i] === base_word) {
        return i;
      }
    }

    return INVALID_IND;
  }

  render() {
    let valid_attempt_cnt = this.props.attempt_words.length;
    let additional_attempt_words = this.props.attempt_words.concat(
      Array(this.props.attempt_cnt - valid_attempt_cnt).fill('')
    );
    let active_word_ind = INVALID_IND;

    if (valid_attempt_cnt !== this.props.attempt_cnt) {
      let current_word = this.props.current_word;
      while (current_word.length !== this.props.base_word.length) {
        current_word += ' ';
      }
      additional_attempt_words[valid_attempt_cnt] = current_word;
      active_word_ind = valid_attempt_cnt;
    }

    // Clear after correct word
    const correct_ind = this.getCorrectInd(additional_attempt_words, this.props.base_word);
    if (correct_ind !== INVALID_IND) {
      for (let i = correct_ind + 1; i < this.props.attempt_cnt; i++) {
        additional_attempt_words[i] = '';
      }
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