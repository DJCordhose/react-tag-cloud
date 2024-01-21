import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // This binds your modal to your application root

const DescriptionModal = ({ isOpen, content, onRequestClose }) => (
  <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Description">
    <div>
      {typeof content === 'string' ? <p>{content}</p> : <img src={content} alt="Description" />}
      <button onClick={onRequestClose}>Close</button>
    </div>
  </Modal>
);

export default DescriptionModal;
