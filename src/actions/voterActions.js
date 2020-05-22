//import { makeActionCreator as mac } from './makeActionCreator';

//This are the actions for redux
export const SAVE_VOTER_DONE = 'REGISTER/CREATE_VOTER_DONE';
export const SAVE_VOTER_REQUEST = 'REGISTER/REGISTER_VOTER_REQUEST';
export const GET_VOTERS_REQUEST = 'REGISTER/GET_VOTER_REQUEST';
export const GET_VOTERS_DONE = 'REGISTER/GET_VOTER_DONE';
export const DELETE_VOTER_REQUEST_ACTION = 'REGISTER/DELETE_VOTER_REQUEST';
export const EDIT_VOTER_ACTION = 'REGISTER/EDIT_VOTER';
export const CANCEL_VOTER_ACTION = 'REGISTER/CANCEL_VOTER';

//Delete action
export const createDeleteVoterRequestAction = (voterId) => ({
  type: DELETE_VOTER_REQUEST_ACTION,
  voterId,
});
// Edit voter action getting voter Id from Edit table
export const createEditVoterAction = (voterId) => ({
  type: EDIT_VOTER_ACTION,
  voterId,
});
//Cancelaction using beside Edit action
export const createCancelVoterAction = () => ({ type: CANCEL_VOTER_ACTION });

export const createSaveVoterRequestAction = (voter) => ({
  type: SAVE_VOTER_REQUEST,
  voter,
});
// Save action
export const createSaveVoterDoneAction = () => ({ type: SAVE_VOTER_DONE });
export const createGetVotersRequestAction = () => ({
  type: GET_VOTERS_REQUEST,
});
export const createGetVotersDoneAction = (voters) => ({
  type: GET_VOTERS_DONE,
  voters,
});

//Create voter function for Saving when ever you have submitted .
// Asyncronous function with dispatch
export const createVoter = (voter) => {
  return (dispatch) => {
    dispatch(createSaveVoterRequestAction());
    return fetch('http://localhost:3060/voters', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(voter),
    }).then(() => dispatch(getVoters()));
  };
};
export const deleteVoter = (voterId) => {
  return (dispatch) => {
    dispatch(createDeleteVoterRequestAction(voterId));
    return fetch(
      'http://localhost:3060/voters/' + encodeURIComponent(voterId),
      {
        method: 'DELETE',
      }
    ).then(() => dispatch(getVoters()));
  };
};

export const saveVoter = (voter) => {
  return (dispatch) => {
    dispatch(createEditVoterAction(voter));
    return fetch(
      'http://localhost:3060/voters/' + encodeURIComponent(voter.id),
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(voter),
      }
    ).then(() => dispatch(getVoters()));
  };
};

export const getVoters = () => {
  return (dispatch) => {
    dispatch(createGetVotersRequestAction());
    return fetch('http://localhost:3060/voters')
      .then((res) => res.json())
      .then((voters) => dispatch(createGetVotersDoneAction(voters)));
  };
};
