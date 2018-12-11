import axios from 'axios';
import { EVENT_URL } from '../config';
import { FETCH_EVENTS } from './actionTypes';

// dispatcher
const fetchEvents = (place = '', page = 1) => dispatch => {
    axios.get(EVENT_URL+'&location='+place+'&page='+page)
        .then((response) => {
        	dispatch({
                type: FETCH_EVENTS,
                payload: response.data,
                page
            });
            dispatch(fetchEvents(place, page + 1));
        })
        .catch(error => console.log('fetchEvents failed', error));
};

export {
    fetchEvents
};
