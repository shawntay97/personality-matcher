import React from "react";
import CompatibleMatch from "./utils/CompatibleMatch";
import { CSSTransitionGroup } from "react-transition-group";

function Result(props) {
  const compatibleMatches = props.matches.map((matchItem) => {
    return <CompatibleMatch matchItem={matchItem} key={matchItem.id} />;
  });

  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        Your personality type is <strong>{props.quizResult}</strong>! <br />
        MBTI: {props.mbti.mbti} <br />
        Role: {props.mbti.role} <br />
        Type: {props.mbti.type} <br />
        Description: {props.mbti.description}
      </div>
      <div>{compatibleMatches}</div>
    </CSSTransitionGroup>
  );
}

export default Result;
