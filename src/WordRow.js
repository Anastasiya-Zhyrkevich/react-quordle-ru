import React from 'react';
import LetterBox from './LetterBox.js';

import './WordRow.css';

const BASIC = 'basic';
const NOT_IN_THE_PLACE = 'not-in-the-place';
const IN_THE_PLACE = 'in-the-place';
const INCORRECT = 'incorrect';
const UNKNOWN = 'unknown';


export default class WordRow extends React.Component {
  constructor(props) {
    super(props);
    this.getStatus = this.getStatus.bind(this);
  }

  getStatus(letter, ind, expectedWord) {
    if (ind < 0 && ind >= expectedWord.length) {
      return UNKNOWN;
    }

    if (letter === expectedWord[ind]) {
      return IN_THE_PLACE;
    }

    if (expectedWord.includes(letter)) {
      return NOT_IN_THE_PLACE;
    }

    return BASIC;
  }

  generateLetters(word, getStatusFunc) {
    return (
      <div className="WordRow">
      {Array.from(word).map(
        (letter, ind) => <LetterBox key={ind} letter={letter} status={getStatusFunc(letter, ind)}/>
      )}
      </div>
    );
  }

  render() {

    // Empty Row
    if (this.props.word.length === 0) {
      return this.generateLetters(
        ' '.repeat(this.props.base_word.length),
        (l, i) => BASIC
      );
    }

    // Active Row
    if (this.props.is_active) {
      // if not valid word with all letters
      if (!this.props.is_current_word_valid && this.props.word.indexOf(' ') === -1) {
        return this.generateLetters(
          this.props.word,
          (l, i) => INCORRECT
        );
      }

      return this.generateLetters(
        this.props.word,
        (l, i) => BASIC
      );
    }

    // Word Row (Full row)
    return this.generateLetters(
      this.props.word,
      (letter, ind) => this.getStatus(letter, ind, this.props.base_word)
    );

  }
}