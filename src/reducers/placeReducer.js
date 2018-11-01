import initialState from './initialState';
import { FETCH_PLACES } from '../actions/actionTypes';

export default function (state = initialState.places, action) {
    switch (action.type) {
        case FETCH_PLACES:
            return action.payload.data;
        default:
            return state;
    }
};
