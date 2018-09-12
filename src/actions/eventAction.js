import { API_URL } from '../config';
import { FETCH_EVENTS } from './actionTypes';

const requestGet = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
};

// dispatcher
const fetchEvents = () => dispatch => {
    fetch(API_URL, requestGet)
        .then((response) => {
            return response.json();
        })
        .then((responseJson) => {
            dispatch({
                type: FETCH_EVENTS,
                payload: responseJson
            });
        })
        .catch((error) => console.log('fetchEvents failed', error));
};

export {
    fetchEvents
};
