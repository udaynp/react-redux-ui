import intialState from '../stores/initialStore.json';
import { AUTH_USER, ACTIVE_ELECTION } from '../actions/voteActions';

export const reduceAuthUser = (user = intialState.authUser, action) => {
  switch (action.type) {
    case AUTH_USER:
      return action.user;
    default:
      return user;
  }
};

export const reduceActiveElection = (
  election = intialState.activeElection,
  action
) => {
  switch (action.type) {
    case ACTIVE_ELECTION:
      return action.election;
    default:
      return election;
  }
};
