import { LOADING, RESPONSE_RECEIVED, ERROR } from '../actions/actions';

const initialState = {
  spinner: false,
  error: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return Object.assign({}, state, { spinner: true, error:'' });
    case RESPONSE_RECEIVED:
      return Object.assign({}, state, { spinner: false, error:'' });
    case ERROR:
      return Object.assign({}, state, { spinner: false, error: action.error });
    default:
      return state;
  }
}
