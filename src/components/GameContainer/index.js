import React, { useState } from "react";
import { GameData } from "../../contexts/GameData";
import Score from "../Score";
import "./gameContainer.css";

function Diglett(props) {
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [progress, setProgress] = useState(0);

  const updateHighScore = (score) => {
    setHighScore(score);
  }

  const updateCurrentScore = (score) => {
    setCurrentScore(score);
  }

  const updateProgress = (value) => {
    setProgress(value);
  }

  return (
    <div className="game-container">
      <div className="game-container__score">
        <Score title="High Score" value={highScore} />
        <Score title="Score" value={currentScore} />
      </div>
      <GameData.Provider
        value={{
          progress,
          highScore,
          currentScore,
          updateHighScore,
          updateCurrentScore,
          updateProgress
        }}
      >
        {props.children}
      </GameData.Provider>
    </div>
  );
}

export default Diglett;
