import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import RequestReducer from './reducer_request'

const rootReducer = combineReducers({
  weather: WeatherReducer,
  requestStatus: RequestReducer
});

export default rootReducer;
