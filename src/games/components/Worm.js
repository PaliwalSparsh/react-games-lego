import React, { useState, useEffect } from "react";
import posed from "react-pose";
import "./worm.css";

const states = {
  0: "inside",
  1: "outside",
  2: "destroy"
};

function Worm(props) {
  const [pose, setPose] = useState(props.pose);
  const Box = posed.div({
    inside: {
      opacity: 0
    },
    outside: {
      opacity: 1
    },
    destroy: { scale: 2, color: "black" }
  });

  return (
    <Box
      className="box"
      onClick={() => {
        setPose(2);
      }}
      pose={states[pose]}
    >
      <div className="head" />
    </Box>
  );
}

export default Worm;
