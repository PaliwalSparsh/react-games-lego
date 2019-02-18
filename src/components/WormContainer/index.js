import React, { useContext, useEffect, useState } from "react";
import { GameData } from "../../contexts/GameData";
import Worm from "../Worm";
import "./wormContainer.css";

const INTERVAL_TIME = 1000;
const WORMS_SPAWNING_PER_TURN = 2;
const WORM_SPAWNS_PER_GAME = 30;
let oddInterval = true;

function generateWormStates() {
  const allPossibleStates = [[0,0,1,1], [0,1,0,1], [1,0,0,1], [1,0,1,0], [1,1,0,0], [0,1,1,0]];
  const randomState = allPossibleStates[Math.floor(Math.random()*allPossibleStates.length)];
  const updatedState = [...randomState];
  return updatedState;
}

export default function WormContainer() {
  const [wormStates, setWormStates] = useState([0, 1, 1, 1]);
  const [wormCount, setWormCount] = useState(0);
  const { dispatch, state } = useContext(GameData);

  useEffect(() => {
    const generateStates = setInterval(() => {
      let updatedState;
      if (oddInterval) {
        updatedState = generateWormStates();
        const updatedWormCount = wormCount + WORMS_SPAWNING_PER_TURN;
        setWormCount(updatedWormCount);
        updateProgress(updatedWormCount);
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

  function updateProgress() {
    dispatch({
      type: "UPDATE_PROGRESS",
      payload: { progress: (wormCount/WORM_SPAWNS_PER_GAME)*100 }
    });
  }

  function updateWormState(index, wormState) {
    const updatedWormStates = [...wormStates];
    updatedWormStates[index] = wormState;
    setWormStates(updatedWormStates);
  }

  function updateStatesAndScores(index, wormState) {
    if (wormState === 2) {
      dispatch({
        type: "UPDATE_CURRENT_SCORE",
        payload: { currentScore: state.currentScore + 1 }
      });
    }
    updateWormState(index, wormState);
  }

  return (
    <div className="wormContainer">
      {wormStates.map((wormState, index) => (
        <Worm
          wormState={wormState}
          updateWormState={updateStatesAndScores}
          index={index}
          key={index}
        />
      ))}
    </div>
  );
}
