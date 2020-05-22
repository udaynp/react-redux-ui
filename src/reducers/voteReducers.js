import intialState from '../stores/initialStore.json';
import { GET_VOTES_DONE } from '../actions/voteActions';

export const reduceVotes = (votes = intialState.votes, action) => {
  switch (action.type) {
    case GET_VOTES_DONE:
      return action.votes;
    default:
      return votes;
  }
};
