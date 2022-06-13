import React from 'react';
import WordRow from './WordRow.js';
import './WordBox.css';

export default class WordBox extends React.Component {
  render() {
    // console.log("WordBox", this.props.attempt_words);

    let valid_attempt_cnt = this.props.attempt_words.length;
    console.log(this.props.attempt_cnt, valid_attempt_cnt)
    return (
      <div className="WordBox">
        <div>
          {
            this.props.attempt_words.map(
              (attempt_word, i) =>
                <WordRow key={i} word={attempt_word} base_word={this.props.base_word}/>
            )
          }
        </div>
        <div>
        {
          Array(this.props.attempt_cnt - valid_attempt_cnt).map(
            (_, i) => <WordRow key={i + valid_attempt_cnt} word={''} base_word={this.props.base_word}/>
          )
        }
        </div>
      </div>
    );
  }
}