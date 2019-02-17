import React, { useState } from "react";
import { GameDataProvider } from "../../contexts/GameData";
import Score from "../Score";
import "./gameContainer.css";

function Diglett(props) {
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [progress, setProgress] = useState(0);

  const dispatch = (action) => {
    const { type, value } = action;
    switch (type) {
      case "UPDATE_HIGH_SCORE":
        return setHighScore(value);
      case "UPDATE_CURRENT_SCORE":
        return setCurrentScore(value);
      case "UPDATE_PROGRESS":
        return setProgress(value);
      default:
        return null;
    }
  }

  return (
    <div className="game-container">
      <div className="game-container__score">
        <Score title="High Score" value={highScore} />
        <Score title="Score" value={currentScore} />
        <Score title="Progress" value={progress} />
      </div>
      <GameDataProvider
        value={{
          progress,
          highScore,
          currentScore,
          dispatch
        }}
      >
        {props.children}
      </GameDataProvider>
    </div>
  );
}

export default Diglett;
