
import React from 'react';
import allWords from './5-letters.json';
import _ from 'underscore';

import Field from './Field.js';
import InputField from './InputField.js';


const WORD_LENGTH = 5;
const BOXES_CNT = 4;
const ATTEMPTS = 7;


export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.startNewGame = this.startNewGame.bind(this);
    this.typingCurrentWord = this.typingCurrentWord.bind(this);
    this.submitCurrentWord = this.submitCurrentWord.bind(this);

    this.state = {
      in_progress: false,
      words: [],
      attempts: Array(ATTEMPTS).fill(''),
      current_word: '',
      currrent_ind: 0
    };
  }

  startNewGame() {
    let words = _.sample(allWords, BOXES_CNT);
    console.log(words);
    this.setState({
      in_progress: true,
      words
    });
  }

  typingCurrentWord(word) {
    console.log('typingCurrentWord');
    this.setState({current_word: word});
  }

  submitCurrentWord(word) {
    console.log('submitCurrentWord');

    let attempts = this.state.attempts;
    attempts[this.state.current_ind] = word;

    this.setState({
      attempts,
      current_ind: this.state.current_ind + 1,
      current_word: ''
    });
  }

  render() {
    let game = <div/>;
    console.log('Game render');

    if (this.state.in_progress) {
      game = (
        <div>
          <div>Game has been started</div>
          <Field words={this.state.words} attempt_words={this.state.attempts}/>
          <InputField
            onTypingInputWord={this.typingCurrentWord}
            onSubmitInputWord={this.submitCurrentWord}
            slots_cnt={WORD_LENGTH}
          />
        </div>
      );
    }

    return (
      <div>
        <button onClick={this.startNewGame}>New game</button>
        {game}
      </div>
    );
  }
}

