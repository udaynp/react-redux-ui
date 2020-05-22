import intialState from '../stores/initialStore.json';
import { GET_VOTERS_DONE } from '../actions/voterActions';

// Reducer to disply / refresh the list
export const reduceVoters = (voters = intialState.voters, action) => {
  switch (action.type) {
    case GET_VOTERS_DONE:
      return action.voters;
    default:
      return voters;
  }
};
