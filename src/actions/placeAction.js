import axios from 'axios';
import { PLACE_URL } from '../config';
import { FETCH_PLACES } from './actionTypes';

// dispatcher
const fetchPlaces = () => dispatch => {
    axios.get(PLACE_URL)
        .then((response) => {
            dispatch({
                type: FETCH_PLACES,
                payload: response.data
            });
        })
        .catch(error => console.log('fetchPlaces failed', error));
};

export {
    fetchPlaces
};
