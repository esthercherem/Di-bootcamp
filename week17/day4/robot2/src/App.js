// App.js (Functional Component without Redux)
import React, { useState, useEffect } from "react";
import RobotContainer from "./components/RobotContainer";
import './App.css';

const usersUrl = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(usersUrl)
      .then((res) => res.json())
      .then((users) => setUsers(users))
      .catch(console.error);
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h1 className="title">Robofriends</h1>
      <div className="tc">
        <div className="pa2">
          <input
            type="search"
            className="pa3 ba b--green bg-lightest-blue"
            placeholder="search robots"
            onChange={handleChange}
          />
        </div>
      </div>
      <RobotContainer users={users} searchTerm={searchTerm} />
    </div>
  );
}

export default App;