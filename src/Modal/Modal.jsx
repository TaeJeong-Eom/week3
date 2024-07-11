import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ show, onClose, type }) => {
  if (!show) {
    return null;
  }

  const handleOverlayClick = (e) => {
    if (type !== 'confirm') {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {type === 'confirm' ? (
          <>
            <p>취소, 확인 버튼이 있는 Modal</p>
            <button onClick={onClose}>취소</button>
            <button>확인</button>
          </>
        ) : (
          <>
      
            <p>닫기 버튼만 있는 Modal</p>
            <button onClick={onClose}>닫기</button>
          </>
        )}
      </div>
    </div>
  );
};

const useModal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return { showModal, openModal, closeModal };
};

export { Modal, useModal };
