
import React from 'react';
import allWords from './5-letters.json';
import _ from 'underscore';

import Field from './Field.js';
import InputField from './InputField.js';


const SAMPLES_CNT = 4;
const ATTEMPTS = 7;


export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.startNewGame = this.startNewGame.bind(this);
    this.state = {
      in_progress: false,
      words: [],
      attempts: Array(ATTEMPTS).fill('')
    };
  }

  startNewGame() {
    let words = _.sample(allWords, SAMPLES_CNT);
    console.log(words);
    this.setState({
      in_progress: true,
      words
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
          <InputField spots_cnt={this.state.words[0].length}/>
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

