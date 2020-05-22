import React, { useState } from 'react';

import { useForm } from '../../../hooks/useFormArray';

export const ElectionForm = ({ onCreateElection }) => {
  const [electionForm, change, resetElectionForm] = useForm({
    description: '',
    choices: [
      { id: 1, choice: '' },
      { id: 2, choice: '' },
    ],
  });
  const [electionCreated, onChangeElectionState] = useState(false);

  const submitElection = () => {
    onCreateElection({ ...electionForm });
    resetElectionForm();
    onChangeElectionState(true);
  };

  const { description, choices } = electionForm;

  return electionCreated ? (
    <div>Election has been created!</div>
  ) : (
    <>
      <form className='unicorn-form'>
        <div>
          <label htmlFor='description-input'>Description:</label>
          <input
            type='text'
            id='description-input'
            name='description'
            value={description}
            onChange={change}
          />
        </div>
        <div>
          <label>Choices:</label>
        </div>
        <div>
          <label htmlFor='choice-input'>Choice 1</label>
          <input
            type='text'
            id='choice-input'
            name='choices-0'
            value={choices[0].choice}
            onChange={change}
          />
        </div>
        <div>
          <label htmlFor='choice-input'>Choice 2</label>
          <input
            type='text'
            id='choice-input'
            name='choices-1'
            value={choices[1].choice}
            onChange={change}
          />
        </div>
        <button
          type='button'
          onClick={submitElection}
          className='unicorn-button'
        >
          Create Election
        </button>
      </form>
    </>
  );
};
