import React from 'react';
import './CorrectAnswer.css';


export default class CorrectAnswer extends React.Component {
  render() {
    return (
      <div className="CorrectAnswer">
        {
          this.props.words.map((word, i) => (<div key={i} className="CorrectAnswerItem">{word}</div>))
        }
      </div>
    );
  }
}