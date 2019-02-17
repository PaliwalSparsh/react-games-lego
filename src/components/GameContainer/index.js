import React, { useReducer } from "react";
import { GameDataProvider } from "../../contexts/GameData";
import Score from "../Score";
import ProgressBar from "../ProgressBar";
import "./gameContainer.css";

const initialState = { highScore: 0, currentScore: 0, progress: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_HIGH_SCORE":
      return Object.assign({}, state, action.payload);
    case "UPDATE_CURRENT_SCORE":
      return Object.assign({}, state, action.payload);
    case "UPDATE_PROGRESS":
      return Object.assign({}, state, action.payload);
    default:
      return null;
  }
}

function Diglett(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

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
        {props.children}
      </GameDataProvider>
    </div>
  );
}

export default Diglett;
