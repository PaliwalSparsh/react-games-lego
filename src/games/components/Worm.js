import React, { useState, useEffect } from "react";
import posed from "react-pose";
import "./worm.css";

const states = {
  0: "inside",
  1: "outside",
  2: "destroy"
};

function Worm(props) {
  const [pose, setPose] = useState(0);
  const Box = posed.div({
    inside: { 
        // height: "1vh", 
        opacity: 0 },
    outside: { 
        // height: "14vh",
         opacity: 1 },
    destroy: { scale: 2 }
  });

  useEffect(() => {
    setPose(props.pose)
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
