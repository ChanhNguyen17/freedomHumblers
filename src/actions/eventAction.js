import axios from 'axios';
import { EVENT_URL } from '../config';
import { FETCH_EVENTS } from './actionTypes';

// dispatcher
const fetchEvents = (place = '') => dispatch => {
    axios.get(EVENT_URL+'&location='+place)
        .then((response) => {
            dispatch({
                type: FETCH_EVENTS,
                payload: response.data
            });
        })
        .catch(error => console.log('fetchEvents failed', error));
};

export {
    fetchEvents
};
