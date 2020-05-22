import React, { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';

import { Ballot } from './Ballot';

export const AvailableElections = ({
  elections,
  activeElection,
  onGetElections,
  onOpenElection,
  onVote,
}) => {
  useEffect(() => {
    onGetElections();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      {activeElection ? (
        <Ballot
          election={activeElection}
          onVote={onVote}
          onOpenElection={onOpenElection}
        />
      ) : (
        <ListGroup>
          <ListGroup.Item>Available Elections</ListGroup.Item>
          {elections.length === 0 ? (
            <ListGroup.Item key={'election-campaign-all-done'}>
              Yay! You already voted in every election!
            </ListGroup.Item>
          ) : (
            elections.map((election) => (
              <ListGroup.Item
                key={`election-campaign-${election.id}`}
                action
                onClick={() => onOpenElection(election)}
              >
                {election.description}
              </ListGroup.Item>
            ))
          )}
        </ListGroup>
      )}
    </>
  );
};
