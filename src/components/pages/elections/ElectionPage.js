import React, { useEffect } from 'react';

import { ElectionTable } from '../elections/ElectionTable';

export const ElectionPage = ({
  onGetElectionResults: getElectionResults,
  onGetElections: getElections,
  elections,
  votes,
  viewElectionId,
  onCreateViewElectionId,
  onCreateHideViewElectionId,
}) => {
  useEffect(() => {
    getElections();
    getElectionResults();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <h1>Here are the results of your elections!!</h1>
      <ElectionTable
        elections={elections}
        votes={votes}
        viewElectionId={viewElectionId}
        onCreateViewElectionId={onCreateViewElectionId}
        onCreateHideViewElectionId={onCreateHideViewElectionId}
      />
    </>
  );
};
