import React, { useState, useEffect } from "react";
import GameContainer from "../../components/GameContainer";
import WormContainer from "../../components/WormContainer";
import "./diglett.css";

let INTERVAL_TIME = 500;
let oddInterval = true;

function generateWormStates() {
  let updatedState = [];
  let wormCount = 0;
  const randomString = String(parseInt(10000 * Math.random()));
  for (let charIndex = 0; charIndex < randomString.length; charIndex++) {
    const wormState = parseInt(Number(randomString[charIndex]) / 5);
    updatedState.push(wormState);
    if (wormState === 1) {
      wormCount++;
    }
  }
  return [updatedState, wormCount];
}

function Diglett() {
  const [wormStates, setWormStates] = useState([0, 1, 1, 1]);
  const [wormCount, setWormCount] = useState(0);

  function updateWormState(index, wormState) {
    const updatedWormStates = [...wormStates];
    updatedWormStates[index] = wormState;
    setWormStates(updatedWormStates);
  }

  useEffect(() => {
    const generateStates = setInterval(() => {
      let updatedState;
      let onesCount = 0;
      if (oddInterval) {
        [updatedState, onesCount] = generateWormStates();
      } else {
        updatedState = [0, 0, 0, 0];
      }
      oddInterval = !oddInterval;
      setWormCount(wormCount + onesCount);
      setWormStates(updatedState);
    }, INTERVAL_TIME);
    return () => {
      clearInterval(generateStates);
    };
  });

  return (
    <GameContainer>
      <WormContainer
        wormStates={wormStates}
        wormCount={wormCount}
        updateWormState={updateWormState}
      />
    </GameContainer>
  );
}

export default Diglett;
