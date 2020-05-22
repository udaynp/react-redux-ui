import intialState from '../stores/initialStore.json';
import {
  GET_ELECTION_DONE,
  HIDE_ELECTION_ID,
  VIEW_ELECTION_ID,
  GET_ELECTION_RESULTS_DONE,
} from '../actions/electionActions';

export const reduceElections = (elections = intialState.elections, action) => {
  switch (action.type) {
    case GET_ELECTION_DONE:
      return action.elections;
    default:
      return elections;
  }
};

export const viewElectionIdReducer = (
  viewElectionId = intialState.viewElectionId,
  action
) => {
  switch (action.type) {
    case VIEW_ELECTION_ID:
      return action.viewElectionId;
    case HIDE_ELECTION_ID:
      return -1;
    default:
      return viewElectionId;
  }
};

export const electionResultsReducer = (votes = intialState.votes, action) => {
  switch (action.type) {
    case GET_ELECTION_RESULTS_DONE:
      return action.votes;
    default:
      return votes;
  }
};
