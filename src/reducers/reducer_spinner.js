import { LOADING } from '../actions/actions';

const initialState = {
  spinner: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return Object.assign({}, state, { spinner: true });
    default:
      return state;
  }
}
