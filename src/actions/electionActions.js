import { makeActionCreator as mac } from './makeActionCreator';

export const CREATE_ELECTION_REQUEST = 'ELECTION/CREATE_ELECTION_REQUEST';
export const CREATE_ELECTION_DONE = 'ELECTION/CREATE_ELECTION_DONE';
export const GET_ELECTION_REQUEST = 'ELECTION/GET_ELECTION_REQUEST';
export const GET_ELECTION_DONE = 'ELECTION/GET_ELECTION_DONE';
export const GET_ELECTION_RESULTS_REQUEST = 'ELECTION/GET_ELECTION_RESULTS_REQUEST';
export const GET_ELECTION_RESULTS_DONE = 'ELECTION/GET_ELECTION_RESULTS_DONE';
export const VIEW_ELECTION_ID = 'ELECTION/VIEW_ELECTION_ID';
export const HIDE_ELECTION_ID = 'ELECTION/HIDE_ELECTION_ID';

export const createElectionRequest = mac(CREATE_ELECTION_REQUEST, 'election');
export const createElectionDone = mac(CREATE_ELECTION_DONE);
export const getElectionsRequest = mac(GET_ELECTION_REQUEST);
export const getElectionsDone = mac(GET_ELECTION_DONE, 'elections');
export const getElectionResultsRequest = mac(GET_ELECTION_RESULTS_REQUEST);
export const getElectionResultsDone = mac(GET_ELECTION_RESULTS_DONE, 'elections');
export const setViewElectionId = mac(VIEW_ELECTION_ID, 'viewElectionId');
export const resetViewElectionId = mac(HIDE_ELECTION_ID, 'viewElectionId');

export const createViewElectionId = viewElectionId => (dispatch) => dispatch(setViewElectionId(viewElectionId));
export const createHideViewElectionId = viewElectionId =>(dispatch) => dispatch(resetViewElectionId(viewElectionId));

export const createElection = (election) => {
  return (dispatch) => {
    dispatch(createElectionRequest());
    return fetch('http://localhost:3060/elections', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(election),
    })
      .then((res) => res.json())
      .then((elections) => dispatch(createElectionDone(elections)));
  };
};

export const getElections = () => {
  return (dispatch) => {
    dispatch(getElectionsRequest());
    return fetch('http://localhost:3060/elections')
      .then((res) => res.json())
      .then((elections) => dispatch(getElectionsDone(elections)));
  };
};

export const getElectionResults = () => {
  return (dispatch) => {
    dispatch(getElectionResultsRequest());
    return fetch('http://localhost:3060/votes')
      .then((res) => res.json())
      .then((votes) => dispatch(getElectionResultsDone(votes)));
    };
};
