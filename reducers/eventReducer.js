import initialState from './initialState';

export default function (state = initialState.events, action) {
    switch (action.type) {
        default:
            return state;
    }
};
