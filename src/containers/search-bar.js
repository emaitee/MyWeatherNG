import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather, loading } from '../actions/index';

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
    this.props.loading();
    this.setState({ term: '' });
  };

  render() {
    return (
      <div>
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
        <p className="error text-center">{this.props.error}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    error: state.requestStatus.error,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather, loading }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
