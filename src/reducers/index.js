import { combineReducers } from 'redux';

import events from './eventReducer';
import places from './placeReducer';

const rootReducer = combineReducers({
	events,
    places
});

export default rootReducer;
