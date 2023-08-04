// RobotContainer.js (Functional Component without Redux)
import React from 'react';
import Robot from "./Robot";

function RobotContainer({ users, searchTerm }) {
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="robot-container">
      {filteredUsers.map((user) => (
        <Robot key={user.id} name={user.name} email={user.email} id={user.id} />
      ))}
    </div>
  );
}

export default RobotContainer;