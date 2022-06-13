import React from 'react';
import './LetterBox.css';


export default class LetterBox extends React.Component {
  render() {
    // console.log(this.props.status, this.props.letter);

    return (
      <div className={"LetterBox " + this.props.status}>
        {this.props.letter}
      </div>
    );
  }
}