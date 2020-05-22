import React, { useEffect } from 'react';

import { VoterForm } from './voter-tool/VoterForm';
import { VoterTable } from './voter-tool/VoterTable';
// basic voter register page hook with voterform and Table
export const VoterRegisterPage = ({
  onAddVoter,
  onGetVoters,
  onSaveVoter,
  onDeleteVoter,
  onEditVoter,
  onCancelVoter,
  editVoterId,
  voters,
}) => {
  useEffect(() => {
    onGetVoters();
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <VoterTable
        voters={voters}
        onAddVoter={onAddVoter}
        onSaveVoter={onSaveVoter}
        onDeleteVoter={onDeleteVoter}
        onEditVoter={onEditVoter}
        onCancelVoter={onCancelVoter}
        editVoterId={editVoterId}
      />
      <VoterForm onSubmitVoter={onAddVoter} />
    </>
  );
};
