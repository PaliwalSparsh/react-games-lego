import React from 'react';
import PropTypes from 'prop-types';
import './styles/GameOver.style.css';

function GameOver(props) {
	const { onClickMainMenu, firstLine, secondLine, thirdLine } = props;

	return (
		<div className="game-over">
			<div className="game-over__game-completed">GAME COMPLETED</div>
			<div className="game-over__first_line">{firstLine}</div>
			<div className="game-over__second_line">{secondLine}</div>
			<div className="game-over__third_line">{thirdLine}</div>
			<div className="game-over__main-menu-button">
				<button onClick={onClickMainMenu}>MAIN MENU</button>
			</div>
		</div>
	);
}

GameOver.propTypes = {
	onClickMainMenu: PropTypes.func.isRequired,
	firstLine: PropTypes.string.isRequired,
	secondLine: PropTypes.string.isRequired,
	thirdLine: PropTypes.string.isRequired,
};

GameOver.defaultProps = {
	onClickMainMenu: () => {},
	firstLine: 'Player1',
	secondLine: 'is winner.',
	thirdLine: 'HighScore',
};

export default GameOver;
