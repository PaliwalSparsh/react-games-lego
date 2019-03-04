import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, color } from '@storybook/addon-knobs';

import ProgressBar from '../components/ProgressBar';
import Score from '../components/Score';
import Worm from '../components/Worm';

//---------------------------------------------------------------------------//

const storiesOfProgressBar = storiesOf('ProgressBar', module);
storiesOfProgressBar.addDecorator(withKnobs);
storiesOfProgressBar.add('default', () => {
	const label = 'Progress';
	const defaultValue = 30;
	const options = {
		range: true,
		min: 0,
		max: 100,
		step: 1,
	};
	const progress = number(label, defaultValue, options);

	const colorLabel = 'Color';
	const defaultColorValue = 'black';
	const colorValue = color(colorLabel, defaultColorValue);

	return <ProgressBar progress={progress} color={colorValue} />;
});

//---------------------------------------------------------------------------//

const storiesOfScore = storiesOf('Score', module);
storiesOfScore.addDecorator(withKnobs);
storiesOfScore.add('default', () => {
	const textLabel = 'Text';
	const textDefaultValue = 'High Score';
	const textValue = text(textLabel, textDefaultValue);

	const valueLabel = 'Value';
	const defaultValue = 9;
	const value = number(valueLabel, defaultValue);

	return <Score text={textValue} value={value} />;
});

//---------------------------------------------------------------------------//

const storiesOfWorm = storiesOf('Worm', module);
storiesOfWorm.addDecorator(withKnobs);
storiesOfWorm.add('default', () => {
	const textLabel = 'Text';
	const textDefaultValue = 'High Score';
	const textValue = text(textLabel, textDefaultValue);

	const valueLabel = 'Value';
	const defaultValue = 9;
	const value = number(valueLabel, defaultValue);

	return <Score text={textValue} value={value} />;
});
