import React, { useState, useEffect } from "react";
import GameContainer from "../../components/GameContainer";
import WormContainer from "../../components/WormContainer";
import "./diglett.css";

const INTERVAL_TIME = 500;
const WORMS_SPAWNING_PER_TURN = 2;
const WORM_SPAWNS_PER_GAME = 30;
let oddInterval = true;

function generateWormStates() {
  const allPossibleStates = [[0,0,1,1], [0,1,0,1], [1,0,0,1], [1,0,1,0], [1,1,0,0], [0,1,1,0]];
  const randomState = allPossibleStates[Math.floor(Math.random()*allPossibleStates.length)];
  const updatedState = [...randomState];
  return updatedState;
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
      if (oddInterval) {
        updatedState = generateWormStates();
      } else {
        updatedState = [0, 0, 0, 0];
      }
      oddInterval = !oddInterval;
      setWormCount(wormCount + WORMS_SPAWNING_PER_TURN);
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
        wormSpawnsPerGame={WORM_SPAWNS_PER_GAME}
        updateWormState={updateWormState}
      />
    </GameContainer>
  );
}

export default Diglett;
