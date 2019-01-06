import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import SpinnerReducer from './reducer_spinner'

const rootReducer = combineReducers({
  weather: WeatherReducer,
  spinner: SpinnerReducer
});

export default rootReducer;
