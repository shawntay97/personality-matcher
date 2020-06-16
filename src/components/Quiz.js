import React from "react";
import Question from "../components/Question";
import QuestionCount from "../components/QuestionCount";
import AnswerOption from "../components/AnswerOption";
import LoveMatchFGWide from "./img/LoveMatchFGWide.png";

function Quiz(props) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }
  return (
    <div class="row">
      <img
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        alt="mbti explanation"
        class="materialboxed"
        width="700"
        src={LoveMatchFGWide}
      ></img>
      <div class="col s12 m16">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text" key={props.questionId}>
            <span class="card-title">
              <QuestionCount
                counter={props.questionId}
                total={props.questionTotal}
              />
            </span>
            <p>
              <Question content={props.question} />
            </p>
          </div>
          <div class="card-action white-text" style={{ alignItems: "cemter" }}>
            {props.answerOptions.map(renderAnswerOptions)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
