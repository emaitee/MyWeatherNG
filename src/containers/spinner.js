import React from 'react';
import { connect } from 'react-redux';

class Spinner extends React.Component {
  render() {
    if (this.props.spinner) {
      return (
        <div className="text-center">
          {/* <i>Please wait...</i> */}
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      );
    }

    return null;
  }
}

function mapStateToProps(state) {
  return {
    spinner: state.requestStatus.spinner,
  };
}

export default connect(mapStateToProps)(Spinner);
