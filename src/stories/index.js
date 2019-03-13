import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { text, number, color, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import ProgressBar from '../components/ProgressBar';
import Score from '../components/Score';
import Worm from '../components/Worm';
import StartMenu from '../components/StartMenu';
import PauseMenu from '../components/PauseMenu';
import GameOver from '../components/GameOver';
import GameContainer from '../components/GameContainer';

addDecorator(withKnobs);

const UI = 'UI|';
const CHARACTERS = 'CHARACTERS|';
const DEMO = 'DEMO|';
const SCREENS = 'SCREENS|';

//---------------------------------------------------------------------------//

const storiesOfProgressBar = storiesOf(`${UI}ProgressBar`, module);
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

const storiesOfScore = storiesOf(`${UI}Score`, module);
storiesOfScore.add('default', () => {
	const title = text('Title', 'High Score');
	const value = number('Value', 9);
	return <Score title={title} value={value} />;
});

//---------------------------------------------------------------------------//

const storiesOfWorm = storiesOf(`${CHARACTERS}Worm`, module);
storiesOfWorm.add('default', () => {
	const states = { 0: 0, 1: 1, 2: 2 };
	return <Worm state={select('state', states, 1)} onClick={action('click')} />;
});

//---------------------------------------------------------------------------//

const DemoChildrenForScreens = ({ children }) => (
	<div
		style={{
			fontSize: 20,
			textAlign: 'center',
			fontWeight: 800,
			fontFamily: 'Arial',
			color: '#f2929e',
		}}
	>
		{children}
	</div>
);

//---------------------------------------------------------------------------//

const storiesOfGameContainer = storiesOf(`${SCREENS}GameContainer`, module);
storiesOfGameContainer.add('default', () => {
	return (
		<GameContainer note={text('Note', 'Play this game at your own risk.')}>
			Place Game in here.
		</GameContainer>
	);
});

//---------------------------------------------------------------------------//

const storiesOfStartMenu = storiesOf(`${SCREENS}StartMenu`, module);
const StartMenuComponent = () => (
	<StartMenu
		title={text('Title', 'The Game of Life')}
		onClickStart={action('start click')}
		noteForSmallScreens={text('Note for small screens', 'Do this on a small screen.')}
	>
		<DemoChildrenForScreens>
			I would place all required game inputs, rules and other things as children of this component.
		</DemoChildrenForScreens>
	</StartMenu>
);

storiesOfStartMenu.add('with game container', () => {
	return (
		<GameContainer note="Let's see how this looks inside game container.">
			<StartMenuComponent />
		</GameContainer>
	);
});

storiesOfStartMenu.add('without game container', () => {
	return (
		<div style={{ height: 440 }}>
			<StartMenuComponent />
		</div>
	);
});

//---------------------------------------------------------------------------//

const storiesOfGameOver = storiesOf(`${SCREENS}GameOver`, module);
const GameOverComponent = () => (
	<GameOver
		onClickMainMenu={action('Main menu button click')}
		firstLine={text('First Line Text', 'Rakesh WON!!!')}
		secondLine={text('Second Line Text', '🎉 HIGHSCORE 🎉')}
		thirdLine={text('Third Line Text', 'SCORE: 80')}
	/>
);

storiesOfGameOver.add('with game container', () => {
	return (
		<GameContainer note="Let's see how this looks inside game container.">
			<GameOverComponent />
		</GameContainer>
	);
});

storiesOfGameOver.add('without game container', () => {
	return (
		<div style={{ height: 440 }}>
			<GameOverComponent />
		</div>
	);
});

//---------------------------------------------------------------------------//

const storiesOfPauseMenu = storiesOf(`${SCREENS}PauseMenu`, module);
const PauseMenuComponent = () => (
	<PauseMenu onClickResume={action('Resume button click')}>
		<DemoChildrenForScreens>
			I would place all buttons for settings or redirecting to home etc here.
		</DemoChildrenForScreens>
	</PauseMenu>
);

storiesOfPauseMenu.add('with game container', () => {
	return (
		<GameContainer note="Let's see how this looks inside game container.">
			<PauseMenuComponent />
		</GameContainer>
	);
});

storiesOfPauseMenu.add('without game container', () => {
	return (
		<div style={{ height: 440 }}>
			<PauseMenuComponent />
		</div>
	);
});
