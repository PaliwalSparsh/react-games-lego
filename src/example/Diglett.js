import React from 'react';
import DiglettContainer from './DiglettContainer';
import WormContainer from './WormContainer';
import './styles/Diglett.style.css';

function Diglett(props) {
	const { intervalTime, wormSpawnsPerGame } = props;
	return (
		<DiglettContainer displayName="Diglett">
			<WormContainer intervalTime={intervalTime} wormSpawnsPerGame={wormSpawnsPerGame} />
		</DiglettContainer>
	);
}

export default Diglett;
