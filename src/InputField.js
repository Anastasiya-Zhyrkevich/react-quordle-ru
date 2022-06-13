import React from 'react';


export default class InputField extends React.Component {
  // Invisible input field to catch entered words
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.value.length > this.props.slots_cnt) {
      return;
    }
    this.setState({value: event.target.value});
    this.props.onTypingInputWord(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.value.length !== this.props.slots_cnt) {
      return;
    }

    this.props.onSubmitInputWord(this.state.value);
    this.setState({value: ''});
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          autoFocus
        />
      </form>
    );
  }
}