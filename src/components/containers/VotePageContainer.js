import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import {
  castVote,
  getVotes,
  authUser,
  setActiveElection,
} from '../../actions/voteActions';
import { getElections } from '../../actions/electionActions';
import { getVoters } from '../../actions/voterActions';
import { AvailableElections } from '../pages/votes/AvailableElections';

export const VotePageContainer = () => {
  const votes = useSelector((state) => state.votes);
  const elections = useSelector((state) => state.elections);
  const authedUser = useSelector((state) => state.authUser);
  const activeElection = useSelector((state) => state.activeElection);

  const dispatchProps = bindActionCreators(
    {
      onCastVote: castVote,
      onGetVotes: getVotes,
      onAuthUser: authUser,
      onGetElections: getElections,
      onOpenElection: setActiveElection,
      onGetVoters: getVoters,
    },
    useDispatch()
  );

  const voteInElection = (choice) => {
    const voteObject = {
      electionId: activeElection.id,
      userId: authedUser.id,
      choiceId: choice,
    };
    dispatchProps.onCastVote(voteObject);
  };

  const filteredElections = () => {
    // go through the votes and see which ones the user has votes on already
    const votedElections = votes
      .filter((vote) => vote.userId === authedUser.id)
      .map((vote) => vote.electionId);

    const unvotedElections = elections.filter(
      (election) =>
        !votedElections.find(
          (votedElectionId) => votedElectionId === election.id
        )
    );

    return unvotedElections;
  };

  useEffect(() => {
    dispatchProps.onOpenElection(null);
    //eslint-disable-next-line
  }, []);

  return authedUser ? (
    <AvailableElections
      onGetElections={dispatchProps.onGetElections}
      elections={filteredElections()}
      onOpenElection={(election) => dispatchProps.onOpenElection(election)}
      activeElection={activeElection}
      onVote={voteInElection}
    />
  ) : (
    <div>Please sign in first!</div>
  );
};
