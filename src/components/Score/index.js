import React from "react";
import "./score.css";

function Score(props) {
  return (
    <div className="score-container">
      <div className="title">{props.title}</div>
      <div className="value">{props.value}</div>
    </div>
  );
}

export default Score;
