import React, { useContext, useEffect, useState } from 'react';
import { GameData } from './contexts/GameData';
import Worm from '../components/Worm';
import './styles/WormContainer.style.css';

const WORMS_SPAWNING_PER_TURN = 2;
const WORM_DESTROY_STATE = 2;
let oddInterval = false;

function generateWormStates() {
	const allPossibleStates = [
		[0, 0, 1, 1],
		[0, 1, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 1, 0],
		[1, 1, 0, 0],
		[0, 1, 1, 0],
	];
	const randomState = allPossibleStates[Math.floor(Math.random() * allPossibleStates.length)];
	const updatedState = [...randomState];
	return updatedState;
}

export default function WormContainer(props) {
	const [wormStates, setWormStates] = useState([0, 1, 1, 1]);
	const [wormCount, setWormCount] = useState(0);
	const { dispatch, state } = useContext(GameData);
	const { intervalTime, wormSpawnsPerGame } = props;

	useEffect(() => {
		const generateStates = setInterval(() => {
			let updatedState;
			if (oddInterval) {
				updatedState = generateWormStates();
				const updatedWormCount = wormCount + WORMS_SPAWNING_PER_TURN;
				setWormCount(updatedWormCount);
				updateProgress();
			} else {
				updatedState = [0, 0, 0, 0];
			}
			oddInterval = !oddInterval;
			setWormStates(updatedState);
		}, intervalTime);
		return () => clearInterval(generateStates);
	});

	function updateProgress() {
		dispatch({
			type: 'UPDATE_PROGRESS',
			payload: { progress: (wormCount / wormSpawnsPerGame) * 100 },
		});
	}

	function updateWormState(index, wormState) {
		const updatedWormStates = [...wormStates];
		updatedWormStates[index] = wormState;
		setWormStates(updatedWormStates);
	}

	function killWorm(index) {
		return function() {
			dispatch({
				type: 'UPDATE_CURRENT_SCORE',
				payload: { currentScore: state.currentScore + 1 },
			});
			updateWormState(index, WORM_DESTROY_STATE);
		};
	}

	return (
		<div className="worm-container">
			{wormStates.map((wormState, index) => (
				<Worm state={wormState} onClick={() => killWorm(index)} key={index} />
			))}
		</div>
	);
}
