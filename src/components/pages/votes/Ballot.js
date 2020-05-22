import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from '../../../hooks/useBallotForm';

export const Ballot = ({ election, onVote, onOpenElection }) => {
  const { description, choices } = election;

  const [ballotForm, onChange, resetBallotForm] = useForm([
    {
      choiceId: 0,
      checked: false,
    },
  ]);

  const [voted, onChangeVoteState] = useState(false);

  const vote = () => {
    onVote(Number(ballotForm[0].choiceId));
    resetBallotForm();
    onChangeVoteState(true);
  };

  const allowMultiple = false;

  return voted ? (
    <div>Thanks for voting!</div>
  ) : (
    <form>
      <label>{description}</label>
      <Form.Group
        key={`election-${election.id}-ballot-choice-group`}
        controlId='ballot-form-choice'
      >
        {choices.map((choice) => (
          <Form.Check
            key={`election-${election.id}-ballot-choice-${choice.id}`}
            id={`election-${election.id}-ballot-choice-${choice.id}`}
            type='radio'
            label={choice.choice}
            name='ballot-choice'
            // checked={choice.checked}
            value={choice.id}
            onChange={(e) => onChange(e, allowMultiple)}
          />
        ))}
        <button
          variant='primary'
          type='button'
          onClick={vote}
          className='unicorn-button'
        >
          Cast Vote
        </button>
      </Form.Group>
    </form>
  );
};
