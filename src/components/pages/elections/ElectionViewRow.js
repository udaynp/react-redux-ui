import React from 'react';

import { DataCell } from '../../../blocks/misc';

export const ElectionViewRow = ({ election, onCreateViewElectionId }) => {
  return (
    <tr>
      <DataCell>{election.id}</DataCell>
      <DataCell>{election.description}</DataCell>
      <DataCell>{election.choices[0].choice}</DataCell>
      <DataCell>{election.choices[1].choice}</DataCell>
      <DataCell>
        <button
          className='unicorn-button'
          type='button'
          onClick={() => onCreateViewElectionId(election.id)}
        >
          View Results
        </button>
      </DataCell>
    </tr>
  );
};
