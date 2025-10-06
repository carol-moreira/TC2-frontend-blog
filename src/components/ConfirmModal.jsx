import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const ModalContent = styled.div`
  background: var(--card-white);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 450px;
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-20px)'};
  transition: transform 0.3s ease;

  h3 {
    margin-top: 0;
    color: var(--dark-brown);
  }

  p {
    color: var(--medium-brown);
    margin-bottom: 2rem;
  }
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  button {
    padding: 10px 18px;
  }
`;

const CancelButton = styled.button`
  background-color: var(--light-gray);
  color: var(--dark-brown);

  &:hover {
    background-color: #d1d1d1;
  }
`;

export default function ConfirmModal({ isOpen, onClose, onConfirm, title, message }) {

  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay isOpen={isOpen} onClick={onClose}>
      <ModalContent isOpen={isOpen} onClick={e => e.stopPropagation()}>
        <h3>{title || "Confirmar"}</h3>
        <p>{message || "Você tem certeza?"}</p>
        <ModalActions>
          <CancelButton onClick={onClose}>Cancelar</CancelButton>
          <button onClick={onConfirm}>Confirmar</button>
        </ModalActions>
      </ModalContent>
    </ModalOverlay>
  );
}