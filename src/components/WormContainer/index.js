import React, { useContext } from "react";
import { GameData } from "../../contexts/GameData";
import Worm from "../Worm";
import "./wormContainer.css";

export default function WormContainer(props) {
  const { wormStates, updateWormState, wormCount } = props;
  const { dispatch, currentScore } = useContext(GameData);

  dispatch({
    type: "UPDATE_PROGRESS",
    value: wormCount
  });

  function updateStatesAndScores(index, wormState) {
    if (wormState === 2) {
      dispatch({
        type: "UPDATE_CURRENT_SCORE",
        value: currentScore + 1
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
