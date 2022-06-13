import React from 'react';
import LetterBox from './LetterBox.js';

import './WordRow.css';

const BASIC = 'basic';
const NOT_IN_THE_PLACE = 'not-in-the-place';
const IN_THE_PLACE = 'in-the-place';
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

  render() {
    // console.log("WordRow", this.props.base_word, this.props.word);

    // Empty Row
    if (this.props.word.length === 0) {
      return (
        <div className="WordRow">
          {Array.from(this.props.base_word).map((letter, i) => <LetterBox key={i} letter='' status={BASIC}/>)}
        </div>
      );
    }

    // Full Row
    return (
      <div className="WordRow">
        {
          Array.from(this.props.word).map(
            (letter, ind) => <LetterBox key={ind} letter={letter} status={this.getStatus(letter, ind, this.props.base_word)}/>
          )
        }
      </div>
    );
  }
}