
import React from 'react';
import allWords from './5-letters.json';
import _ from 'underscore';

import Field from './Field.js';


const SAMPLES_CNT = 4;
const ATTEMPTS = 7;


export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.startNewGame = this.startNewGame.bind(this);
    this.state = {
      in_progress: false,
      words: []
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
          <Field words={this.state.words} attempts={ATTEMPTS}/>
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

