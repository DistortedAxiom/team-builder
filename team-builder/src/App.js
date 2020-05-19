import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/Form';
import Team from './components/Team';

function App() {

  const [team, setTeam] = useState([{
    name: 'Disto',
    email: "distortedaxiom@asdf.com",
    role: "None",
  }]);

  const [memberToEdit, setMemberToEdit] = useState({
    name: "",
    email: "",
    role: ""
  });

  const addMember = member => {
    setTeam([...team, member])
  }

  return (
    <div className="App">
      <header className="App-header">
        {team.map((el,i) => (
          <Team team={el} key={i}/>
        ))}
        <Form addMember={addMember}/>
      </header>
    </div>
  );
}

export default App;
