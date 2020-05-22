import React from 'react';

import { DataCell } from '../../../../blocks/misc';
import { useForm } from '../../../../hooks/useForm';
// Edit row function  with buttons
export const VoterEditRow = ({
  voter,
  onSaveVoter,
  onCancelVoter: cancelVoter,
}) => {
  const [voterForm, change] = useForm({
    ...voter,
  });

  const saveVoter = () => {
    onSaveVoter({
      ...voterForm,
      id: voter.id,
    });
  };

  return (
    <tr>
      <DataCell>{voter.id}</DataCell>
      <DataCell>
        <input
          type='text'
          id='firstname-input'
          name='firstName'
          value={voterForm.firstName}
          onChange={change}
        />
      </DataCell>
      <DataCell>
        <input
          type='text'
          id='lastname-input'
          name='lastName'
          value={voterForm.lastName}
          onChange={change}
        />
      </DataCell>
      <DataCell>
        <input
          type='text'
          id='address-input'
          name='address'
          value={voterForm.address}
          onChange={change}
        />
      </DataCell>
      <DataCell>
        <input
          type='text'
          id='city-input'
          name='city'
          value={voterForm.city}
          onChange={change}
        />
      </DataCell>
      <DataCell>
        <input
          type='text'
          id='birthdate-input'
          name='birthdate'
          value={voterForm.birthdate}
          onChange={change}
        />
      </DataCell>
      <DataCell>
        <input
          type='text'
          id='email-input'
          name='email'
          value={voterForm.email}
          onChange={change}
        />
      </DataCell>
      <DataCell>
        <input
          type='text'
          id='phone-input'
          name='phone'
          value={voterForm.phone}
          onChange={change}
        />
      </DataCell>
      <DataCell>
        <button className='unicorn-button' type='button' onClick={saveVoter}>
          Save
        </button>
        <button className='unicorn-button' type='button' onClick={cancelVoter}>
          Cancel
        </button>
      </DataCell>
    </tr>
  );
};
