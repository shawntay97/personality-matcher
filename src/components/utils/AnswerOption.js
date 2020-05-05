import React, { Component } from "react";

class AnswerOption extends Component {
  render() {
    return (
      <div>
        <button>{this.props.option.answer}</button>
      </div>
    );
  }
}

export default AnswerOption;
