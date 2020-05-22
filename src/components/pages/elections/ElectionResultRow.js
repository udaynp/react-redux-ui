import React from 'react';
import { DataCell } from '../../../blocks/misc';

export const ElectionResultRow = ({
  election,
  votes,
  onCreateHideViewElectionId,
}) => {
  const getVoteCount = (choiceId) => {
    return votes.filter(
      (vote) => vote.electionId === election.id && vote.choiceId === choiceId
    ).length;
  };

  return (
    <tr>
      <DataCell>{election.id}</DataCell>
      <DataCell>{election.description}</DataCell>
      <DataCell>
        {election.choices[0].choice +
          ' ' +
          getVoteCount(election.choices[0].id)}
      </DataCell>
      <DataCell>
        {election.choices[1].choice +
          ' ' +
          getVoteCount(election.choices[1].id)}
      </DataCell>
      <DataCell>
        <button
          className='unicorn-button'
          type='button'
          onClick={() => onCreateHideViewElectionId(election.id)}
        >
          Hide Results
        </button>
      </DataCell>
    </tr>
  );
};
