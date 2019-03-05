import { configure, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';

addParameters({
	options: {
		theme: create({
			base: 'light',
			brandTitle: 'React-games-component',
			brandUrl: 'https://github.com/PaliwalSparsh/react-games-component',
		}),
		isFullscreen: false,
		panelPosition: 'right',
	},
});
addParameters({ viewport: {} });
addParameters({ a11y: {} });

function loadStories() {
	require('../src/stories');
}

configure(loadStories, module);
