import React from 'react';
import './modal.css';

const Modal = ({ setActiveFn, active }) => {
  return (
    <div className={active ? 'modal active' : 'modal'}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        <button onClick={() => setActiveFn()} style={{ padding: '50px' }}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default Modal;
