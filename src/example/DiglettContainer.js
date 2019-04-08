import React, { useReducer, useEffect } from 'react';
import { GameDataProvider } from './contexts/GameData';
import { reducer, initialState, PROGRESS_VALUE_FOR_START_MENU } from './contexts/reducer';
import Score from '../components/Score';
import ProgressBar from '../components/ProgressBar';
import StartMenu from '../components/StartMenu';
import GameContainer from '../components/GameContainer';
import './styles/DiglettContainer.style.css';

function DiglettContainer(props) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { progress, currentScore, highScore } = state;
	const showStartMenu = progress === PROGRESS_VALUE_FOR_START_MENU;

	useEffect(() => {
		const isGameCompleted = progress === 100;
		if (isGameCompleted) {
			const isHighScore = currentScore > highScore;
			dispatch({
				type: 'UPDATE_ALL_VALUES',
				payload: Object.assign(
					{ progress: PROGRESS_VALUE_FOR_START_MENU, currentScore: 0 },
					isHighScore ? { highScore: currentScore } : {}
				),
			});
		}
	}, [progress, currentScore, highScore]);

	function startGame() {
		dispatch({
			type: 'UPDATE_PROGRESS',
			payload: Object.assign({ progress: 0 }),
		});
	}

	function StartMenuComponent() {
		return (
			<StartMenu
				title="Diglett"
				onClickStart={startGame}
				noteForSmallScreens="Hope you have fun."
			/>
		);
	}

	function GameScreen() {
		return (
			<div>
				<div className="diglett-container__score">
					<Score title="High Score" value={highScore} />
					<Score title="Score" value={currentScore} />
				</div>
				<ProgressBar progress={progress} />
				{props.children}
			</div>
		);
	}

	return (
		<GameContainer>
			<div className="diglett-container__playground">
				<GameDataProvider
					value={{
						state,
						dispatch,
					}}
				>
					{showStartMenu ? <StartMenuComponent /> : <GameScreen />}
				</GameDataProvider>
			</div>
		</GameContainer>
	);
}

export default DiglettContainer;
