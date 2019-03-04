import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

function loadStories() {
	require('../src/stories');
}

configure(loadStories, module);
setOptions({
	name: 'React-games-component',
	url: 'https://github.com/PaliwalSparsh/react-games-component',
	addonPanelInRight: true,
});
addParameters({
	viewport: {},
});
addDecorator(withA11y);
