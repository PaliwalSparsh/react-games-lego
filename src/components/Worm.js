import React from "react";
import posed from "react-pose";
import "./styles/Worm.style.css";

const poses = {
  0: "inside",
  1: "outside",
  2: "destroy"
};

const WormBody = posed.div({
  inside: {
    scaleX: 1,
    scaleY: 0,
    originX: "50%",
    originY: "100%"
  },
  outside: {
    scaleX: 1,
    scaleY: 1,
    originX: "50%",
    originY: "100%"
  },
  destroy: {
    scaleX: 0,
    scaleY: 0,
    originX: "50%",
    originY: "50%",
    transition: {
      duration: 100
    }
  }
});

function Worm(props) {
  const { index, wormState, updateWormState } = props;
  function killWorm() {
    updateWormState(index, 2);
  }
  return (
    <WormBody
      className="worm-body"
      onClick={killWorm}
      onTouch={killWorm}
      pose={poses[wormState]}
    >
      <div className="worm-body__eyes">
        <div className="worm-body__eye" />
        <div className="worm-body__eye" />
      </div>
      <div className="worm-body__tongue" />
    </WormBody>
  );
}

export default Worm;
