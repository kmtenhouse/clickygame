import React from "react";
import "./Score.css"

function ScoreCard(props) {
  return (
    <div className="score-banner container-fluid">
      <div className="container">
        <div className="row d-flex justify-content-start py-2">
          <h5 className="px-2 text-warning">Current Score: {props.currentScore}</h5>
          <h5 className="px-2"> | </h5>
          <h5 className="px-2">Best Score: {props.bestScore}</h5>
        </div>
      </div>
    </div>
  );
}

export default ScoreCard;
