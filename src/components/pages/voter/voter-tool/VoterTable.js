import React from 'react';

import { HeaderCell } from '../../../../blocks/misc';
import { VoterViewRow } from './VoterViewRow';
import { VoterEditRow } from './VoterEditRow';
//Voter table  with heading
export const VoterTable = ({
  voters,
  editVoterId,
  onEditVoter,
  onDeleteVoter,
  onSaveVoter,
  onCancelVoter,
}) => {
  return (
    <table className='unicorn-table'>
      <thead>
        <tr>
          <HeaderCell>Id</HeaderCell>
          <HeaderCell>Firstname</HeaderCell>
          <HeaderCell>Lastname</HeaderCell>
          <HeaderCell>Address</HeaderCell>
          <HeaderCell>City</HeaderCell>
          <HeaderCell>Birthdate</HeaderCell>
          <HeaderCell>Email</HeaderCell>
          <HeaderCell>Phone</HeaderCell>
          <HeaderCell>Action</HeaderCell>
        </tr>
      </thead>
      <tbody>
        {voters.map((voter) =>
          editVoterId === voter.id ? (
            <VoterEditRow
              key={voter.id}
              voter={voter}
              onSaveVoter={onSaveVoter}
              onCancelVoter={onCancelVoter}
            />
          ) : (
            <VoterViewRow
              key={voter.id}
              voter={voter}
              onEditVoter={onEditVoter}
              onDeleteVoter={onDeleteVoter}
            />
          )
        )}
      </tbody>
    </table>
  );
};
