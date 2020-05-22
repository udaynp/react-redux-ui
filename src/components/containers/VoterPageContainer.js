import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import {
  createVoter,
  getVoters,
  deleteVoter,
  saveVoter,
  createEditVoterAction,
  createCancelVoterAction,
} from '../../actions/voterActions';

//Component selection part

import { VoterRegisterPage } from '../pages/voter/VoterRegisterPage';

export const VoterPageContainer = () => {
  const voters = useSelector((state) => state.voters);
  const editVoterId = useSelector((state) => state.editVoterId);

  const dispatchProps = bindActionCreators(
    {
      onAddVoter: createVoter,
      onGetVoters: getVoters,
      onSaveVoter: saveVoter,
      onDeleteVoter: deleteVoter,
      onEditVoter: createEditVoterAction,
      onCancelVoter: createCancelVoterAction,
    },
    useDispatch()
  );

  return (
    <VoterRegisterPage
      {...dispatchProps}
      voters={voters}
      editVoterId={editVoterId}
    />
  );
};
