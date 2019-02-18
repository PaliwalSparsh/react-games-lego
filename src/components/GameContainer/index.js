import React, { useReducer, useEffect } from "react";
import { GameDataProvider } from "../../contexts/GameData";
import Score from "../Score";
import ProgressBar from "../ProgressBar";
import "./gameContainer.css";

const PROGRESS_VALUE_FOR_START_MENU = -1;

const initialState = {
  highScore: 0,
  currentScore: 0,
  progress: PROGRESS_VALUE_FOR_START_MENU
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_HIGH_SCORE":
      return Object.assign({}, state, action.payload);
    case "UPDATE_CURRENT_SCORE":
      return Object.assign({}, state, action.payload);
    case "UPDATE_PROGRESS":
      return Object.assign({}, state, action.payload);
    case "UPDATE_ALL_VALUES":
      return Object.assign({}, state, action.payload);
    default:
      return null;
  }
}

function PlayButton(props) {
  return (
    <div className="play-button" onClick={props.onClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M8 5v14l11-7z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </div>
  );
}

function Diglett(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const showStartMenu = state.progress === PROGRESS_VALUE_FOR_START_MENU;

  useEffect(() => {
    if (state.progress === 100) {
      const isHighScore = state.currentScore > state.highScore;
      dispatch({
        type: "UPDATE_ALL_VALUES",
        payload: Object.assign(
          { progress: PROGRESS_VALUE_FOR_START_MENU, currentScore: 0 },
          isHighScore ? { highScore: state.currentScore } : {}
        )
      });
    }
  });

  function startGame() {
    dispatch({
      type: "UPDATE_PROGRESS",
      payload: Object.assign({ progress: 0 })
    });
  }

  return (
    <div className="game-container">
      <div className="game-container__score">
        <Score title="High Score" value={state.highScore} />
        <Score title="Score" value={state.currentScore} />
      </div>
      <ProgressBar progress={state.progress} />
      <GameDataProvider
        value={{
          state,
          dispatch
        }}
      >
        {showStartMenu ? <PlayButton onClick={startGame} /> : props.children}
      </GameDataProvider>
    </div>
  );
}

export default Diglett;
