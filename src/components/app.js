import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather-list';

export default class App extends Component {
  render() {
    return (
      <div id="myweatherng">
        <h1 id="logo">MyWeatherNG</h1>
        <h4 className="text-center">
          Get 5-day weather forecast of any city in Nigeria
        </h4>
        <br />
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
