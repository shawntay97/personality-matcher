import React from "react";
import CompatibleMatch from "./utils/CompatibleMatch";
import MbtiExplanation from "./img/mbti-explanation.jpg";
import MbtiIcon from "./img/mbti-icon.jpg";

function Result(props) {
  const compatibleMatches = props.matches.map((matchItem) => {
    return <CompatibleMatch matchItem={matchItem} key={matchItem.id} />;
  });

  return (
    <div class="row">
      <div class="container">
        <div>
          <h3>
            Your personality type is <strong>{props.quizResult}</strong>
          </h3>
          <ul style={{ fontSize: 20 }}>
            <li>
              MBTI: {props.mbti.mbti} <br />
            </li>
            <li>
              Role: {props.mbti.role} <br />
            </li>
            <li>
              Type: {props.mbti.type} <br />
            </li>
            <li>Personality Description: {props.mbti.description}</li>
          </ul>
        </div>
        <div>{compatibleMatches}</div>
        <div style={{ alignItems: "center" }}>
          <img
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            alt="mbti explanation"
            class="materialboxed"
            width="700"
            src={MbtiExplanation}
          ></img>
          <img
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            alt="mbti explanation"
            class="materialboxed"
            width="700"
            src={MbtiIcon}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Result;
