import intialState from '../stores/initialStore.json';
import {
  GET_VOTERS_DONE,
  EDIT_VOTER_ACTION,
  CANCEL_VOTER_ACTION,
} from '../actions/voterActions';

export const editVoterIdReducer = (
  editVoterId = intialState.editVoterId,
  action
) => {
  if (action.type === EDIT_VOTER_ACTION) {
    return action.voterId;
  }

  if (action.type === GET_VOTERS_DONE || action.type === CANCEL_VOTER_ACTION) {
    return -1;
  }

  return editVoterId;
};
