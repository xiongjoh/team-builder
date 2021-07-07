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
const [memberToEdit, setMemberToEdit] = useState(initialFormValues)

const updateForm = (inputName, inputValue) => {
  setFormValues({...formValues, [inputName]:inputValue})
}

const editTeamMembers = () => {
  console.log(memberToEdit.id)
  teamMembers.forEach(member => {
    if (member.id === memberToEdit.id) {
      // console.log(`id Matches`)
      // console.log(member)
      // console.log(formValues)
      Object.assign(member, formValues)
    }
  })
}

const submitForm = () => {

  if (memberToEdit.name && memberToEdit.email && memberToEdit.role) {
    editTeamMembers()
    setMemberToEdit(initialFormValues)
    setFormValues(initialFormValues)
    return
  }

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
const editMember = (name, email, role, id) => {

  if (!name || !email || !role) return;
  setFormValues({...formValues, name: name, email: email, role: role, id: id})
  // console.log(formValues)
  setMemberToEdit({...memberToEdit, name: name, email: email, role: role, id: id})
  // console.log(memberToEdit)
}

  return (
    <div className="App">
      <Form
      values={formValues}
      update={updateForm}
      submit={submitForm}
      editedMember={memberToEdit}
      />
      {teamMembers.map(member => {
        return <TeamMember 
        key={member.id} 
        details={member} 
        edit={editMember} 
        />
      })}
    </div>
  );
}

export default App;
