import axios from 'axios';
import { API_KEY } from '../keys';
import { FETCH_WEATHER, LOADING, RESPONSE_RECEIVED, ERROR } from './actions';

// add CORS_ANYWHERE to solve the CORS error
const CORS_ANYWHERE_DOMAIN = 'https://cors-anywhere.herokuapp.com';

// Note:
// You can signup on openweathermap.org to get your own api key

const ROOL_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
  return dispatch => {
    const url = `${CORS_ANYWHERE_DOMAIN}/${ROOL_URL}&q=${city},ng`;
    axios
      .get(url)
      .then(response => {
        dispatch(setFetchWeather(response));
        dispatch(responseReceived());
      })
      .catch(err => {
        dispatch(error('City not found'));
      });
  };
}

function setFetchWeather(request) {
  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}

export function loading() {
  return {
    type: LOADING,
  };
}

function responseReceived() {
  return {
    type: RESPONSE_RECEIVED,
  };
}

function error(err) {
  return {
    type: ERROR,
    error: err,
  };
}
