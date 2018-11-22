import initialState from './initialState';
import { FETCH_EVENTS } from '../actions/actionTypes';

export default function (state = initialState.events, action) {
    switch (action.type) {
        case FETCH_EVENTS:
        	return state.concat(action.payload.data);
            //return action.payload.data;   
        default:
            return state;
    }
};