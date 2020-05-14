import React from "react";
import CompatibleMatch from "./utils/CompatibleMatch";

function Result(props) {
  console.log("thisprops in results: ", props);
  const compatibleMatches = props.matches.map((matchItem) => {
    return <CompatibleMatch matchItem={matchItem} key={matchItem.id} />;
  });

  return (
    <div>
      Your personality type is <strong>{props.quizResult}</strong>!
      <div>
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
