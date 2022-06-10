import React from 'react';
import WordRow from './WordRow.js';
import './WordBox.css';

export default class WordBox extends React.Component {
  render() {
    return (
      <div className="WordBox">
        {
          this.props.attempt_words.map((attempt_word, i) =>
            <WordRow key={i} word={attempt_word} base_word={this.props.base_word}/>
          )
        }
      </div>
    );
  }
}