export const PROGRESS_VALUE_FOR_START_MENU = -1;

export const initialState = {
	highScore: 0,
	currentScore: 0,
	progress: PROGRESS_VALUE_FOR_START_MENU,
};

export function reducer(state, action) {
	switch (action.type) {
		case 'UPDATE_HIGH_SCORE':
			return Object.assign({}, state, action.payload);
		case 'UPDATE_CURRENT_SCORE':
			return Object.assign({}, state, action.payload);
		case 'UPDATE_PROGRESS':
			return Object.assign({}, state, action.payload);
		case 'UPDATE_ALL_VALUES':
			return Object.assign({}, state, action.payload);
		default:
			return null;
	}
}
