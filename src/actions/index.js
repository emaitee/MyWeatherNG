import axios from 'axios';
import { API_KEY } from '../keys';
import { FETCH_WEATHER } from './actions';

// add CORS_ANYWHERE to solve the CORS error
const CORS_ANYWHERE_DOMAIN = 'https://cors-anywhere.herokuapp.com';

// Note:
// You can signup on openweathermap.org to get your own api key

const ROOL_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
  const url = `${CORS_ANYWHERE_DOMAIN}/${ROOL_URL}&q=${city},ng`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
