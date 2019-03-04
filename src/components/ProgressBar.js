import React from "react";
import "./styles/ProgressBar.style.css";


function ProgressBar(props) {
  const { progress } = props;
  const completedBarStyle = {
    width: `${progress}%`
  };
  const remainingBarStyle = {
    width: `${100 - progress}%`
  };

  return (
    <div className="progress-bar">
      <div className="progress-bar__completed" style={completedBarStyle} />
      <div className="progress-bar__remaining" style={remainingBarStyle} />
    </div>
  );
}

export default ProgressBar;
