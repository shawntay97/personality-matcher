import React from "react";

function CompatibleMatch(props) {
  return (
    <div>
      <h3>
        {props.matchItem.personalityType[0]} &#9829;
        {props.matchItem.personalityType[1]}
      </h3>
      <h4>Match Type:</h4>
      <p>{props.matchItem.type}</p>
      <h4>Description:</h4>
      <p>{props.matchItem.description}</p>
    </div>
  );
}

export default CompatibleMatch;
