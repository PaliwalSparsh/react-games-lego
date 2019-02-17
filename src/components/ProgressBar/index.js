import React from "react";
import "./progressBar.css";


function ProgressBar(props) {
  const { progress } = props;
  const style = {
    width: `${progress}%`
  };
  
  return <div className="progress-bar" style={style} progress={progress} pose="default" />;
}

export default ProgressBar;
