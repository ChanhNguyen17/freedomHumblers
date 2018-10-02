import axios from 'axios';
import { API_URL } from '../config';
import { FETCH_EVENTS } from './actionTypes';

// dispatcher
const fetchEvents = () => dispatch => {
    axios.get(API_URL)
        .then((response) => {
            console.log('test---', response.data);
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
