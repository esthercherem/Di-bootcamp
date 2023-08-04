// components/RobotModal.js

import React from "react";

function RobotModal({ id, name, email, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img alt="robots" src={`https://robohash.org/${id}?size=300x300`} />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}

export default RobotModal;