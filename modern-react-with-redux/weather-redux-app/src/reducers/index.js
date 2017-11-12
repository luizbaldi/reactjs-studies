import { combineReducers } from 'redux';
import WeatherReducer from './WeatherReducer';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
