import React, { useState, useEffect } from "react";
import GameContainer from "../../components/GameContainer";
import Worm from "../../components/Worm";
import "./diglett.css";

let INTERVAL_TIME = 500;
let oddInterval = true;

function generateWormStates() {
  let updatedState = [];
  let progressCount = 0;
  const randomString = String(parseInt(10000 * Math.random()));
  for (let charIndex = 0; charIndex < randomString.length; charIndex++) {
    const wormState = parseInt(Number(randomString[charIndex]) / 5)
    updatedState.push(wormState);
    if(wormState === 1) {
      progressCount++;
    }
  }
  return [updatedState, progressCount];
}

function Diglett() {
  const [wormStates, setWormStates] = useState([0, 1, 1, 1]);

  const updateWormState = (index, wormState) => {
    const updatedWormStates = [...wormStates];
    updatedWormStates[index] = wormState;
    setWormStates(updatedWormStates);
  };

  useEffect(() => {
    const generateStates = setInterval(() => {
      let updatedState;
      if (oddInterval) {
        updatedState = generateWormStates();
      } else {
        updatedState = [0, 0, 0, 0];
      }
      oddInterval = !oddInterval;
      setWormStates(updatedState);
    }, INTERVAL_TIME);
    return () => {
      clearInterval(generateStates);
    };
  });

  return (
    <GameContainer>
      <div className="wormContainer">
        {wormStates.map((wormState, index) => (
          <Worm
            wormState={wormState}
            updateWormState={updateWormState}
            index={index}
            key={index}
          />
        ))}
      </div>
    </GameContainer>
  );
}

export default Diglett;
