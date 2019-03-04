import React from 'react';
import PropTypes from 'prop-types';
import './styles/ProgressBar.style.css';

function ProgressBar(props) {
	const { progress, color } = props;
	const completedBarStyle = {
		width: `${progress}%`,
		backgroundColor: color,
	};
	const remainingBarStyle = {
		width: `${100 - progress}%`,
	};

	return (
		<div className="progress-bar">
			<div className="progress-bar__completed" style={completedBarStyle} />
			<div className="progress-bar__remaining" style={remainingBarStyle} />
		</div>
	);
}

ProgressBar.propTypes = {
	color: PropTypes.string,
	progress: PropTypes.number.isRequired,
};

ProgressBar.defaultProps = {
	color: '#6f6fff',
	progress: 10,
};

export default ProgressBar;
