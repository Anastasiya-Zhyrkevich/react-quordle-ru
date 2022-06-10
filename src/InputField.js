import React from 'react';
import LetterBox from './LetterBox.js';

const ORDINARY = 'ordinary';


export default class InputField extends React.Component {
  render() {

    return (
      <div className="InputField">
        {[...Array(this.props.spots_cnt)].map((_, ind) => <LetterBox key={ind} letter='' status={ORDINARY}/>)}
      </div>
    );

  }
}