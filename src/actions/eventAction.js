import axios from 'axios';
import { EVENT_URL } from '../config';
import { FETCH_EVENTS } from './actionTypes';

// dispatcher
const fetchEvents = (place = '', page = 1) => dispatch => {
    axios.get(EVENT_URL+'?location='+place+'&page='+page)
        .then((response) => {
        	console.log(page);
        	dispatch({
                type: FETCH_EVENTS,
                payload: response.data
            });
        	//if(response.meta.next != null) {
        		fetchEvents(place, page + 1)(dispatch);
        	//}
        })
        .catch(error => console.log('fetchEvents failed', error));
};

export {
    fetchEvents
};