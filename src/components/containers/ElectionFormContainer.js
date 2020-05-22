import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { createElection } from '../../actions/electionActions';

import { ElectionForm } from '../pages/elections/ElectionForm';

export const ElectionFormContainer = () => {
  const elections = useSelector((state) => state.elections);
  const dispatchProps = bindActionCreators(
    {
      onCreateElection: createElection,
    },
    useDispatch()
  );

  return <ElectionForm {...dispatchProps} elections={elections} />;
};
