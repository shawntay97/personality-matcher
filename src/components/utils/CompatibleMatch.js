import React from "react";
import MbtiIcon from "../img/match-img.png";

function CompatibleMatch(props) {
  return (
    <div class="card lime lighten-5">
      <div class="card-image waves-effect waves-block waves-light">
        <img alt="lovey dovey" class="activator" src={MbtiIcon}></img>
      </div>

      <div class="card-content">
        <span class="card-title">
          {props.matchItem.personalityType[0]}&#9829;
          {props.matchItem.personalityType[1]}
        </span>

        <span class="card-title">Match Type: {props.matchItem.type}</span>
        <span class="card-title activator grey-text text-darken-4">
          <i class="material-icons">chevron_right</i>Learn More
          <i class="material-icons right">more_vert</i>
        </span>
      </div>

      <div class="card-reveal lime lighten-5">
        <span class="card-title">
          Comparibility Description<i class="material-icons right">close</i>
        </span>
        <p style={{ fontSize: 18 }}>{props.matchItem.description}</p>
      </div>
    </div>
  );
}

export default CompatibleMatch;
