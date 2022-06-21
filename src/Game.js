
import React from 'react';
import allWords from './5-letters.json';
import _ from 'underscore';

import Field from './Field.js';
import InputField from './InputField.js';
import CorrectAnswer from './CorrectAnswer.js';


const WORD_LENGTH = 5;
const BOXES_CNT = 4;
const ATTEMPTS = 7;

const States = {
  NOT_STARTED: 0,
  IN_RROGRESS: 1,
  IS_OVER: 2
};


export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.startNewGame = this.startNewGame.bind(this);
    this.typingCurrentWord = this.typingCurrentWord.bind(this);
    this.submitCurrentWord = this.submitCurrentWord.bind(this);

    this.state = {
      progress: States.NOT_STARTED,
      words: [],
      attempts: [],
      current_word: '',
      is_current_word_valid: false
    };
  }

  startNewGame() {
    let words = _.sample(allWords, BOXES_CNT);
    console.log(words);
    this.setState({
      progress: States.IN_PROGRESS,
      words,
      attempts: [],
      current_word: '',
      is_current_word_valid: false
    });
  }

  isValidWord(word) {
    return allWords.includes(word);
  }

  typingCurrentWord(word) {
    if (this.state.progress !== States.IN_PROGRESS) {
      return;
    }

    this.setState({
      current_word: word,
      is_current_word_valid: this.isValidWord(word)
    });
  }

  submitCurrentWord(word) {
    if (this.state.progress !== States.IN_PROGRESS) {
      return false;
    }

    if (!this.isValidWord(word)) {  // Impossible to submit invalid word
      return false;
    }

    let progress = States.IN_PROGRESS;
    if (this.state.attempts.length + 1 === ATTEMPTS) {
      progress = States.IS_OVER;
    }
    this.setState(prevState => ({
      progress,
      attempts: [...prevState.attempts, word],
      current_word: ''
    }));
    return true;
  }

  render() {
    if (this.state.progress === States.NOT_STARTED) {
      return (
        <div>
          <button onClick={this.startNewGame}>New game</button>
        </div>
      );
    }

    let title = 'Game has been started';
    if (this.state.progress === States.IS_OVER) {
      title = 'Game is over';
    }

    let game = (
      <div>
        <div>{title}</div>
        <Field
          words={this.state.words}
          attempt_words={this.state.attempts}
          attempt_cnt={ATTEMPTS}
          current_word={this.state.current_word}
          is_current_word_valid={this.state.is_current_word_valid}
        />
        <InputField
          onTypingInputWord={this.typingCurrentWord}
          onSubmitInputWord={this.submitCurrentWord}
          slots_cnt={WORD_LENGTH}
        />
      </div>
    );

    if (this.state.progress === States.IN_PROGRESS) {
      return (
        <div>
          <button onClick={this.startNewGame}>New game</button>
          {game}
        </div>
      );

    }

    return (
      <div>
        <button onClick={this.startNewGame}>New game</button>
        {game}
        <CorrectAnswer words={this.state.words}/>
      </div>
    );
  }
}

