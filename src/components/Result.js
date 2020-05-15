import React from "react";
import CompatibleMatch from "./utils/CompatibleMatch";

function Result(props) {
  const compatibleMatches = props.matches.map((matchItem) => {
    return <CompatibleMatch matchItem={matchItem} key={matchItem.id} />;
  });

  return (
    <div>
      <div>
        Your personality type is <strong>{props.quizResult}</strong>! <br />
        MBTI: {props.mbti.mbti} <br />
        Role: {props.mbti.role} <br />
        Type: {props.mbti.type} <br />
        Description: {props.mbti.description}
      </div>
      <div>{compatibleMatches}</div>
    </div>
  );
}

export default Result;
