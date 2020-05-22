import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  getElections,
  getElectionResults,
  createViewElectionId,
  createHideViewElectionId,
} from '../../actions/electionActions';

import { ElectionPage } from '../pages/elections/ElectionPage';

export const ElectionPageContainer = () => {
  const elections = useSelector((state) => state.elections);
  const votes = useSelector((state) => state.votes);
  const viewElectionId = useSelector((state) => state.viewElectionId);
  const dispatchProps = bindActionCreators(
    {
      onGetElections: getElections,
      onGetElectionResults: getElectionResults,
      onCreateViewElectionId: createViewElectionId,
      onCreateHideViewElectionId: createHideViewElectionId,
    },
    useDispatch()
  );

  return (
    <ElectionPage
      {...dispatchProps}
      elections={elections}
      votes={votes}
      viewElectionId={viewElectionId}
    />
  );
};
