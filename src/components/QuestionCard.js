import React, { Component } from "react";
import AnswerOption from "./utils/AnswerOption";

class QuestionCard extends Component {
  render() {
    const questionText = this.props.questionItem.question;
    const AnswerOptions = this.props.questionItem.options.map((option) => {
      return <AnswerOption option={option} key={option} />;
    });
    return (
      <div>
        <h3>{questionText}</h3>
        <div>{AnswerOptions}</div>
      </div>
    );
  }
}

export default QuestionCard;
