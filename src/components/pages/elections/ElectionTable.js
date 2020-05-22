import React from 'react';

import { HeaderCell } from '../../../blocks/misc';
import { ElectionViewRow } from './ElectionViewRow';
import { ElectionResultRow } from './ElectionResultRow';

export const ElectionTable = ({
  elections,
  votes,
  viewElectionId,
  onCreateViewElectionId,
  onCreateHideViewElectionId,
}) => {
  return (
    <table className='unicorn-table'>
      <thead>
        <tr>
          <HeaderCell>Id</HeaderCell>
          <HeaderCell>Description</HeaderCell>
          <HeaderCell>Choice 1</HeaderCell>
          <HeaderCell>Choice 2</HeaderCell>
          <HeaderCell>Action</HeaderCell>
        </tr>
      </thead>
      <tbody>
        {elections.map((election) =>
          viewElectionId === election.id ? (
            <ElectionResultRow
              key={election.id}
              election={election}
              votes={votes}
              onCreateHideViewElectionId={onCreateHideViewElectionId}
            />
          ) : (
            <ElectionViewRow
              key={election.id}
              election={election}
              onCreateViewElectionId={onCreateViewElectionId}
            />
          )
        )}
      </tbody>
    </table>
  );
};
