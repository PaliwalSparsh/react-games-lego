import React, { useContext, useEffect } from "react";
import { GameData } from "../../contexts/GameData";
import Worm from "../Worm";
import "./wormContainer.css";

export default function WormContainer(props) {
  const { wormStates, updateWormState, wormCount, wormSpawnsPerGame } = props;
  const { dispatch, state } = useContext(GameData);

  useEffect(() => {
    dispatch({
      type: "UPDATE_PROGRESS",
      payload: { progress: (wormCount/wormSpawnsPerGame)*100 }
    });
  }, [wormCount]);

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
