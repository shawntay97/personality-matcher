import React from "react";

function Result(props) {
  return (
    <div>
      Your personality type is <strong>{props.quizResult}</strong>!
      <div>
        mbti: {props.mbti.mbti} <br />
        role: {props.mbti.role} <br />
        type: {props.mbti.type} <br />
        description: {props.mbti.description}
      </div>
    </div>
  );
}

export default Result;
