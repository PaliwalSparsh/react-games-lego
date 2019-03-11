import React from 'react';
import PropTypes from 'prop-types';
import './styles/GameContainer.style.css';

function GameContainer(props) {
	const { children, note } = props;

	return (
		<div className="game-container">
			<div className="game-container__body">{children}</div>
			<div className="game-container__footer">{note}</div>
		</div>
	);
}

GameContainer.propTypes = {
	note: PropTypes.string,
	children: PropTypes.node,
};

GameContainer.defaultProps = {
	note: 'This game is awesome',
	children: undefined,
};

export default GameContainer;
