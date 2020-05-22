import React, { useEffect } from 'react';

import { SectionHeader } from '../../blocks/SectionHeader';
import { ContentSection } from '../../blocks/ContentSection';
import { VoterTable } from '../voter-tool/VoterTable';
import { VoterForm } from '../voter-tool/VoterForm';

export const RegisterVoter = ({
  voters, editVoterId,
  onRefreshVoters: refreshVoters,
  onAddVoter: addVoter,
  onSaveVoter: saveVoter,
  onDeleteVoter: deleteVoter,
  onEditVoter: editVoter,
  onCancelVoter: cancelVoter,
  headerText,
}) => {

  useEffect(() => {

    refreshVoters();

  }, []);

  return (
    <>
      <SectionHeader headerText={headerText} />
      
      <ContentSection headerText="Voter Table">
        <VoterTable voters={voters} editVoterId={editVoterId}
          onEditVoter={editVoter} onDeleteVoter={deleteVoter}
          onSaveVoter={saveVoter} onCancelVoter={cancelVoter} />
      </ContentSection>

      <ContentSection headerText="Voter Form">
        <VoterForm buttonText="add Voter " onSubmitVoter={addVoter} />
      </ContentSection>
    </>
  );

};


