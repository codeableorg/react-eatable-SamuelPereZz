import React from "react";
import styled from "@emotion/styled";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  padding: 20px;
  border-radius: 20px;
  background: var(--light-gray, #f6f6f9);
  text-align: center;
  display: flex;
  width: 250px;
  padding: 32px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const YesButton = styled.button`
  display: flex;
  width: 262px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  background-color: #fa4a0c;
`;

const NoButton = styled.button`
  display: flex;
  width: 262px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  background-color: #efb60e;
`;

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  return (
    <ModalBackground>
      <ModalContent>
        <p>{message}</p>
        <YesButton onClick={onConfirm}>Yes, delete it!</YesButton>
        <NoButton onClick={onCancel}>No, cancel!</NoButton>
      </ModalContent>
    </ModalBackground>
  );
};

export default ConfirmationModal;
