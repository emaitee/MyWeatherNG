import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange = ({ target }) =>
    this.setState({
      term: target.value,
    });

  onFormSubmit = e => {
    e.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  };

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Get a five-day forecast in any city in Nigeria"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
