import React, { PropTypes } from 'react';
import ConfirmModalContainer from '../ConfirmModal/ConfirmModalContainer';
import DeleteTeamModalContainer from '../DeleteTeamModal/DeleteTeamModalContainer';

const ModalSection = ({ modals }) => {
  const modalContainers = [];
  if (modals.confirm !== undefined) {
    modalContainers.push(<ConfirmModalContainer key="modalContainer_confirm" />);
  }
  if (modals.deleteTeam !== undefined) {
    modalContainers.push(<DeleteTeamModalContainer key="modalContainer_deleteTeam" />);
  }

  return (
    <div>
      {modalContainers}
    </div>
  );
};

ModalSection.propTypes = {
  modals: PropTypes.object.isRequired
};

export default ModalSection;
