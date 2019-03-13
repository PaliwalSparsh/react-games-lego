import React from 'react';
import PropTypes from 'prop-types';
import './styles/PauseMenu.style.css';

function PauseMenu(props) {
	const { onClickResume, children } = props;

	return (
		<div className="pause-menu">
			<div className="pause-menu__game-paused">GAME PAUSED</div>
			<div className="pause-menu__body">{children}</div>
			<div className="pause-menu__resume-button">
				<button onClick={onClickResume}>RESUME</button>
			</div>
		</div>
	);
}

PauseMenu.propTypes = {
	onClickResume: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
};

PauseMenu.defaultProps = {
	onClickResume: () => {},
	children: <></>,
};

export default PauseMenu;
