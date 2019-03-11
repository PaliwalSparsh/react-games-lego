import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { text, number, color, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import ProgressBar from '../components/ProgressBar';
import Score from '../components/Score';
import Worm from '../components/Worm';
import StartMenu from '../components/StartMenu';

addDecorator(withKnobs);

//---------------------------------------------------------------------------//

const storiesOfProgressBar = storiesOf('ProgressBar', module);
storiesOfProgressBar.add('default', () => {
	const options = {
		range: true,
		min: 0,
		max: 100,
		step: 1,
	};
	const progress = number('Progress', 30, options);
	const colorValue = color('Color', 'black');
	return <ProgressBar progress={progress} color={colorValue} />;
});

//---------------------------------------------------------------------------//

const storiesOfScore = storiesOf('Score', module);
storiesOfScore.add('default', () => {
	const title = text('Title', 'High Score');
	const value = number('Value', 9);
	return <Score title={title} value={value} />;
});

//---------------------------------------------------------------------------//

const storiesOfWorm = storiesOf('Worm', module);
storiesOfWorm.add('default', () => {
	const states = { 0: 0, 1: 1, 2: 2 };
	return <Worm state={select('state', states, 1)} onClick={action('click')} />;
});

//---------------------------------------------------------------------------//

const storiesOfStartMenu = storiesOf('StartMenu', module);
storiesOfStartMenu.add('default', () => {
	return (
		<div style={{ height: 440 }}>
			<StartMenu
				title={text('Title', 'The Game of Life')}
				onClickStart={action('start click')}
				noteForSmallScreens={text('Note for small screens', 'Do this on a small screen.')}
			>
				Thats all folks
			</StartMenu>
		</div>
	);
});
