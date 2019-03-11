import React, { useReducer, useEffect } from 'react';
import { GameDataProvider } from '../contexts/GameData';
import Score from './Score';
import ProgressBar from './ProgressBar';
import './styles/DiglettContainer.style.css';

const PROGRESS_VALUE_FOR_START_MENU = -1;

const initialState = {
  highScore: 0,
  currentScore: 0,
  progress: PROGRESS_VALUE_FOR_START_MENU
};

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_HIGH_SCORE':
      return Object.assign({}, state, action.payload);
    case 'UPDATE_CURRENT_SCORE':
      return Object.assign({}, state, action.payload);
    case 'UPDATE_PROGRESS':
      return Object.assign({}, state, action.payload);
    case 'UPDATE_ALL_VALUES':
      return Object.assign({}, state, action.payload);
    default:
      return null;
  }
}

function StartMenu(props) {
  return (
    <div className="start-menu">
      <div className="start-menu__display-name" onClick={props.onClick}>
        {props.displayName}
      </div>
      <div className="start-menu__play-button" onClick={props.onClick}>
        <svg width="35" height="35" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </div>
    </div>
  );
}

function DiglettContainer(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const showStartMenu = state.progress === PROGRESS_VALUE_FOR_START_MENU;

  useEffect(() => {
    if (state.progress === 100) {
      const isHighScore = state.currentScore > state.highScore;
      dispatch({
        type: 'UPDATE_ALL_VALUES',
        payload: Object.assign(
          { progress: PROGRESS_VALUE_FOR_START_MENU, currentScore: 0 },
          isHighScore ? { highScore: state.currentScore } : {}
        )
      });
    }
  });

  function startGame() {
    dispatch({
      type: 'UPDATE_PROGRESS',
      payload: Object.assign({ progress: 0 })
    });
  }

  return (
    <div className="diglett-container">
      <div className="diglett-container__score">
        <Score title="High Score" value={state.highScore} />
        <Score title="Score" value={state.currentScore} />
      </div>
      <ProgressBar progress={state.progress} />
      <div className="diglett-container__playground">
        <GameDataProvider
          value={{
            state,
            dispatch
          }}
        >
          {showStartMenu ? (
            <StartMenu onClick={startGame} displayName={props.displayName} />
          ) : (
            props.children
          )}
        </GameDataProvider>
      </div>
    </div>
  );
}

export default DiglettContainer;
