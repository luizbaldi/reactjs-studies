import { FETCH_WEATHER } from '../actions';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            console.log('Fetching weather reducer...');
            return [ action.payload.data, ...state ];
        default:
            return state;
    }
}