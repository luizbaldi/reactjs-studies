import * as types from './actionTypes';

function url() {
    return 'https://api.myjson.com/bins/b32kf'
}

export function receiveStuff(json) {
    return {
        type: types.RECEIVE_STUFF,
        stuff: json.stuff
    };
}

export function fetchStuff() {
    return dispatch => {
        return window.fetch(url(), {
            method: 'GET'
        })
        .then(response => response.text())
        .then(json => dispatch(receiveStuff(json)))
    };
}