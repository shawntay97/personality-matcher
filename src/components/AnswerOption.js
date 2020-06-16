import React from "react";

function AnswerOption(props) {
  return (
    <div style={{ margin: 10 }}>
      <input
        type="radio"
        name="radioGroup"
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <div style={{ color: "orange", fontSize: 24 }}>
        <i class="material-icons">chevron_right</i>
        <label
          style={{ color: "orange", fontSize: 22 }}
          htmlFor={props.answerType}
        >
          {props.answerContent}
        </label>
      </div>
    </div>
  );
}

export default AnswerOption;
