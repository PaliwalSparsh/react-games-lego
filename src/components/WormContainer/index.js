import React, { useContext, useEffect, useState } from "react";
import { GameData } from "../../contexts/GameData";
import Worm from "../Worm";
import "./wormContainer.css";

const WORMS_SPAWNING_PER_TURN = 2;
let oddInterval = true;

function generateWormStates() {
  const allPossibleStates = [[0, 0, 1, 1], [0, 1, 0, 1], [1, 0, 0, 1], [1, 0, 1, 0], [1, 1, 0, 0], [0, 1, 1, 0]];
  const randomState = allPossibleStates[Math.floor(Math.random() * allPossibleStates.length)];
  const updatedState = [...randomState];
  return updatedState;
}

export default function WormContainer(props) {
  const [wormStates, setWormStates] = useState([0, 1, 1, 1]);
  const [wormCount, setWormCount] = useState(0);
  const { dispatch, state } = useContext(GameData);
  const { intervalTime, wormSpawnsPerGame } = props

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
    }, intervalTime);
    return () => {
      clearInterval(generateStates);
    };
  });

  function updateProgress() {
    dispatch({
      type: "UPDATE_PROGRESS",
      payload: { progress: (wormCount / wormSpawnsPerGame) * 100 }
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
    <div className="worm-container">
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
