import React, { Component } from 'react';
import { connect } from 'react-redux';
import Graph from '../components/graph';
import _ from 'lodash';
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
  renderWeather = data => {
    const name = data.city.name;
    // const tempK = data.list.map(weather => weather.main.temp);
    const tempC = _.map(
      data.list.map(weather => weather.main.temp),
      temp => temp - 273
    );
    const pressures = data.list.map(weather => weather.main.pressure);
    const humidities = data.list.map(weather => weather.main.humidity);
    const { lon, lat } = data.city.coord;
    return (
      <tr key={name}>
        <td><GoogleMap lat={lat} lon={lon} /></td>
        <td>
          <Graph data={tempC} color="red" unit="C" />
        </td>
        <td>
          <Graph data={pressures} color="green" unit="hPa" />
        </td>
        <td>
          <Graph data={humidities} color="blue" unit="%" />
        </td>
      </tr>
    );
  };

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City (NG)</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return {
    weather,
  };
}

export default connect(mapStateToProps)(WeatherList);
