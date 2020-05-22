import { makeActionCreator as mac } from './makeActionCreator';

export const CAST_VOTE_REQUEST = 'VOTE/CAST_VOTE_REQUEST';
export const GET_VOTES_REQUEST = 'VOTE/GET_VOTES_REQUEST';
export const GET_VOTES_DONE = 'VOTE/GET_VOTES_DONE';
export const AUTH_USER = 'VOTE/AUTH_USER';
export const ACTIVE_ELECTION = 'VOTE/ACTIVE_ELECTION';

export const castVoteRequest = mac(CAST_VOTE_REQUEST, 'vote');
export const getVotesRequest = mac(GET_VOTES_REQUEST);
export const getVotesDone = mac(GET_VOTES_DONE, 'votes');
export const setAuthUser = mac(AUTH_USER, 'user');
export const activeElection = mac(ACTIVE_ELECTION, 'election');

export const authUser = (userEmail, voters) => (dispatch) => {
  if (!userEmail) {
    dispatch(setAuthUser(null));
  } else {
    const foundUser = voters.find((voter) => voter.email === userEmail);
    foundUser
      ? dispatch(setAuthUser(foundUser))
      : alert('You are not in the system!');
  }
};
export const setActiveElection = (electionId) => (dispatch) =>
  dispatch(activeElection(electionId));

export const castVote = (vote) => {
  return (dispatch) => {
    dispatch(castVoteRequest());
    return fetch('http://localhost:3060/votes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(vote),
    })
      .then((res) => res.json())
      .then(() => dispatch(getVotes()));
  };
};

export const getVotes = () => {
  return (dispatch) => {
    dispatch(getVotesRequest());
    return fetch('http://localhost:3060/votes')
      .then((res) => res.json())
      .then((votes) => dispatch(getVotesDone(votes)));
  };
};
