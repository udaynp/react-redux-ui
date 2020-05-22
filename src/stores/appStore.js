import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reduceVotes } from '../reducers/voteReducers';
import { reduceVoters } from '../reducers/voterReducers';
import {
  reduceAuthUser,
  reduceActiveElection,
} from '../reducers/activeOpReducer';
//store with combining reducers
import { editVoterIdReducer } from '../reducers/editVoterIdReducers';
import {
  reduceElections,
  viewElectionIdReducer,
} from '../reducers/electionReducers';

export const appReducers = combineReducers({
  votes: reduceVotes,
  voters: reduceVoters,
  editVoterId: editVoterIdReducer,
  elections: reduceElections,
  authUser: reduceAuthUser,
  activeElection: reduceActiveElection,
  viewElectionId: viewElectionIdReducer,
});

//Creating store after combining reducers
export const appStore = createStore(
  appReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
