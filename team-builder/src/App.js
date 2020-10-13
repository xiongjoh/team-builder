import React, { useState } from 'react';
import './App.css';
import Form from './Form'
import TeamMember from './TeamMember'
// import axios from 'axios'
import {v4 as uuid} from 'uuid'


const initialFormValues = {
  name:"",
  email:"",
  role:"",
}

function App() {

const [teamMembers, setTeamMember] = useState([])
const [formValues, setFormValues] = useState(initialFormValues)
const [memberToEdit, setMemberToEdit] = useState({})

const updateForm = (inputName, inputValue) => {
  setFormValues({...formValues, [inputName]:inputValue})
}

const submitForm = () => {
  const newTeamMember = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    role: formValues.role.trim(),
    id: uuid()
  }
  if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) return;

  setTeamMember([...teamMembers, newTeamMember])
  setFormValues(initialFormValues)
}

//stretch
const editMember = () => {
  
}

  return (
    <div className="App">
      <Form
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />
      {teamMembers.map(member => {
        return <TeamMember key={member.id} details={member} />
      })}
    </div>
  );
}

export default App;
