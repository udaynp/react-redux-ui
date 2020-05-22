import React from 'react';

import { DataCell } from '../../../../blocks/misc';

//Only Row View module with 2 buttons Edit and delete
export const VoterViewRow = ({
  voter,
  onEditVoter: editVoter,
  onDeleteVoter: deleteVoter,
}) => {
  return (
    <tr>
      <DataCell>{voter.id}</DataCell>
      <DataCell>{voter.firstName}</DataCell>
      <DataCell>{voter.lastName}</DataCell>
      <DataCell>{voter.address}</DataCell>
      <DataCell>{voter.city}</DataCell>
      <DataCell>{voter.birthdate}</DataCell>
      <DataCell>{voter.email}</DataCell>
      <DataCell>{voter.phone}</DataCell>
      <DataCell>
        <button
          className='unicorn-button'
          type='button'
          onClick={() => editVoter(voter.id)}
        >
          Edit
        </button>
        <button
          className='unicorn-button'
          type='button'
          onClick={() => deleteVoter(voter.id)}
        >
          Delete
        </button>
      </DataCell>
    </tr>
  );
};
