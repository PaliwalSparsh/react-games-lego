import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import './styles/StartMenu.style.css';
import '../global.css';

function StartMenu(props) {
	const [width, setWidth] = useState(window.innerWidth);
	const { title, icon, children, onClickStart, noteForSmallScreens } = props;
	const isSmallScreen = width < 480;

	const changeWidth = useCallback(() => {
		setWidth(window.innerWidth);
	}, []);

	useEffect(() => {
		window.addEventListener('resize', changeWidth);
		return () => {
			window.removeEventListener('resize', changeWidth);
		};
	});

	return (
		<div className="start-menu">
			<div className="start-menu__header">
				{icon && <img className="start-menu__game-logo" src={icon} alt="logo" />}
				<div>{title}</div>
			</div>
			<div className="start-menu__body">{children}</div>
			<div className="start-menu__footer">
				<div className="start-menu__button">
					<button onClick={onClickStart}>START GAME</button>
				</div>
				{isSmallScreen && <div className="start-menu__note">{noteForSmallScreens}</div>}
			</div>
		</div>
	);
}

StartMenu.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string,
	children: PropTypes.node,
	onClickStart: PropTypes.func.isRequired,
	noteForSmallScreens: PropTypes.string.isRequired,
};

StartMenu.defaultProps = {
	title: 'The game of life',
	icon: undefined,
	children: undefined,
	onClickStart: () => {},
	noteForSmallScreens: 'Enter note for small screens',
};

export default StartMenu;
